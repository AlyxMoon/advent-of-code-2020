const getInput = require('../lib/getInput')

const handleInput = async () => {
  const rawData = await getInput(4)

  const passports = rawData.trim()
    .replace(/(\r\n|\r)/g, '\n').replace(/\s/g, ' ')
    .split('  ')
    .map(passportFields => {
      const formattedData = {}
      const fields = passportFields.split(' ')

      for (const field of fields) {
        const [key, value] = field.split(':')
        formattedData[key] = value
      }

      return formattedData
    })

  return passports
}

const part1 = async () => {
  const requiredFields = [
    'byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid',
  ]

  const passports = await handleInput()
  let validCount = 0

  for (const passport of passports) {
    validCount += requiredFields.every(field => field in passport)
  }

  console.log(`Part 1: ${validCount}`)
}

const part2 = async () => {
}

const main = async () => {
  await part1()
  await part2()
}

main()
