import * as React from "react"
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"
import Book from "./Book"
import OpenBook from "../pages/OpenBook"

const BookView = (props) => (
    <TouchableOpacity onPress={() => props.navigation.navigate('OpenBook', { book: props.book })}>
        <View style={styles.item}>
            <Image source={{ uri: props.book.image }} style={styles.image} />
            <View style={styles.textbox}>
                <Text style={styles.book}>{props.book.name}</Text>
                <Text style={styles.author}>{props.book.author}</Text>
            </View>
        </View>
    </TouchableOpacity >
);

const styles = StyleSheet.create({
    item: {
        margin: 10,
        width: 180,
        
    },
    image: {
        alignSelf: "center",
        marginTop: 5,
        marginLeft: 5,
        marginBottom: 0,
        marginRight: 5,
        width: 180,
        height: 170,
        top: 5,
    },
    textbox: {
        alignSelf: "center",
        width: 180,
        height: 130,
        backgroundColor: "#b00055"
        
    },
    book: {
        padding: 10,
        color: "#FFF",
        fontSize: 16,
        fontWeight: "bold",
    },
    author: {
        padding: 10,
        color: "#FFF",
        fontSize: 13,
    }
});

export default BookView
