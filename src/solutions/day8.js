
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

  let accumulator = 0
  let sanityCheck = 1000000
  for (let node = activeProgram[0], index = 0; !node[2]; node = activeProgram[index]) {
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

    if (sanityCheck-- <= 0) {
      return 'Error: Got stuck in infinite loop'
    }
  }

  return accumulator
}

const part1 = (rawInput = '') => {
  const program = handleInput(rawInput)

  return runProgramOnce(program)
}

const part2 = (rawInput = '') => {
}

module.exports = {
  handleInput,
  part1,
  part2,
}
