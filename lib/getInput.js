const { readFile } = require('fs')
const { join } = require('path')
const { promisify } = require('util')

const getInput = (day = 0) => {
  if (!day) return

  const filepath = join(__dirname, `../puzzle-input/day${day}.txt`)
  return promisify(readFile)(filepath, 'utf-8')
}

module.exports = getInput
