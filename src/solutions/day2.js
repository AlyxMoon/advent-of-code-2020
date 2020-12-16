
const handleInput = (rawInput = '') => {
  const rawData = rawInput.trim().split('\n')

  return rawData.map(line => {
    const [policy, password] = line.split(':')
    const [minMax, char] = policy.split(' ')
    const [min, max] = minMax.split('-').map(Number)

    return {
      password: password.trim(),
      char,
      min,
      max,
    }
  })
}

const part1 = (rawInput = '') => {
  const passwordsAndPolicies = handleInput(rawInput)

  let count = 0
  for (const { password, char, min, max } of passwordsAndPolicies) {
    const regexNotRequiredChar = new RegExp(`[^${char}]`, 'g')
    const strOnlyRequiredChar = password.replace(regexNotRequiredChar, '')
    const length = strOnlyRequiredChar.length

    if (length >= min && length <= max) count++
  }

  return count
}

const part2 = (rawInput = '') => {
  const passwordsAndPolicies = handleInput(rawInput)

  let count = 0
  for (const { password, char, min, max } of passwordsAndPolicies) {
    const validCount = (password[min - 1] === char) + (password[max - 1] === char)

    if (validCount === 1) count++
  }

  return count
}

module.exports = {
  handleInput,
  part1,
  part2,
}
