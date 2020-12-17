
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
  const numberCypher = handleInput(rawInput)
  let invalidNum

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

    if (!isValid) invalidNum = num
  }

  const numRange = [0, 1]
  let currentVal = numberCypher[0] + numberCypher[1]

  while (numRange[0] < numberCypher.length - 1) {
    if (currentVal === invalidNum) {
      const min = Math.min(...numberCypher.slice(numRange[0], numRange[1] + 1))
      const max = Math.max(...numberCypher.slice(numRange[0], numRange[1] + 1))
      return min + max
    }

    if (currentVal > invalidNum) {
      numRange[0]++
      numRange[1] = numRange[0] + 1
      currentVal = numberCypher[numRange[0]] + numberCypher[numRange[1]]
      continue
    }

    numRange[1]++
    currentVal += numberCypher[numRange[1]]
  }
}

module.exports = {
  handleInput,
  part1,
  part2,
}
