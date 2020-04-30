import React from 'react';
import { Text, View, StyleSheet, Image, FlatList, ScrollView } from 'react-native';

import BookItem from '../components/BookItem';

const bookData = require('../data/books-data.json');


const BookList = () => {
    const renderBookItem = selectedBook => {
        return(
            <View style={styles.listStyle}>
                <BookItem 
                    imgSrc={selectedBook.item.volumeInfo.imageLinks.thumbnail}
                    bookTitle={selectedBook.item.volumeInfo.title}
                    bookAuthor={selectedBook.item.volumeInfo.authors}
                />
            </View>
        );
    };

    return(
            <View style={styles.container}>
                <FlatList
                    data={bookData.items}
                    renderItem={renderBookItem}
                    numColumns={2}
                />
            </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: '100%'
    },
    listStyle: {
        padding: 15,
    }
});

export default BookList;