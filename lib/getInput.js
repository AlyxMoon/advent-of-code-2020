const { readFile } = require('fs')
const { join } = require('path')
const { promisify } = require('util')

const getInput = async (day = 0) => {
  if (!day) return

  const filepath = join(__dirname, `../puzzle-input/day${day}.txt`)
  return (await promisify(readFile)(filepath, 'utf-8'))
    .trim()
    .replace(/(\r\n|\r)/g, '\n')
}

module.exports = getInput
