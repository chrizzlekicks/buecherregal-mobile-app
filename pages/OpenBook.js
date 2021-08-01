import React from 'react'
import { View, Text } from 'react-native'
import Book from '../components/Book';

const OpenBook = () => {
    const data = {
        "_id": "60bbce4ab3310300155b3f2d",
        "name": "Dune - Der Wüstenplanet",
        "author": "Frank Herbert",
        "category": "Science Fiction",
        "owner": "60bbcde8b3310300155b3f2c",
        "created": "2021-06-05T19:19:38.920Z",
        "image": "https://ik.imagekit.io/buecherregal/b/1622920778013-herbert-dune_QOSpo41lc.jpeg",
        "updated": "2021-06-16T12:53:52.846Z",
        "description": "TEST"
    }

    return (
        <Book book={data} />
    );
};
export default OpenBook;
