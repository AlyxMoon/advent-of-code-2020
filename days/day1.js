const getInput = require('../lib/getInput')

const handleInput = async () => {
  const rawData = await getInput(1)

  return new Map(
    rawData.trim()
      .split('\n')
      .map(line => [Number(line), true]),
  )
}

const main = async () => {
  const sumVal = 2020
  const numMap = await handleInput()

  for (const num of numMap.keys()) {
    if (numMap.has(sumVal - num)) {
      console.log(num * (sumVal - num))
      break
    }
  }
}

main()
