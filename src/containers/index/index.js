import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {NavigationContainer} from '@react-navigation/native'
import React, {Component} from 'react'
import ChatScreen from 'src/components/index/ChatScreen'
import OrderScreen from 'src/components/index/OrderScreen'
import SettingsScreen from 'src/components/index/SettingsScreen'
import {tabStyles} from '../../../styles/Styles'
import CustomTabBar from '../../components/index/CustomTabBar'
import HomeScreen from '../../components/index/HomeScreen'

const Tab = createBottomTabNavigator()

class Index extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <NavigationContainer independent={true}>
        <Tab.Navigator
          tabBarOptions={tabStyles}
          tabBar={props => <CustomTabBar {...props} />}>
          <Tab.Screen name='Home' component={HomeScreen}></Tab.Screen>
          <Tab.Screen name='Chat' component={ChatScreen}></Tab.Screen>
          <Tab.Screen name='Orders' component={OrderScreen}></Tab.Screen>
          <Tab.Screen name='Settings' component={SettingsScreen}></Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}

export default Index
