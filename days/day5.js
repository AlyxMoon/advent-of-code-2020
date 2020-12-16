const getInput = require('../lib/getInput')

const handleInput = async () => {
  return (await getInput(5))
    .split('\n')
    .map(line => [
      line.trim().slice(0, 7),
      line.trim().slice(7, 10),
    ])
}

const runPartitioner = (instructions = '', max) => {
  const bounds = [0, max]

  for (const dir of instructions) {
    const average = (bounds[0] + bounds[1]) / 2
    if (dir === 'F' || dir === 'L') {
      bounds[1] = Math.floor(average)
    }

    if (dir === 'B' || dir === 'R') {
      bounds[0] = Math.ceil(average)
    }
  }

  return bounds[0]
}

const runPartitionerRows = (instructions = '') => {
  return runPartitioner(instructions, 127)
}

const runPartitionerCols = (instructions = '') => {
  return runPartitioner(instructions, 7)
}

const part1 = async () => {
  const instructions = await handleInput()
  let max = 0

  for (const [rowInstruction, colInstruction] of instructions) {
    const row = runPartitionerRows(rowInstruction)
    const col = runPartitionerCols(colInstruction)

    max = Math.max(max, row * 8 + col)
  }

  console.log(`Part 1: ${max}`)
}

const part2 = async () => {
  const instructions = await handleInput()

  const availableSeats = new Map()
  for (let row = 0; row < 128; row++) {
    for (let col = 0; col < 8; col++) {
      availableSeats.set(row * 8 + col, null)
    }
  }

  for (const [rowInstruction, colInstruction] of instructions) {
    const row = runPartitionerRows(rowInstruction)
    const col = runPartitionerCols(colInstruction)

    availableSeats.delete(row * 8 + col)
  }

  for (const id of availableSeats.keys()) {
    if (availableSeats.has(id - 1) || availableSeats.has(id + 1)) continue

    console.log(`Part 2: ${id}`)
    break
  }
}

const main = async () => {
  await part1()
  await part2()
}

main()