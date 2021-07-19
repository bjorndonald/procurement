import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack'
import Index from './src/containers/index'
const Stack = createStackNavigator()

function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name='Index'
          component={Index}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
