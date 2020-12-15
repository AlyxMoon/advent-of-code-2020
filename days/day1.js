const getInput = require('../lib/getInput')

const handleInput = async () => {
  return (await getInput(1)).trim().split('\n')
}

const part1 = async () => {
  const sumVal = 2020
  const numMap = new Map(
    (await handleInput()).map(line => [Number(line), null]),
  )

  for (const num of numMap.keys()) {
    if (numMap.has(sumVal - num)) {
      console.log(`Part 1: ${num * (sumVal - num)}`)
      break
    }
  }
}

const part2 = async () => {
  const sumVal = 2020
  const nums = (await handleInput()).map(Number)

  for (let x = 0; x < nums.length - 2; x++) {
    for (let y = x + 1; y < nums.length - 1; y++) {
      const [val1, val2] = [nums[x], nums[y]]

      if (val1 + val2 >= sumVal) continue
      for (let z = y + 1; z < nums.length; z++) {
        const val3 = nums[z]

        if (val1 + val2 + val3 === sumVal) {
          console.log(`Part 2: ${val1 * val2 * val3}`)
          break
        }
      }
    }
  }
}

const main = async () => {
  await part1()
  await part2()
}

main()
