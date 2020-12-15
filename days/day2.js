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

  console.log(count)
}

const part2 = async () => {
}

const main = async () => {
  await part1()
  await part2()
}

main()
