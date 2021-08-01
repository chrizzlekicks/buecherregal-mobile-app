import React from 'react'
import { View, Text } from 'react-native'
import Book from '../components/Book';

const OpenBook = (props) => {
    const book = props.route.params.book
    console.log(book)
    return (
        <Book book={book} />
    );
};

export default OpenBook;
