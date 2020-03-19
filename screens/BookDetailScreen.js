import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const bookData = require('../data/books-data.json');

const BookDetailScreen = () => {
    const selectedBook = bookData.items.find(book => book.id === 'hn1FNJXPMrUC');
    console.log(selectedBook.volumeInfo.title);
    return (
        <View style={styles.container}>
            <Text style={styles.textStyles}>Title: {selectedBook.volumeInfo.title}</Text>
            <Text style={styles.textStyles}>Author: {selectedBook.volumeInfo.authors}</Text>
            <Image style={{width: 200, height: 400}} source={{uri: selectedBook.volumeInfo.imageLinks.thumbnail}} />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginTop: 30
    },
    textStyles: {
        fontSize: 25
    }
});

export default BookDetailScreen;