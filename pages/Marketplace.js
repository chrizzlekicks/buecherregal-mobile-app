import * as React from 'react'
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import Shelf from '../components/Shelf';

const Marketplace = (props) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getBooks = async () => {
        try {
            const response = await fetch(
                'http://buecherregal-dev.herokuapp.com/api/books',
                { method: 'GET' }
            )
            const json = await response.json()
            console.log('TEST')
            setData(json)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getBooks()
    }, [])


    return (
        <View style={styles.container}>
            {isLoading ? <ActivityIndicator /> : (
                <Shelf navigation={props.navigation} books={data} />
            )
            }
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
