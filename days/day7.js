const getInput = require('../lib/getInput')

const handleInput = async () => {
  return (await getInput(7))
    .split('\n')
    .reduce((rules, line) => {
      const parts = line.split('contain')
      const bag = parts[0].replace(/bags?/, '').trim()

      const innerBags = parts[1].split(',')
        .map(part => {
          const bag = part.replace(/bags?|[0-9,.]/g, '').trim()
          return bag === 'no other' ? null : bag
        })

      rules[bag] = innerBags
      return rules
    }, {})
}

const containsBagInChain = (rules, currentBags, bagType) => {
  if (!currentBags) return false

  for (const bag of currentBags) {
    if (!bag) continue
    if (bag === bagType) return true
    if (containsBagInChain(rules, rules[bag], bagType)) return true
  }

  return false
}

const part1 = async () => {
  const bagRules = await handleInput()
  let count = 0

  for (const innerBags of Object.values(bagRules)) {
    if (containsBagInChain(bagRules, innerBags, 'shiny gold')) count++
  }

  console.log(`Part 1: ${count}`)
}

const part2 = async () => {
}

const main = async () => {
  await part1()
  await part2()
}

main()
