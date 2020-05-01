import React from 'react';
import { Text, View, StyleSheet, Image, FlatList, ScrollView, TouchableOpacity } from 'react-native';

import BookItem from '../components/BookItem';

const bookData = require('../data/books-data.json');


const BookList = props => {

    const renderBookItem = selectedBook => {
        return(
            <TouchableOpacity onPress={() => {props.navigation.navigate({
                routeName: 'BookDetailScreen'
                })}} >
                <View style={styles.listStyle}>
                    <BookItem 
                        imgSrc={selectedBook.item.volumeInfo.imageLinks.thumbnail}
                        bookTitle={selectedBook.item.volumeInfo.title}
                        bookAuthor={selectedBook.item.volumeInfo.authors}
                    />
                </View>
            </TouchableOpacity>
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