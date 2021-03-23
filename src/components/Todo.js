import React from 'react'
import {View, StyleSheet, TouchableOpacity} from 'react-native'
import {THEME} from '../theme'
import {AppText} from './AppText'

export const Todo = ({todo, onRemove, openTodo}) => {
  return (
    <TouchableOpacity activeOpacity={0.5}
                      onPress={() => openTodo(todo)}
                      onLongPress={() => onRemove(todo.id)}>
      <View style={styles.todo} >
        <AppText >{todo.title}</AppText >
      </View >
    </TouchableOpacity >
  )
}

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: THEME.BORDER,
    borderRadius: 5,
    marginBottom: 10
  }
})
