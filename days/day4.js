const getInput = require('../lib/getInput')

class Passport {
  data = {}

  constructor (data = {}) {
    this.data = Object.assign({}, data)
  }

  validate () {
    return (
      this.validateBYR() &&
      this.validateIYR() &&
      this.validateEYR() &&
      this.validateHGT() &&
      this.validateHCL() &&
      this.validateECL() &&
      this.validatePID()
    )
  }

  validateBYR () {
    const val = Number(this.data.byr)
    return val && val >= 1920 && val <= 2002
  }

  validateIYR () {
    const val = Number(this.data.iyr)
    return val && val >= 2010 && val <= 2020
  }

  validateEYR () {
    const val = Number(this.data.eyr)
    return val && val >= 2020 && val <= 2030
  }

  validateHGT () {
    if (!this.data.hgt) return false
    const height = Number(this.data.hgt.replace(/\D/g, ''))

    if (this.data.hgt.endsWith('cm')) {
      return height >= 150 && height <= 193
    }

    if (this.data.hgt.endsWith('in')) {
      return height >= 59 && height <= 76
    }

    return false
  }

  validateHCL () {
    return /#\w{6}/.test(this.data.hcl || '')
  }

  validateECL () {
    return [
      'amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth',
    ].includes(this.data.ecl)
  }

  validatePID () {
    return /^\d{9}$/.test(this.data.pid)
  }
}

const handleInput = async () => {
  const rawData = await getInput(4)

  const passports = rawData.trim()
    .replace(/\s/g, ' ')
    .split('  ')
    .map(passportFields => {
      const formattedData = {}
      const fields = passportFields.split(' ')

      for (const field of fields) {
        const [key, value] = field.split(':')
        formattedData[key] = value
      }

      return new Passport(formattedData)
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
    validCount += requiredFields.every(field => field in passport.data)
  }

  console.log(`Part 1: ${validCount}`)
}

const part2 = async () => {
  const passports = await handleInput()
  let validCount = 0

  for (const passport of passports) {
    validCount += !!passport.validate()
  }

  console.log(`Part 2: ${validCount}`)
}

const main = async () => {
  await part1()
  await part2()
}

main()
