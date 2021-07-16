import React from 'react'
import {TouchableOpacity} from 'react-native'
import {StyleSheet} from 'react-native'
import {View} from 'react-native'
import HomeScreen from '../home/HomeScreen'

const Nav = props => {
  return (
    <View style={styles.row}>
      <View style={styles.rowLeft}>
        <Back {...props} />
        <View style={styles.column}>
          <Text>Order Tracker</Text>
          <Text>Upcoming</Text>
        </View>
      </View>

      <View style={styles.rowRight}>
        <TouchableOpacity>
          <SearchIcon />
        </TouchableOpacity>
        <TouchableOpacity>
          <FilterIcon />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const Order = props => {
  return (
    <View style={styles.row}>
      <View style={styles.column}>
        <Text>#KSLDYSJAMW</Text>
        <View style={styles.row}>
          <SentIcon /> <Text>Sent - 15 Items</Text>
        </View>
      </View>

      <RightCaret />
    </View>
  )
}

function TrackerScreen (props) {
  return (
    <View style={styles.container}>
      <Nav />
      <View style={styles.tags}>
        <TouchableOpacity style={styles.tag}>
          <Text>All Outlets</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tag}>
          <Text>Tulip St</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tag}>
          <Text>Outlandia Ave</Text>
        </TouchableOpacity>
      </View>
      <Line />
      <View style={styles.row}>
        <Text>Delivery on Thu, 20 November</Text>
      </View>
      <Boxes>
        <View style={styles.row}>
          <View style={styles.rowLeft}>
            <View style={styles.imageContainer}>
              <SuccessIcon />
            </View>
            <Text>Bondi Produce</Text>
            <Text>#QTEYJAKDAH - 16 Items</Text>
          </View>

          <RightCaret />
        </View>
      </Boxes>
      <Boxes>
        <View style={styles.row}>
          <View style={styles.rowLeft}>
            <View style={styles.imageContainer}>
              <RocketIcon />
            </View>
            <Text>McDonalds</Text>
          </View>
          <View style={styles.rowRight}>
            <Text>3 Orders</Text>
          </View>
        </View>
        <Line />
        <Order />
        <Order />
        <Order />
      </Boxes>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
})

export default TrackerScreen
