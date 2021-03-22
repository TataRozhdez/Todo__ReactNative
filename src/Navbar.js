import React from 'react'
import {View, Text, StyleSheet} from 'react-native'


export const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>TODO APP</Text>
    </View>
  )

}

const styles = StyleSheet.create({
  navbar: {
    height: 55,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#323232',
  },
  text: {
    color: '#fdfdfd',
    paddingBottom: 5,
    fontSize: 18,
    fontFamily: 'Roboto'
  }
})
