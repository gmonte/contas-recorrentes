const path = require('path')

module.exports = {
  overrides: [
    {
      files: ['./**/*'],
      extends: ['plugin:import/errors', 'plugin:import/warnings'],
      settings: {
        'import/resolver': {
          'babel-plugin-root-import': [
            {
              rootPathPrefix: '~',
              rootPathSuffix: `${ path.relative(
                path.resolve(process.cwd()),
                path.resolve(__dirname)
              ) }/src`
            }
          ]
        }
      }
    }
  ]
}
