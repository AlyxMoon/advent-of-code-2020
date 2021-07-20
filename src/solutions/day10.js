
const handleInput = (rawInput = '') => {
  return rawInput.trim().split('\n')
    .map(Number)
}

const part1 = (rawInput = '') => {
  const adapters = handleInput(rawInput)
  adapters.sort((a, b) => a - b)

  let diff1 = 1
  let diff3 = 1

  for (let i = 1; i < adapters.length; i++) {
    const diff = adapters[i] - adapters[i - 1]

    if (diff === 1) diff3++
    if (diff === 3) diff1++
  }

  return diff1 * diff3
}

module.exports = {
  handleInput,
  part1,
}
