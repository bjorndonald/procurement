import React from 'react'
import {TouchableOpacity} from 'react-native'
import {Image, StyleSheet, View} from 'react-native'

const Nav = props => {
  return (
    <View style={styles.nav}>
      <View style={styles.navLeft}>
        <TouchableOpacity style={styles.profile}>
          <Image />
        </TouchableOpacity>
        <Text>Hullo, Chief!</Text>
      </View>

      <View style={styles.navRight}>
        <TouchableOpacity>
          <Bell />
        </TouchableOpacity>
        <TouchableOpacity>
          <Search />
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
    <View style={styles.container}>
      <Nav {...props} />
      <View style={styles.row}>
        <View style={styles.rowLeft}>
          <Text>Nice day to work </Text>
          <Text>Orders are waiting for you.</Text>
        </View>
        <View style={styles.imageContainer}>
          <Present />
        </View>
      </View>
      <Boxes styles={styles.setBoxes}>
        <View style={styles.imageContainer}>
          <Package />
        </View>
        <View style={styles.column}>
          <Text>All set!</Text>
          <View style={styles.row}>
            <Text>7 deliveries tommorow</Text>
            <RightCaret />
          </View>
        </View>
      </Boxes>

      <View style={styles.row}>
        <Text>Order Sent</Text>
        <DotMenu />
      </View>

      <View style={styles.row}>
        <Boxes>
          <View style={[styles.column, styles.center]}>
            <View style={styles.imageContainer}>
              <Clock />
            </View>
            <Text>Today</Text>
            <Text>10 Orders</Text>
          </View>
        </Boxes>

        <Boxes>
          <View style={[styles.column, styles.center]}>
            <View style={styles.imageContainer}>
              <Timer />
            </View>
            <Text>Yesterday</Text>
            <Text>15 Orders</Text>
          </View>
        </Boxes>
      </View>

      <View style={styles.row}>
        <Text>Recent Orders</Text>
      </View>

      <View style={styles.row}>
        <View style={styles.imageContainer}>
          <Bus />
        </View>
        <View style={styles.column}>
          <Text>Fruit Planet (North)</Text>
          <Text>Confirmed - Delivery : Wed, 7 Oct </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
})

export default HomeScreen
