import React from 'react'
import {TextInput, StyleSheet} from 'react-native'
import {useFonts} from 'expo-font'

export const AppTextInput = props => {
  const [loaded] = useFonts({
    Ubuntu: require('../../assets/fonts/Ubuntu-Regular.ttf')
  })

  if (!loaded) {
    return null
  }
  return (
    <TextInput style={{...styles.default, ...props.style}}
               value={props.value}
               maxLength={108}
               autoCorrect={false}
               autoCapitalized='none'
               placeholder={props.placeholder}
               onChangeText={props.onChangeText} >
      {props.children}
    </TextInput >
  )
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    fontFamily: 'Ubuntu'
  }
})
