const getInput = require('./lib/getInput')

const readCommandLineArgs = () => {
  const [day, part] = (process.argv[2] || '').split('.').map(Number)
  if (day || part) {
    if (Number.isInteger(day) && (day < 1 || day > 25)) {
      throw new Error('Invalid day provided, needs to be between 1 - 25')
    }
    if (Number.isInteger(part) && ![1, 2].includes(part)) {
      throw new Error('Invalid part provided, needs to be 1 or 2')
    }

    return { day, part }
  }

  return { day: 0, part: 0 }
}

const main = async () => {
  const { day, part } = readCommandLineArgs()

  if (!day) {
    console.error('Please enter the day you wish you get the answer for.')
    return
  }

  const input = await getInput(day)
  const script = require(`./solutions/day${day}`)

  if ((!part || part === 1) && script.part1) {
    const answer = await script.part1(input)
    console.log(`Part 1: ${answer}`)
  }

  if ((!part || part === 2) && script.part2) {
    const answer = await script.part2(input)
    console.log(`Part 2: ${answer}`)
  }
}

main()
