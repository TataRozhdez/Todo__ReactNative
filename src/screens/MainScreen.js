import React from 'react'
import {View, StyleSheet, FlatList} from 'react-native'
import {AddTodo} from '../components/AddTodo'
import {Todo} from '../components/Todo'
import {THEME} from '../theme'
import {AppText} from '../components/AppText'

export const MainScreen = ({addTodo, todos, removeTodo, openTodo}) => {
  return (
    <View style={styles.container} >
      <AddTodo onSubmit={addTodo} />

      {
        todos.length
          ? <FlatList keyExtractor={item => item.id.toString()}
                      data={todos}
                      renderItem={({item}) => <Todo onRemove={removeTodo} openTodo={openTodo} todo={item} />} />
          : <AppText >You don`t have any todos</AppText >
      }
    </View >
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: THEME.BCK,
      paddingHorizontal: 30,
      paddingVertical: 20
    }
  }
)
