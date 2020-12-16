const handleInput = (rawInput = '') => {
  return rawInput.trim().split('\n')
}

const part1 = (rawInput = '') => {
  const sumVal = 2020
  const numMap = new Map(
    handleInput(rawInput).map(line => [Number(line), null]),
  )

  for (const num of numMap.keys()) {
    if (numMap.has(sumVal - num)) {
      return num * (sumVal - num)
    }
  }
}

const part2 = (rawInput = '') => {
  const sumVal = 2020
  const nums = handleInput(rawInput).map(Number)

  for (let x = 0; x < nums.length - 2; x++) {
    for (let y = x + 1; y < nums.length - 1; y++) {
      const [val1, val2] = [nums[x], nums[y]]

      if (val1 + val2 >= sumVal) continue
      for (let z = y + 1; z < nums.length; z++) {
        const val3 = nums[z]

        if (val1 + val2 + val3 === sumVal) {
          return val1 * val2 * val3
        }
      }
    }
  }
}

module.exports = {
  handleInput,
  part1,
  part2,
}
