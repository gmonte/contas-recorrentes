/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const { getDefaultConfig } = require('metro-config')
const path = require('path')

module.exports = ( async () => {
  const {
    resolver: { sourceExts, assetExts }
  } = await getDefaultConfig()

  return {
    projectRoot: path.resolve(__dirname, '.'),
    watchFolders: [
      path.resolve(__dirname, '../../../../node_modules'),
      path.resolve(__dirname, '../../../core'),
      // path.resolve(__dirname, '../../components'),
      // path.resolve(__dirname, '../../containers')
    ],
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: false
        }
      }),
      babelTransformerPath: require.resolve('react-native-svg-transformer')
    },
    resolver: {
      assetExts: assetExts.filter(ext => ext !== 'svg'),
      sourceExts: [...sourceExts, 'svg']
    } }
})()
