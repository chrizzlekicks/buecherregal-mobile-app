import React, { useState, useEffect, useCallback } from 'react'
import { View, Text, Button } from 'react-native'
import Shelf from '../components/Shelf'
import { useGlobalContext } from '../context/GlobalContext'

const MyBooks = ({ navigation }) => {
  const [myBooks, setMyBooks] = useState([])
  const { setLoading, API_BOOKSBYUSER, userId, jwt } = useGlobalContext()

  const fetchMyBooks = useCallback(
    async (api, id, token) => {
      setLoading(true)
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
        setLoading(false)
      }
    },
    [setLoading]
  )

  // hole Bücher des Users
  useEffect(() => {
    fetchMyBooks(API_BOOKSBYUSER, userId, jwt)
  }, [fetchMyBooks, API_BOOKSBYUSER, userId, jwt])

  return (
    <View>
      <Text>test</Text>
      <Button
        title='Buch hochladen'
        onPress={() => navigation.navigate('UploadBook')}
      />
      <Shelf myBooks={myBooks} />
    </View>
  )
}

export default MyBooks
