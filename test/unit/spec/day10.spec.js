
const getInput = require('@lib/getInput')
const solutions = require('@solutions/day10')

// given x differences of 1 jolt
// and y differences of 3 jolts
// solution should be: x * y
describe('Day 10', () => {
  it('part 1 passes example dataset', () => {
    const testData = `
      16
      10
      15
      5
      1
      11
      7
      19
      6
      12
      4
    `

    // 7 diff 1 jolt, 5 diff 3 jolts
    expect(solutions.part1(testData)).toEqual(35)
  })

  it('part 1 passes example dataset 2', () => {
    const testData = `
      28
      33
      18
      42
      31
      14
      46
      20
      48
      47
      24
      23
      49
      45
      19
      38
      39
      11
      1
      32
      25
      35
      8
      17
      7
      9
      4
      2
      34
      10
      3
    `

    // 22 diff 1 jolt, 10 diff 3 jolts
    expect(solutions.part1(testData)).toEqual(220)
  })

  it('part 1 gives correct solution', async () => {
    const data = await getInput(10)
    expect(solutions.part1(data)).toEqual(2450)
  })
})
