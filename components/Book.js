import * as React from "react"
import { View, Text, StyleSheet, Image, TouchableOpacity, Pressable } from "react-native"

const Book = ({ book }) => (
    <View style={styles.item}>
        <Image source={{ uri: book.image }} style={styles.image} />
        <View style={styles.textbox}>
            <Text style={styles.book}>{book.name}</Text>
            <Text style={styles.author}>{book.author}</Text>
            <Text style={styles.default}>Genre: {book.category}</Text>
            <Text style={styles.default}>Beschreibung: {book.description}</Text>
            <Text style={styles.default}>Dieses Buch gehört: {book.owner}</Text>
        </View>
    </View>
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
        backgroundColor: "#FFFFFF",
        flex: 1
    },
    book: {
        padding: 10,
        color: "#b00055",
        fontSize: 24,
    },
    author: {
        padding: 10,
        color: "#b00055",
        fontSize: 16,
    },
    default: {
        color: "#000000",
        fontSize: 16,
    }

});


export default Book
