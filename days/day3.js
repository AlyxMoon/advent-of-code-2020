const getInput = require('../lib/getInput')

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

const handleInput = async () => {
  return new SnowMap(await getInput(3))
}

const part1 = async () => {
  const snowMap = await handleInput()
  let count = 0

  for (
    let pos = [0, 0];
    pos[0] <= snowMap.height;
    pos = snowMap.updatePosition(pos, [1, 3])
  ) {
    if (snowMap.getValueAtPosition(pos) === '#') count++
  }

  console.log(`Part 1: ${count}`)
}

const part2 = async () => {
  const snowMap = await handleInput()

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

  const product = countsPerSlope.reduce((product, val) => product * val, 1)
  console.log(`Part 2: ${product}`)
}

const main = async () => {
  await part1()
  await part2()
}

main()
