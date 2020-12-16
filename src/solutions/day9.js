
const handleInput = (rawInput = '') => {
  return rawInput.trim().split('\n')
    .map(Number)
}

const part1 = (rawInput = '', preambleLength = 25) => {
  const numberCypher = handleInput(rawInput)

  for (let i = preambleLength; i < numberCypher.length; i++) {
    const [num, prev] = [
      numberCypher[i],
      numberCypher.slice(i - preambleLength, i),
    ]

    let isValid = false
    for (let i = 0; i < prev.length - 1; i++) {
      for (let j = 1; j < prev.length; j++) {
        if (num === prev[i] + prev[j]) {
          isValid = true
          break
        }
      }

      if (isValid) break
    }

    if (!isValid) return num
  }
}

const part2 = (rawInput = '', preambleLength = 25) => {
}

module.exports = {
  handleInput,
  part1,
  part2,
}
