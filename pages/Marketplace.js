import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import Shelf from '../components/Shelf'

const Marketplace = () => {
  const [data, setData] = useState([])

  const getBooks = async () => {
    try {
      const response = await fetch(
        'http://buecherregal-dev.herokuapp.com/api/books',
        { method: 'GET' }
      )
      const json = await response.json()
      console.log('TEST')
      setData(json)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getBooks()
  }, [])

  return (
    <View>
      <Shelf books={data} />
    </View>
  )
}

export default Marketplace
