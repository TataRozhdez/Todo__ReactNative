import React from 'react'
import {Text, StyleSheet} from 'react-native'
import {useFonts} from 'expo-font'

export const AppText = props => {
  const [loaded] = useFonts({
    Ubuntu: require('../../assets/fonts/Ubuntu-Regular.ttf')
  })

  if (!loaded) {
    return null
  }
  return (
    <Text style={{...styles.default, ...props.style}} >{props.children}</Text >
  )
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    fontFamily: 'Ubuntu'
  }
})
