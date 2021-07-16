import React from 'react'
import {StyleSheet} from 'react-native'
import {View} from 'react-native'

function Base (props) {
  return <View style={styles.container}></View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
})

export default Base
