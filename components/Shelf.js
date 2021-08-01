import React, { useState } from 'react'
import { View, Image, Text } from 'react-native'

import Book from './Book'

function Shelf() {
  const [bookData, setBookData] = useState([
    { _id: 12345678, name: 'name1', author: 'author1', category: 'category1' },
    { _id: 23456789, name: 'name2', author: 'author2', category: 'category2' },
    { _id: 34567890, name: 'name3', author: 'author3', category: 'category2' },
    { _id: 45678901, name: 'name4', author: 'author4', category: 'category1' },
    { _id: 56789012, name: 'name5', author: 'author5', category: 'category3' },
  ])

  return <></>
}

export default Shelf
