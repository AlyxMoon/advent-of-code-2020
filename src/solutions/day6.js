
const handleInput = (rawInput = '') => {
  return rawInput.replace(/\s/g, ' ').split('  ')
}

const part1 = (rawInput = '') => {
  const options = [...Array(26)].map((_, i) => String.fromCharCode(97 + i))
  const responses = handleInput(rawInput)

  let count = 0
  for (const response of responses) {
    count += options.reduce((sum, option) => {
      return sum + response.includes(option)
    }, 0)
  }

  return count
}

const part2 = (rawInput = '') => {
  const responses = handleInput(rawInput).map(line => line.split(' '))

  let count = 0
  for (const people of responses) {
    if (people.length === 1) {
      count += people[0].length
      continue
    }

    let tempCount = 0
    const [first, ...others] = people
    for (const option of first) {
      tempCount += others.every(person => person.includes(option))
    }

    count += tempCount
  }

  return count
}

module.exports = {
  handleInput,
  part1,
  part2,
}
