import * as React from "react"
import { View, Text, StyleSheet, Image } from "react-native"
import defaultImage from "../static/NotAvailable.jpeg"

const BookView = ({ book }) => (
    <View style={styles.item}>
        <Image source={{uri:book.image}} style={{ width: 60, height: 60 }} />
        <View style={{ alignItems: "center" }}>
            <Text style={styles.book}>{book.name}</Text>
            <Text style={styles.author}>{book.author}</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    item: {
        margin: 10,
        padding: 10,
        backgroundColor: "#FFF",
        alignSelf: "center",
        flexDirection: "row",
        borderRadius: 5,
    },
    book: {
        fontSize: 32,
    },
    author: {
        fontSize: 24,
    }
});

export default BookView