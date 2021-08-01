import React, { useState } from "react"
import { View, Image, Text, FlatList, StyleSheet, ScrollView } from "react-native"
import BookView from "./BookView"


const Shelf = (props) => {
    return (
        <FlatList
            contentContainerStyle={{alignItems: "center"}}
            data={props.books}
            renderItem={({ item }) => <BookView book={item} navigation={props.navigation} />}
            keyExtractor={(books) => books._id}
            numColumns={2}
            style={styles.container}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F7F7F7',
        flex: 1,
        flexDirection: "column",
        
    }
})

export default Shelf
