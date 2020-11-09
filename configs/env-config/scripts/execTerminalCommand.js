const { spawn } = require('child_process')

const filter = require('lodash/filter')
const isArray = require('lodash/isArray')

const getTerminalType = () => {
  switch (process.platform) {
    case 'linux':
    case 'darwin':
      return 'bash'
    default:
      return 'powershell'
  }
}

const execTerminalCommand = (command, options = {}) => {
  let argvs = isArray(process.argv) ? process.argv.slice(2): []
  argvs = filter(argvs, (argv, i) => {
    if (
      argvs[i-1] === '--env'
      || argv === '--env'
      || argv === '--local'
    ) {
      return false
    }
    return true
  })
  return spawn(
    getTerminalType(),
    ['-c', `${ command } ${ argvs.join(' ') }`],
    { stdio: 'inherit', ...options }
  )
}

module.exports = execTerminalCommand
