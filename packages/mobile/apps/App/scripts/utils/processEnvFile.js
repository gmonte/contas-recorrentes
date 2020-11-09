const fs = require('fs')
const path = require('path')

const { processEnvWithEnvFile } = require('@contas-recorrentes/env-config')

const processEnvFile = ({ callback = () => {} }) =>
  processEnvWithEnvFile({
    callback: (err, env) => {
      if (!err) {
        const originalEnvPath = path.resolve(process.cwd(), env.envFile)
        const destinationEnvPath = path.resolve(process.cwd(), '.env')
        fs.copyFile(originalEnvPath, destinationEnvPath, (error) => {
          if (error) {
            return console.error(`error: ${ error.toString() }`)
          }
          return callback({ ...env, originalEnvPath })
        })
      }
    }
  })

module.exports = processEnvFile
