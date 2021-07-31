import * as React from "react"
import { View, Text, StyleSheet, Image } from "react-native"

const BookView = ({ book }) => (
    <View style={styles.item}>
        <Image source={{ uri: book.image }} style={styles.image} />
        <View style={styles.textbox}>
            <Text style={styles.book}>{book.name}</Text>
            <Text style={styles.author}>{book.author}</Text>
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
        width: 198,
        height: 200,
        backgroundColor: "#FF0000",
    },
    book: {
        padding: 10,
        backgroundColor: "#FF0000",
        color: "#FFF",
        fontSize: 24,
    },
    author: {
        padding: 10,
        backgroundColor: "#FF0000",
        color: "#FFF",
        fontSize: 16,
    }
});

export default BookView