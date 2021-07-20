
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

const part2 = (rawInput = '') => {
  const adapters = new Map(
    handleInput(rawInput).map(adapter => [
      adapter,
      -1,
    ]),
  )

  adapters.set(Math.max(...adapters.keys()), 1)

  const countPossiblePathsFromNode = (node, count = 0) => {
    let tempCount = 0

    for (let i = node + 1; i < node + 4; i++) {
      if (!adapters.has(i)) continue

      tempCount += adapters.get(i) > -1
        ? adapters.get(i)
        : countPossiblePathsFromNode(i, count)
    }

    adapters.set(node, count + tempCount)
    return adapters.get(node)
  }

  return countPossiblePathsFromNode(0)
}

module.exports = {
  handleInput,
  part1,
  part2,
}
