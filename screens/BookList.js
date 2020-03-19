import React from 'react';
import { Text, View, StyleSheet, Image, FlatList, ScrollView } from 'react-native';

import BookItem from '../components/BookItem';

const bookData = require('../data/books-data.json');


const BookList = () => {
    const selectedBook = bookData.items.find(book => book.id === 'hn1FNJXPMrUC');

    const renderBookItem = selectedBook => {
        return(
            <View>
                <Text>hello</Text>
            <BookItem 
                imgSrc={selectedBook.volumeInfo.imageLinks.thumbnail}
                bookTitle={selectedBook.volumeInfo.title}
                bookAuthor={selectedBook.volumeInfo.authors}
            />
            </View>
        );
    };

    return(
            <View style={styles.container}>
                <FlatList
                    data={selectedBook}
                    renderItem={renderBookItem}
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
        flexWrap: 'wrap'
    },
    textStyles: {
        fontSize: 15
    },
    bookItemContainer: {
        marginVertical: 15,
        alignItems: 'center',
        width: '50%'
    }
});

export default BookList;