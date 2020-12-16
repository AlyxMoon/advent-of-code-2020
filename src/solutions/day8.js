
const handleInput = (rawInput = '') => {
  return rawInput.trim().split('\n')
    .map(line => {
      const parts = line.trim().split(' ')
      return [parts[0], Number(parts[1])]
    })
}

const runProgramOnce = (instructions) => {
  // [operation, argument, alreadyRan]
  const activeProgram = instructions.map(instruction => {
    return [...instruction, false]
  })

  let node = activeProgram[0]
  let index = 0
  let accumulator = 0
  let sanityCheck = 1000000

  while (node && !node[2]) {
    const [op, arg] = node
    node[2] = true

    if (op === 'nop') {
      index++
    }

    if (op === 'acc') {
      accumulator += arg
      index++
    }

    if (op === 'jmp') {
      index += arg
    }

    node = activeProgram[index]

    if (sanityCheck-- <= 0) {
      return 'Error: Got stuck in infinite loop'
    }
  }

  return {
    program: activeProgram,
    accumulator,
    terminatedCleanly: !node,
  }
}

const runProgramDiagnostic = (instructions) => {
  const activeProgram = instructions.slice()

  for (const instruction of activeProgram) {
    const op = instruction[0]
    let nextOp

    if (op === 'acc') continue
    if (op === 'nop') nextOp = 'jmp'
    if (op === 'jmp') nextOp = 'nop'

    instruction[0] = nextOp

    const result = runProgramOnce(activeProgram)
    if (result.terminatedCleanly) {
      return result
    }

    instruction[0] = op
  }
}

const part1 = (rawInput = '') => {
  const program = handleInput(rawInput)

  return runProgramOnce(program).accumulator
}

const part2 = (rawInput = '') => {
  const program = handleInput(rawInput)
  return runProgramDiagnostic(program).accumulator
}

module.exports = {
  handleInput,
  part1,
  part2,
}
