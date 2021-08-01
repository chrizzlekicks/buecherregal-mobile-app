import * as React from "react"
import { View, Text, StyleSheet, Image, TouchableOpacity, Pressable } from "react-native"

const Book = ({ book }) => (
    <View style={styles.item}>
        <Image source={{ uri: book.image }} style={styles.image} />
        <View style={styles.textbox}>
            <Text style={styles.book}>{book.name}</Text>
            <Text style={styles.author}>{book.author}</Text>
            <Text style={styles.default}><Text style={styles.bold}>Genre:</Text> {book.category}</Text>
            <Text style={styles.default}><Text style={styles.bold}>Beschreibung:</Text> {book.description}</Text>
            <Text style={styles.default}><Text style={styles.bold}>Dieses Buch gehört:</Text> {book.owner}</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    item: {
        flex:1,
    },
    image: {
        alignSelf: "center",
        width: "100%",
        height: 300,
    },
    textbox: {
        alignSelf: "center",
        backgroundColor: "#FFFFFF",
        width: "100%",
        flex: 1,
        padding: 15,
    },
    book: {
        color: "#b00055",
        fontSize: 30,
        fontWeight: "bold"
    },
    author: {
        color: "#b00055",
        fontSize: 19,
        marginBottom: 10,
    },
    default: {
        color: "#000000",
        fontSize: 19,
    },
    bold: {
        fontWeight: "bold",
    }

});


export default Book
