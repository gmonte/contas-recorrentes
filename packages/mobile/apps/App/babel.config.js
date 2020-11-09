const path = require('path')

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['module:react-native-dotenv', {
      moduleName: 'react-native-dotenv',
      path: `${ path.resolve(__dirname, '.') }/.env`,
      blacklist: null,
      whitelist: null,
      safe: false,
      allowUndefined: true
    }],
    ['babel-plugin-root-import', {
      rootPathPrefix: '~',
      rootPathSuffix: 'src'
    }]
  ]
}
