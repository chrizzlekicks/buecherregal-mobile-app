import * as React from 'react'
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Button } from 'react-native';
import Shelf from '../components/Shelf';

const bookData = [
    { _id: 12345678, name: "name1", author: "author1", category: "category1" },
    { _id: 23456789, name: "name2", author: "author2", category: "category2" },
    { _id: 34567890, name: "name3", author: "author3", category: "category2" },
    { _id: 45678901, name: "name4", author: "author4", category: "category1" },
    { _id: 56789012, name: "name5", author: "author5", category: "category3" },
]

const Marketplace = () => {
    return (
        <View>
            <Shelf books={bookData} />
        </View>
    );
}

export default Marketplace;