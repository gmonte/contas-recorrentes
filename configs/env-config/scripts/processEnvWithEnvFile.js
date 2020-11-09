/* eslint-disable no-console */

const fs = require('fs')
const path = require('path')
const yargs = require('yargs')

const processEnvWithEnvFile = ({ callback, options = {} }) => {
  const { argv } = yargs.usage('Usage: $0 <command> [options]').options({
    env: {
      choices: ['development', 'staging', 'production'],
      default: 'development',
      demandOption: false,
      describe: 'Environment',
      nargs: 1
    },
    local: {
      type: 'boolean',
      describe: 'Get .env?(.*).local'
    },
    ...options
  })

  const { env, local } = argv

  let envFile = `.env${ env ? `.${ env }` : '' }`
  if (!fs.existsSync(path.resolve(process.cwd(), envFile))) {
    envFile = '.env'
  }

  if (local) {
    const localEnvFile = `${ envFile }.local`
    if (fs.existsSync(path.resolve(process.cwd(), localEnvFile))) {
      envFile = localEnvFile
    }
  }

  console.info(`>>> Using env file: ${ envFile }`)
  const processEnv = Object.create(process.env)
  processEnv.ENVFILE = envFile
  callback(null, {
    env: processEnv, envFile, local, argv
  })
}

module.exports = processEnvWithEnvFile
