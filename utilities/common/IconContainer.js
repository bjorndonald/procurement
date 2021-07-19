import React from 'react'
import {StyleSheet, View} from 'react-native'
import * as values from 'utilities/Values'
import * as functions from 'utilities/Functions'

function IconContainer (props) {
  return (
    <View
      style={[
        styles.icon,
        {
          width: props.size,
          height: props.size,
          backgroundColor: props.color,
          borderRadius: props.size / 2,
        },
      ]}>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  icon: {
    borderStyle: 'dashed',
    borderColor: '#000',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default IconContainer
