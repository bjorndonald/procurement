import React from 'react'
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import {BottomTabBar} from '@react-navigation/bottom-tabs'
import HomeIcon from 'graphics/home/home.svg'
import MessageIcon from 'graphics/home/message.svg'
import BoxIcon from 'graphics/home/box.svg'
import SettingsIcon from 'graphics/home/settings.svg'
import * as functions from 'utilities/Functions'
import * as values from 'utilities/Values'

const screenOptions = (route, color) => {
  let iconName
  console.log(route.name)
  switch (route.name) {
    case 'Home':
      return (
        <HomeIcon
          // color={color}
          // color={color ? '#fff' : '#000'}
          fill={color ? '#fff' : '#00000000'}
          width={functions.normalize(24)}
          height={functions.normalize(24)}
        />
      )
      break
    case 'Chat':
      return (
        <MessageIcon
          fill={color ? '#fff' : '#00000000'}
          width={functions.normalize(24)}
          height={functions.normalize(24)}
        />
      )
      break
    case 'Orders':
      return (
        <BoxIcon
          fill={color ? '#fff' : '#00000000'}
          width={functions.normalize(24)}
          height={functions.normalize(24)}
        />
      )
      break
    case 'Settings':
      return (
        <SettingsIcon
          fill={color ? '#fff' : '#00000000'}
          width={functions.normalize(24)}
          height={functions.normalize(24)}
        />
      )
      break
    default:
      break
  }
}

function CustomTabBar (props) {
  return (
    <View style={styles.mainContainer}>
      {props.state.routes.map((route, index) => {
        {
          /* if(route.name =="PlaceholderScreen"){
          return (
            <View key={index} style={styles.mainItemContainer}>
              <SelectWheel />
            </View>  
          );
        } */
        }

        const {options} = props.descriptors[route.key]
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name

        const isFocused = props.state.index === index

        const onPress = () => {
          const event = props.navigation.emit({
            type: 'tabPress',
            target: route.key,
          })

          if (!isFocused && !event.defaultPrevented) {
            props.navigation.navigate(route.name)
          }
        }

        return (
          <View
            key={index}
            style={[
              styles.mainItemContainer,
              {borderRightWidth: label == 'notes' ? 3 : 0},
            ]}>
            <TouchableOpacity
              onPress={onPress}
              style={{
                backgroundColor: isFocused ? '#BADB85' : '#76C6C9',
                borderRadius: 20,
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  flex: 1,
                  padding: 15,
                }}>
                {screenOptions(route, isFocused)}
              </View>
            </TouchableOpacity>
          </View>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 25,
    backgroundColor: '#76C6C9',
    borderRadius: 25,
    marginHorizontal: values.screenWidth * 0.1,
  },
  mainItemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 1,
    borderColor: '#333B42',
  },
})

export default CustomTabBar
