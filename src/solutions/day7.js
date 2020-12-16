
const handleInput = (rawInput = '') => {
  return rawInput.split('\n')
    .reduce((rules, line) => {
      const parts = line.split('contain')
      const bag = parts[0].replace(/bags?/, '').trim()

      const innerBags = parts[1].split(',')
        .map(part => {
          const bag = part.replace(/bags?|[0-9,.]/g, '').trim()
          const count = Number(part.replace(/[^0-9]/g, '').trim())
          return bag === 'no other' ? [null, 0] : [bag, count]
        })

      rules[bag] = innerBags
      return rules
    }, {})
}

const containsBagInChain = (rules, currentBags, bagType) => {
  if (!currentBags) return false

  for (const [bag] of currentBags) {
    if (!bag) continue
    if (bag === bagType) return true
    if (containsBagInChain(rules, rules[bag], bagType)) return true
  }

  return false
}

const countBagsInChain = (rules, currentBags, count = 1) => {
  if (!currentBags) return 0

  for (const [bag, bagCount] of currentBags) {
    if (!bag) continue
    count = bagCount * countBagsInChain(rules, rules[bag], 1)
  }

  return count
}

const part1 = async (rawInput = '') => {
  const bagRules = await handleInput(rawInput)
  let answer = 0

  for (const innerBags of Object.values(bagRules)) {
    if (containsBagInChain(bagRules, innerBags, 'shiny gold')) answer++
  }

  return answer
}

const part2 = async (rawInput = '') => {
  const bagRules = await handleInput(rawInput)
  const answer = countBagsInChain(bagRules, bagRules['shiny gold'])

  return answer
}

module.exports = {
  handleInput,
  part1,
  part2,
}
