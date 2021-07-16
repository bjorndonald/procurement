import {StyleSheet} from 'react-native'

export const tabStyles = {
  labelStyle: {
    fontFamily: values.Montserrat_Regular,
    fontWeight: '500',
    fontSize: functions.RatioByDevice(18),
    lineHeight: functions.RatioByDevice(29),
    color: '#fff',
  },
  tabStyle: {
    height: functions.RatioByDevice(80),
    justifyContent: 'center',
    alignItems: 'center',
  },
  style: {
    // borderWidth: 1,
    borderColor: values.SecondaryColor,
  },
  inactiveBackgroundColor: values.SecondaryColor,
  activeBackgroundColor: values.PrimaryColor,
}
