import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import ListItems from './ListItems'

const Stack = createStackNavigator()

const AuthenticatedScreensRouter: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="List" component={ ListItems } />
    </Stack.Navigator>
  </NavigationContainer>
)

export default AuthenticatedScreensRouter
