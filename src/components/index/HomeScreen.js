import React from 'react'
import {Text, TouchableOpacity} from 'react-native'
import {Image, StyleSheet, View} from 'react-native'
import profileImage from 'images/index/profile.png'
import {ustyles} from '../../../styles/Styles'
import Search from 'graphics/home/search.svg'
import Bell from 'graphics/home/bell.svg'
import Gift from 'graphics/home/gift.svg'
import Package from 'graphics/home/package.svg'
import Clock from 'graphics/home/clock.svg'
import Timer from 'graphics/home/timer.svg'
import Truck from 'graphics/home/truck.svg'
import RightCaret from 'graphics/common/rightcaret.svg'
import DotMenu from 'graphics/common/dotmenu.svg'
import * as values from 'utilities/Values'
import * as functions from 'utilities/Functions'
import {StatusBar} from 'react-native'
import IconContainer from 'utilities/common/IconContainer'
import Boxes from 'utilities/common/Boxes'

const Nav = props => {
  return (
    <View
      style={[
        styles.nav,
        ustyles.row,
        ustyles.justifyBetween,
        ustyles.paddingVertical,
      ]}>
      <View style={[ustyles.alignCenter, ustyles.flexRow]}>
        <TouchableOpacity
          style={[styles.profile, ustyles.alignCenter, ustyles.justifyCenter]}>
          <Image style={styles.profileImage} source={profileImage} />
        </TouchableOpacity>
        <Text style={[ustyles.navTitle, ustyles.marginLeft]}>
          Hullo, Chief!
        </Text>
      </View>

      <View style={[ustyles.alignCenter, ustyles.flexRow]}>
        <TouchableOpacity style={ustyles.marginLeft}>
          <Bell
            width={functions.normalize(30)}
            height={functions.normalize(30)}
          />
        </TouchableOpacity>
        <TouchableOpacity style={ustyles.marginLeft}>
          <Search
            width={functions.normalize(30)}
            height={functions.normalize(30)}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const Sets = props => {
  return <View></View>
}

function HomeScreen (props) {
  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor='#fff'
        barStyle='dark-content'
      />

      <View style={styles.container}>
        <Nav {...props} />
        <View
          style={[
            ustyles.row,
            ustyles.paddingVertical,
            ustyles.marginBottom,
            ustyles.justifyBetween,
            styles.announce,
          ]}>
          <View
            style={[
              ustyles.justifyBetween,
              // {backgroundColor: '#ccc'},
              ustyles.alignStart,
              styles.announce,
            ]}>
            <Text style={[ustyles.h1Bold, ustyles.announce]}>
              Nice day to work 😊
            </Text>
            <Text style={[ustyles.h2, ustyles.grey]}>
              Orders are waiting for you.
            </Text>
          </View>
          <IconContainer size={functions.normalize(60)} color='#EAF7F7'>
            <Gift
              width={functions.normalize(36)}
              height={functions.normalize(36)}
            />
          </IconContainer>
        </View>

        <View style={ustyles.row}>
          <Boxes color='#FDF8EC' half={false}>
            <View
              style={[ustyles.row, ustyles.alignCenter, ustyles.alignStretch]}>
              <IconContainer size={functions.normalize(48)} color='#fff'>
                <Package
                  width={functions.normalize(30)}
                  height={functions.normalize(30)}
                />
              </IconContainer>
              <View
                style={[
                  // styles.column,
                  ustyles.h100p,
                  ustyles.justifyBetween,
                  ustyles.marginLeft,
                  ustyles.alignStretch,
                  // {backgroundColor: '#ccc'},
                  styles.orders,
                ]}>
                <Text style={ustyles.h3Bold}>All set!</Text>
                <View
                  style={[
                    ustyles.innerRow,
                    ustyles.justifyBetween,
                    ustyles.alignCenter,
                  ]}>
                  <Text style={[ustyles.h3, ustyles.grey]}>
                    7 deliveries tommorow
                  </Text>
                  <RightCaret
                    width={functions.normalize(20)}
                    height={functions.normalize(20)}
                  />
                </View>
              </View>
            </View>
          </Boxes>
        </View>

        <View
          style={[
            ustyles.row,
            ustyles.justifyBetween,
            ustyles.alignCenter,
            ustyles.paddingVertical,
          ]}>
          <Text style={ustyles.h4Bold}>Order Sent</Text>
          <DotMenu
            width={functions.normalize(32)}
            height={functions.normalize(32)}
          />
        </View>

        <View
          style={[
            ustyles.row,
            ustyles.alignCenter,
            ustyles.justifyBetween,
            ustyles.marginBottom,
            // {
            //   backgroundColor: '#ccc',
            // },
          ]}>
          <View style={ustyles.half}>
            <Boxes color='#EEECF8' half>
              <View
                style={[
                  ustyles.column,
                  ustyles.alignCenter,
                  ustyles.justifyBetween,
                ]}>
                <IconContainer size={functions.normalize(40)} color='#fff'>
                  <Clock
                    width={functions.normalize(24)}
                    height={functions.normalize(24)}
                  />
                </IconContainer>
                <Text style={[ustyles.h4Bold]}>Today</Text>
                <Text style={[ustyles.h3]}>10 Orders</Text>
              </View>
            </Boxes>
          </View>

          <View style={ustyles.half}>
            <Boxes color='#F4F8EC' half>
              <View
                style={[
                  ustyles.column,
                  ustyles.alignCenter,
                  ustyles.justifyBetween,
                ]}>
                <IconContainer size={functions.normalize(40)} color='#fff'>
                  <Timer
                    width={functions.normalize(24)}
                    height={functions.normalize(24)}
                  />
                </IconContainer>
                <Text style={[ustyles.h4Bold]}>Yesterday</Text>
                <Text style={[ustyles.h3]}>15 Orders</Text>
              </View>
            </Boxes>
          </View>
        </View>

        <View style={[ustyles.row, ustyles.paddingVertical]}>
          <Text style={[ustyles.h4Bold]}>Recent Orders</Text>
        </View>

        <View style={[ustyles.row, ustyles.alignCenter]}>
          <IconContainer size={functions.normalize(40)} color='#EAF7F7'>
            <Truck
              width={functions.normalize(24)}
              height={functions.normalize(24)}
            />
          </IconContainer>
          <View
            style={[
              ustyles.column,
              ustyles.paddingSmallVertical,
              ustyles.justifyBetween,
              ustyles.marginLeft,
              // ustyles.h100p,
              {height: functions.normalize(40)},
            ]}>
            <Text style={[ustyles.h4Bold]}>Fruit Planet (North)</Text>
            <Text style={[ustyles.h5Bold, ustyles.grey]}>
              Confirmed - Delivery : Wed, 7 Oct{' '}
            </Text>
          </View>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    position: 'relative',
    paddingHorizontal: functions.normalize(24),
  },
  announce: {
    height: functions.normalize(60),
    paddingVertical: functions.normalize(8),
  },
  nav: {},
  orders: {
    width: values.screenWidth - functions.normalize(124),
    paddingVertical: functions.normalize(8),
  },
  profile: {
    width: functions.normalize(30),
    height: functions.normalize(30),
    backgroundColor: '#ffffff',
    borderRadius: functions.normalize(15),
    elevation: 4,
  },
  profileImage: {
    width: functions.normalize(28),
    height: functions.normalize(28),
    borderRadius: functions.normalize(14),
  },
})

export default HomeScreen
