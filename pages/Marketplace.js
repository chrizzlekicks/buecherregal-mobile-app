import React, { useEffect, useState } from 'react'
import { ActivityIndicator, View, StyleSheet } from 'react-native'
import Shelf from '../components/Shelf'

const Marketplace = (props) => {
  const [isLoading, setLoading] = useState(false)
  const [data, setData] = useState([])

  const getBooks = async () => {
    try {
      setLoading(true)
      const response = await fetch(
        'http://buecherregal-dev.herokuapp.com/api/books',
        { method: 'GET' }
      )
      const json = await response.json()
      console.log('TEST')
      setData(json)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getBooks()
  }, [])

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Shelf navigation={props.navigation} books={data} />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F7F7F7',
    marginTop: 10,
    flex: 1,
  },
})

export default Marketplace
