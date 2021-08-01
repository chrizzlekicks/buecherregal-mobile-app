import * as React from 'react'
import { View, Text, Button } from 'react-native'
import { useGlobalContext } from '../context/GlobalContext'

const MyBooks = ({ navigation }) => {
  const stuff = useGlobalContext()
  console.log({ stuff: stuff })

  return (
    <View>
      <Text>test</Text>
      <Button title='Login' onPress={() => navigation.navigate('Login')} />
    </View>
  )
}

export default MyBooks
