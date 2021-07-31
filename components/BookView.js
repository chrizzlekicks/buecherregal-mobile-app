import * as React from "react"
import { View, Text, StyleSheet } from "react-native"
import defaultImage from "../static/NotAvailable.jpeg"

const BookView = ({ book }) => (
    <View style={styles.item}>
        <Text style={styles.book}>{book.name}</Text>
    </View>
);

const styles = StyleSheet.create({
    item: {
        margin: 10,
        padding: 10,
        backgroundColor: "#FFF",
        width: "80%",
        flex: 1,
        alignSelf: "center",
        flexDirection: "row",
        borderRadius: 5,
        fontSize: 32
    },
    book: {
        fontSize: 32,
    },
});

export default BookView