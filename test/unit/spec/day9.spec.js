
const getInput = require('@lib/getInput')
const solutions = require('@solutions/day9')

describe('Day 9', () => {
  it('part 1 passes example dataset', () => {
    const testData = `
      35
      20
      15
      25
      47
      40
      62
      55
      65
      95
      102
      117
      150
      182
      127
      219
      299
      277
      309
      576
    `

    expect(solutions.part1(testData, 5)).toEqual(127)
  })

  it('part 1 gives correct solution', async () => {
    const data = await getInput(9)
    expect(solutions.part1(data)).toEqual(1930745883)
  })

  it.skip('part 2 passes example dataset', () => {
    const testData = `
    `

    expect(solutions.part2(testData)).toEqual()
  })

  it.skip('part 2 gives correct solution', async () => {
    const data = await getInput(9)
    expect(solutions.part2(data)).toEqual()
  })
})
