import * as React from 'react'
import { ScrollView, View, FlatList, StyleSheet, Text, StatusBar, Button } from 'react-native';
import { useEffect, useState } from 'react';
import Shelf from '../components/Shelf';

const Marketplace = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getBooks = async () => {
        try {
            const response = await fetch("http://buecherregal.herokuapp.com/api/books", { method: 'GET' });
            const json = await response.json();
            console.log("TEST")
            setData(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getBooks();
    }, []);


    return (
        <View style={styles.container}>
            <Shelf books={data} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F7F7F7',
        marginTop: 10,
        flex: 1
    }
})


export default Marketplace;