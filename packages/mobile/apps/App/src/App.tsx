/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react'
import { StatusBar } from 'react-native'

import Screens from '~/screens/routes'

import 'react-native-gesture-handler'

declare const global: { HermesInternal: null | {} }

const App: React.FC = () => (
  <>
    <StatusBar barStyle="dark-content" />
    <Screens />
  </>
)

export default App
