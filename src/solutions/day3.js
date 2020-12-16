
class SnowMap {
  grid = []
  width = 0
  height = 0

  constructor (stringInput = '') {
    this.createGridFromInput(stringInput)
  }

  createGridFromInput (stringInput) {
    this.grid = stringInput.replace(/\s+/g, '')
    this.height = stringInput.trim().match(/\s+/g).length + 1
    this.width = this.grid.length / this.height
  }

  getValueAtPosition ([row, col]) {
    return this.grid[(this.width * row) + col]
  }

  updatePosition ([startRow, startCol], [changeRow, changeCol]) {
    return [
      startRow + changeRow,
      (startCol + changeCol) % this.width,
    ]
  }
}

const handleInput = (rawInput = '') => {
  return new SnowMap(rawInput)
}

const part1 = (rawInput = '') => {
  const snowMap = handleInput(rawInput)
  let count = 0

  for (
    let pos = [0, 0];
    pos[0] <= snowMap.height;
    pos = snowMap.updatePosition(pos, [1, 3])
  ) {
    if (snowMap.getValueAtPosition(pos) === '#') count++
  }

  return count
}

const part2 = (rawInput = '') => {
  const snowMap = handleInput(rawInput)

  const slopes = [
    [1, 1],
    [1, 3],
    [1, 5],
    [1, 7],
    [2, 1],
  ]
  const countsPerSlope = Array(slopes.length).fill(0)

  for (const [index, slope] of slopes.entries()) {
    for (
      let pos = [0, 0];
      pos[0] <= snowMap.height;
      pos = snowMap.updatePosition(pos, [slope[0], slope[1]])
    ) {
      if (snowMap.getValueAtPosition(pos) === '#') countsPerSlope[index]++
    }
  }

  return countsPerSlope.reduce((product, val) => product * val, 1)
}

module.exports = {
  handleInput,
  part1,
  part2,
}
