import React, { useState } from "react"
import { View, Image, Text, FlatList, StyleSheet, ScrollView } from "react-native"
import BookView from "./BookView"


const Shelf = ({ books }) => {
    return (
        <FlatList
            data={books}
            renderItem={({ item }) => <BookView book={item} />}
            keyExtractor={(books) => books._id}
            numColumns={2}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F7F7F7',
        marginTop: 10,
        flex: 1
    }
})

export default Shelf