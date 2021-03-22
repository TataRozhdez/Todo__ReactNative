import React, {useState} from 'react'
import {View, Button, TextInput, StyleSheet, Alert} from 'react-native'

export const AddTodo = ({onSubmit}) => {
  const [value, setValue] = useState('')

  const pressHandler = () => {
      if (value.trim()) {
        onSubmit(value)
        setValue('')
      } else {
        Alert.alert('Fill required')
      }
  }

  return (
    <View style={styles.block}>
      <TextInput style={styles.input}
                 onChangeText={setValue}
                 value={value}
                 autoCorrect={false}
                 autoCapitalized='none'
                 placeholder='Write your todos here' />
      <Button title='    Add    '
              color='#323232'
              onPress={pressHandler} />
    </View>
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
    borderBottomColor: '#323232',
    borderStyle: 'solid',
    borderBottomWidth: 2
  }
})
