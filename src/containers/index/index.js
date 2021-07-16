import React, {Component} from 'react'
import {tabStyles} from '../../../styles/Styles'
import CustomTabBar from '../../components/home/CustomTabBar'
import HomeScreen from '../../components/index/HomeScreen'

const Tab = createBottomTabNavigator()

class Index extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={tabStyles}
          tabBar={props => <CustomTabBar {...props} />}>
          <Tab.Screen name='Home' component={HomeScreen}></Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}

export default Index
