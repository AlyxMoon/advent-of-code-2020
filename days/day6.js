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
  const responses = (await handleInput()).map(line => line.split(' '))

  let count = 0
  for (const people of responses) {
    if (people.length === 1) {
      count += people[0].length
      continue
    }

    let tempCount = 0
    const [first, ...others] = people
    for (const option of first) {
      tempCount += others.every(person => person.includes(option))
    }

    count += tempCount
  }

  console.log(`Part 2: ${count}`)
}

const main = async () => {
  await part1()
  await part2()
}

main()
