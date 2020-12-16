const getInput = require('../lib/getInput')

const handleInput = async () => {
  return (await getInput(6))
    .replace(/\s/g, ' ')
    .split('  ')
}

const part1 = async () => {
  const options = [...Array(26)].map((_, i) => String.fromCharCode(97 + i))
  const responses = await handleInput()

  let count = 0
  for (const response of responses) {
    count += options.reduce((sum, option) => {
      return sum + response.includes(option)
    }, 0)
  }

  console.log(`Part 1: ${count}`)
}

const part2 = async () => {
}

const main = async () => {
  await part1()
  await part2()
}

main()
