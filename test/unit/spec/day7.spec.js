
const getInput = require('@lib/getInput')
const solutions = require('@solutions/day7')

describe('Day 7', () => {
  it('part 1 passes example dataset', () => {
    const testData = `
      light red bags contain 1 bright white bag, 2 muted yellow bags.
      dark orange bags contain 3 bright white bags, 4 muted yellow bags.
      bright white bags contain 1 shiny gold bag.
      muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.
      shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.
      dark olive bags contain 3 faded blue bags, 4 dotted black bags.
      vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.
      faded blue bags contain no other bags.
      dotted black bags contain no other bags.
    `

    expect(solutions.part1(testData)).toEqual(4)
  })

  it('part 1 gives correct solution', async () => {
    const data = await getInput(7)
    expect(solutions.part1(data)).toEqual(378)
  })

  it('part 2 passes example dataset', () => {
    const testData = `
      shiny gold bags contain 2 dark red bags.
      dark red bags contain 2 dark orange bags.
      dark orange bags contain 2 dark yellow bags.
      dark yellow bags contain 2 dark green bags.
      dark green bags contain 2 dark blue bags.
      dark blue bags contain 2 dark violet bags.
      dark violet bags contain no other bags.
    `

    expect(solutions.part2(testData)).toEqual(126)
  })

  it('part 2 gives correct solution', async () => {
    const data = await getInput(7)
    expect(solutions.part2(data)).toEqual(27526)
  })
})
