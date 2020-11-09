const { execTerminalCommand } = require('@contas-recorrentes/env-config')

const processEnvFile = require('./utils/processEnvFile')

processEnvFile({
  callback: ({ envFile }) => {
    const childProcess = execTerminalCommand(`env-cmd -f ${ envFile } yarn react-native start`)

    childProcess.on('error', error => {
      console.error(error)
    })

    childProcess.on('close', code => {
      if (code > 0) {
        console.error(`Command failed with code ${ code }`)
      }
    })
  }
})
