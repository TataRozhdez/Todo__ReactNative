import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {useFonts} from 'expo-font'


export const Navbar = () => {
  const [loaded] = useFonts({
    Chango: require('../../assets/fonts/Chango-Regular.ttf')
  })

  if (!loaded) {
    return null
  }

  return (
    <View style={styles.navbar} >
      <Text style={styles.text} >TODO APP</Text >
    </View >
  )

}

const styles = StyleSheet.create({
  navbar: {
    height: 55,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#323232'
  },
  text: {
    color: '#fdfdfd',
    fontFamily: 'Chango',
    paddingBottom: 5,
    fontSize: 18
  }
})
