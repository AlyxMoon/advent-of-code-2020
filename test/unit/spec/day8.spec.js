
const getInput = require('@lib/getInput')
const solutions = require('@solutions/day8')

describe('Day 8', () => {
  it('part 1 passes example dataset', () => {
    const testData = `
      nop +0
      acc +1
      jmp +4
      acc +3
      jmp -3
      acc -99
      acc +1
      jmp -4
      acc +6
    `

    expect(solutions.part1(testData)).toEqual(5)
  })

  it('part 1 gives correct solution', async () => {
    const data = await getInput(8)
    expect(solutions.part1(data)).toEqual(1915)
  })

  it('part 2 passes example dataset', () => {
    const testData = `
      nop +0
      acc +1
      jmp +4
      acc +3
      jmp -3
      acc -99
      acc +1
      jmp -4
      acc +6
    `

    expect(solutions.part2(testData)).toEqual(8)
  })

  it('part 2 gives correct solution', async () => {
    const data = await getInput(8)
    expect(solutions.part2(data)).toEqual(944)
  })
})
