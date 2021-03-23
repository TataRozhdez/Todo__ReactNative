import React, {useState} from 'react'
import {View, StyleSheet, Button, Alert, Text} from 'react-native'
import {THEME} from '../theme'
import {AppTextInput} from '../components/AppTextInput'

export const TodoScreen = ({setTodo, todo, onRemove, editTodo}) => {
  const [value, setValue] = useState(todo.title)

  const handleRemove = () => {
    onRemove(todo.id)
    setTodo(null)
  }

  const handleSave = () => {
    if (value.trim().length < 3) {
      Alert.alert(
        'At least three characters on the field!',
        `Now ${value.trim().length} symbols`
      )
    } else {
      const editable = {
        id: todo.id,
        title: value
      }

      editTodo(editable)
      setTodo(null)
    }
  }

  return (
    <View style={styles.container} >
      <Text style={styles.btnback} onPress={() => setTodo(null)}>x</Text >
      <AppTextInput style={styles.input}
                 onChangeText={setValue}
                 value={value}
                 autoCorrect={false}
                 maxLength={108}
                 autoCapitalized='none' />
      <View style={styles.buttons} >
        <View style={styles.button} >
          <Button title='Remove'  color={THEME.GREY}  onPress={handleRemove} />
        </View >
        <View style={styles.button} >
          <Button title='Save' color={THEME.DARK} onPress={handleSave} />
        </View >
      </View >

    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.BCK,
    paddingHorizontal: 30,
    paddingVertical: 20,
    position: 'relative'
  },
  btnback: {
    position: 'absolute',
    top: 0,
    right: '2%',
    color: THEME.BORDER,
    fontWeight: 'bold',
    fontSize: 24
  },
  input: {
    padding: 10,
    borderBottomColor: THEME.BORDER,
    borderStyle: 'solid',
    borderBottomWidth: 2
  },
  buttons: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    width: '40%'
  }
})
