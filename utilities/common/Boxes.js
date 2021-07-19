import React, {Fragment, useState} from 'react'
import {StyleSheet} from 'react-native'
import {View} from 'react-native'
import * as values from 'utilities/Values'
import * as functions from 'utilities/Functions'
// import {LightenDarkenColor} from 'lighten-darken-color'

function LightenDarkenColor (col, amt) {
  var usePound = false

  if (col[0] == '#') {
    col = col.slice(1)
    usePound = true
  }

  var num = parseInt(col, 16)

  var r = (num >> 16) + amt

  if (r > 255) r = 255
  else if (r < 0) r = 0

  var b = ((num >> 8) & 0x00ff) + amt

  if (b > 255) b = 255
  else if (b < 0) b = 0

  var g = (num & 0x0000ff) + amt

  if (g > 255) g = 255
  else if (g < 0) g = 0

  return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16)
}

function Boxes (props) {
  const [width, setWidth] = useState(0)
  return (
    <Fragment>
      <View
        style={[
          styles.boxContainer,
          {
            height: props.half ? width : functions.normalize(80),
          },
        ]}
        onLayout={event => {
          setWidth(event.nativeEvent.layout.width)
        }}>
        <View
          style={[
            styles.boxes,
            {
              backgroundColor: props.color,
              width: width - functions.normalize(4),
              height: props.half ? width : functions.normalize(80),
            },
          ]}>
          {props.children}
        </View>
        <View
          style={[
            styles.underside,
            {
              backgroundColor: LightenDarkenColor(props.color, -80),
              width: width - functions.normalize(4),
              height: props.half ? width : functions.normalize(80),
              bottom: functions.normalize(-3),
            },
          ]}></View>
      </View>
    </Fragment>
  )
}

const styles = StyleSheet.create({
  boxContainer: {
    position: 'relative',
    width: '100%',
  },
  underside: {
    width: '100%',
    position: 'absolute',
    height: functions.normalize(100),
    borderRadius: functions.normalize(12),
    borderWidth: 1,
    borderColor: '#000',
    bottom: functions.normalize(-8),
    right: functions.normalize(0),
    zIndex: -2,
  },
  boxes: {
    position: 'relative',
    justifyContent: 'center',
    paddingVertical: functions.normalize(18),
    paddingHorizontal: functions.normalize(14),
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: functions.normalize(12),
  },
})

export default Boxes
