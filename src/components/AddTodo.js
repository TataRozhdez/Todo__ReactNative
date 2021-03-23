import React, {useState} from 'react'
import {View, Button, StyleSheet, Alert} from 'react-native'
import {THEME} from '../theme'
import {AppTextInput} from './AppTextInput'

export const AddTodo = ({onSubmit}) => {
  const [value, setValue] = useState('')

  const pressHandler = () => {
    if (value.trim().length < 3) {
      Alert.alert(
        'At least three characters on the field!',
        `Now ${value.trim().length} symbols`
      )
    } else {
      onSubmit(value)
      setValue('')
    }
  }

  return (
    <View style={styles.block} >
      <AppTextInput style={styles.input}
                    onChangeText={setValue}
                    value={value} />
      <Button title='    Add    '
              color={THEME.DARK}
              onPress={pressHandler} />
    </View >
  )
}

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15
  },
  input: {
    width: '80%',
    padding: 10,
    borderBottomColor: THEME.BORDER,
    borderStyle: 'solid',
    borderBottomWidth: 2
  }
})
