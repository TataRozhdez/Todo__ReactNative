import React, {useState, useEffect} from 'react'
import {Alert, StyleSheet, View} from 'react-native'
import {Navbar} from './src/components/Navbar'
import {MainScreen} from './src/screens/MainScreen'
import {TodoScreen} from './src/screens/TodoScreen'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {THEME} from './src/theme'
export default function App() {

  const [todo, setTodo] = useState(null)
  const [todos, setTodos] = useState([])

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('@mytodos', jsonValue)
    } catch (e) {
      Alert.alert(
        'Sorry, error with saving.',
        'Try next time'
      )
    }
  }

  const addTodo = async title => {
    const newTodo = {
      id: Date.now().toString(),
      title
    }

    setTodos([newTodo, ...todos])
    await storeData([newTodo, ...todos])
  }

  const removeTodo = id => {
    Alert.alert(
      'Really remove?',
      'Really???',
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {text: 'OK', onPress: async () => {
            const removeTodo = todos.filter(todo => todo.id !== id)

            setTodos(removeTodo)
            await storeData(removeTodo)
          }}
      ]
    )
  }

  const editTodo = async editTodo => {
    const filtersTodos = todos.filter(t => +t.id !== +editTodo.id)
    setTodos([editTodo, ...filtersTodos])
    await storeData([editTodo, ...filtersTodos])
  }

  useEffect(  () => {
    (async () => {
      try {
        const value = await AsyncStorage.getItem('@mytodos')
        if(value !== null) {
          setTodos(value)
        }
      } catch(e) {
        Alert.alert(
          'Oops, error:',
          `${e}`
        )
      }
    })()
  }, [])

  return (
    <View style={styles.container} >
      <Navbar />
      {
        todo
          ? <TodoScreen setTodo={setTodo} todo={todo} onRemove={removeTodo} editTodo={editTodo} />
          : <MainScreen addTodo={addTodo}
                        todos={todos}
                        openTodo={setTodo}
                        removeTodo={removeTodo} />
      }
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.BCK,
    minHeight: '100%'
  }
})
