import React, { useState, useEffect, useCallback } from 'react'
import { ActivityIndicator, View, StyleSheet, Button } from 'react-native'
import Shelf from '../components/Shelf'
import { useGlobalContext } from '../context/GlobalContext'

const MyBooks = ({ navigation }) => {
  const [myBooks, setMyBooks] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const { API_BOOKSBYUSER, userId, jwt } = useGlobalContext()

  const fetchMyBooks = useCallback(async (api, id, token) => {
    setIsLoading(true)
    try {
      const res = await fetch(`${api}${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'content-type': 'application/json',
        },
      })
      if (res.ok) {
        const myBookList = await res.json()
        setMyBooks(myBookList)
      } else {
        throw new Error(`could not get books of user ${id}`)
      }
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
    }
  }, [])

  // hole Bücher des Users
  useEffect(() => {
    fetchMyBooks(API_BOOKSBYUSER, userId, jwt)
  }, [fetchMyBooks, API_BOOKSBYUSER, userId, jwt])

  return (
    <View>
      <Button
        title='Buch hochladen'
        onPress={() => navigation.navigate('UploadBook')}
      />
      <View style={styles.container}>
        {isLoading ? <ActivityIndicator /> : <Shelf books={myBooks} />}
      </View>
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

export default MyBooks
