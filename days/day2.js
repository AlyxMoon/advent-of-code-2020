const getInput = require('../lib/getInput')

const handleInput = async () => {
  const rawData = (await getInput(2)).trim().split('\n')

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

const part1 = async () => {
  const passwordsAndPolicies = await handleInput()

  let count = 0
  for (const { password, char, min, max } of passwordsAndPolicies) {
    const regexNotRequiredChar = new RegExp(`[^${char}]`, 'g')
    const strOnlyRequiredChar = password.replace(regexNotRequiredChar, '')
    const length = strOnlyRequiredChar.length

    if (length >= min && length <= max) count++
  }

  console.log(`Part 1: ${count}`)
}

const part2 = async () => {
  const passwordsAndPolicies = await handleInput()

  let count = 0
  for (const { password, char, min, max } of passwordsAndPolicies) {
    const validCount = (password[min - 1] === char) + (password[max - 1] === char)

    if (validCount === 1) count++
  }

  console.log(`Part 2: ${count}`)
}

const main = async () => {
  await part1()
  await part2()
}

main()
