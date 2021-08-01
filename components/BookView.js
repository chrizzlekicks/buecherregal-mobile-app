import * as React from "react"
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"
import Book from "./Book"
import OpenBook from "../pages/OpenBook"

const BookView = (props) => (
    <TouchableOpacity onPress={() => props.navigation.navigate('OpenBook')}>
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
        padding: 10,
        alignSelf: "center",
        borderRadius: 5,
        width: 200,
        minHeight: 300
    },
    image: {
        alignSelf: "center",
        marginTop: 5,
        marginLeft: 5,
        marginBottom: 0,
        marginRight: 5,
        width: 200,
        height: 200,
    },
    textbox: {
        alignSelf: "center",
        width: 198,
        height: 200,
        backgroundColor: "#b00055",
    },
    book: {
        padding: 10,
        color: "#FFF",
        fontSize: 24,
    },
    author: {
        padding: 10,
        color: "#FFF",
        fontSize: 16,
    }
});

export default BookView