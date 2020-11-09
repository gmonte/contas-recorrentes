/* eslint-disable no-return-assign */
const dotenv = require('dotenv')
const fs = require('fs')
const path = require('path')

const { execTerminalCommand } = require('@contas-recorrentes/env-config')

const { version } = require('../package.json')
const processEnvFile = require('./utils/processEnvFile')

const apkName = `App-${ version }.apk`

const generateApkPath = () => {
  const dest = `./dist/${ process.env.REACT_APP_AMBIENTE }`

  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest)
  }

  return `${ dest }/${ apkName }`
}

const moveApk = () => new Promise((resolve, reject) => {
  const apkPath = path.resolve(
    process.cwd(),
    'android/app/build/outputs/apk/release/app-release.apk'
  )

  const newApkPath = generateApkPath()

  fs.copyFile(
    apkPath,
    newApkPath,
    (error) => {
      if (error) {
        console.error(`error: ${ error.toString() }`)
        reject(error)
        return
      }
      console.log(`${ apkName } copied to ${ newApkPath }`)
      resolve()
    }
  )
})

processEnvFile({
  callback: ({ originalEnvPath, envFile }) => {
    const envConfig = dotenv.parse(fs.readFileSync(originalEnvPath))

    Object.entries(envConfig).map(
      ([configName, configValue]) => (process.env[configName] = configValue)
    )

    const childProcess = execTerminalCommand(
      `env-cmd -f ${ envFile } yarn assembleRelease`
    )

    childProcess.on('error', error => {
      console.error(error)
    })

    childProcess.on('close', async (code) => {
      if (code > 0) {
        console.error(`Command failed with code ${ code }`)
      } else {
        await moveApk()
      }
    })
  }
})
