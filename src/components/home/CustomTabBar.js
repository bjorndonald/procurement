import React from 'react'
import {StyleSheet, View} from 'react-native'
import {BottomTabBar} from '@react-navigation/bottom-tabs'

function CustomTabBar (props) {
  return (
    <View style={styles.bottomTabs}>
      <BottomTabBar {...props} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
})

export default CustomTabBar
