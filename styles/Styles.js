import {StyleSheet} from 'react-native'
import * as values from 'utilities/Values'
import * as functions from 'utilities/Functions'

export const tabStyles = {
  labelStyle: {
    fontFamily: values.Montserrat_Regular,
    fontWeight: '500',
    fontSize: functions.normalize(18),
    lineHeight: functions.normalize(29),
    color: '#fff',
  },
  tabStyle: {
    height: functions.normalize(60),
    justifyContent: 'center',
    alignItems: 'center',
  },
  style: {
    // borderWidth: 1,
    // borderColor: values.SecondaryColor,
    backgroundColor: '#76C6C9',
  },
  inactiveBackgroundColor: '#76C6C9',
  activeBackgroundColor: values.PrimaryColor,
}

export const ustyles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
  },
  alignCenter: {
    alignItems: 'center',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifyStart: {
    justifyContent: 'flex-start',
  },
  alignStart: {
    alignItems: 'flex-start',
  },
  alignStretch: {
    alignItems: 'stretch',
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
  grey: {
    color: values.GreyColor,
  },
  h100p: {
    height: '100%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 'auto',
    // paddingVertical: functions.normalize(14),
  },
  paddingVertical: {
    paddingVertical: functions.normalize(14),
  },
  paddingSmallVertical: {
    paddingVertical: functions.normalize(7),
  },
  innerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    // paddingVertical: functions.normalize(14),
  },
  marginLeft: {
    marginLeft: functions.normalize(8),
  },
  marginRight: {
    marginRight: functions.normalize(8),
  },
  marginHorizontal: {
    marginHorizontal: functions.normalize(8),
  },
  marginBottom: {
    marginBottom: functions.normalize(14),
  },
  navTitle: {
    fontFamily: values.Montserrat_Bold,
    fontSize: functions.normalize(18),
    letterSpacing: functions.normalize(3),
  },
  h1Bold: {
    fontFamily: values.Montserrat_Bold,
    fontSize: functions.normalize(18),
  },
  h1: {
    fontFamily: values.Montserrat_Regular,
    fontSize: functions.normalize(18),
  },
  announce: {
    color: values.BlueColor,
  },
  h2: {
    fontFamily: values.Montserrat_Regular,
    fontSize: functions.normalize(16),
  },
  h3: {
    fontFamily: values.Montserrat_Regular,
    fontSize: functions.normalize(14),
  },
  h3Bold: {
    fontFamily: values.Montserrat_Bold,
    fontSize: functions.normalize(14),
  },
  h4: {
    fontFamily: values.Montserrat_Regular,
    fontSize: functions.normalize(12),
  },
  h4Bold: {
    fontFamily: values.Montserrat_Bold,
    fontSize: functions.normalize(12),
  },
  h5: {
    fontFamily: values.Montserrat_Regular,
    fontSize: functions.normalize(10),
  },
  h5Bold: {
    fontFamily: values.Montserrat_Bold,
    fontSize: functions.normalize(10),
  },
  half: {
    width: (values.screenWidth - functions.normalize(120)) / 2,
    // width: functions.normalize(100),
  },
})
