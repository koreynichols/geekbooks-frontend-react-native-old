import React from 'react';
import { Text, View, StyleSheet, Image, FlatList, ScrollView } from 'react-native';

import BookItem from '../components/BookItem';

const bookData = require('../data/books-data.json');


const BookList = () => {
    const renderBookItem = selectedBook => {
        return(
            <View>
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
    imageStyle: {
        width: 100,
        height: 200,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'center',
    }
});

export default BookList;