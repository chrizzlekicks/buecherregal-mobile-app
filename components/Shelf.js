import React from 'react'
import { View, Image, Text, FlatList, StyleSheet } from 'react-native'
import BookView from './BookView'

const Shelf = (props) => {
  
  return (
    <View style={styles.container}>
      <FlatList
        data={props.books}
        renderItem={({ item }) => <BookView book={item} />}
        keyExtractor={(props) => props._id}
        numColumns={2}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F7F7F7',
    marginTop: 10,
  },
})

export default Shelf
