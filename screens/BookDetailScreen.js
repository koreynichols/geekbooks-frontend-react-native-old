import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const bookData = require('../data/books-data.json');

const BookDetailScreen = props => {
    selectedBookId = props.navigation.getParam('bookId')
    const selectedBook = bookData.items.find(book => book.id === selectedBookId);
    console.log(selectedBook.volumeInfo.title);
    return (
        <View style={styles.container}>
            <Image style={{width: 250, height: 400}} source={{uri: selectedBook.volumeInfo.imageLinks.thumbnail}} />
            <Text style={styles.textStyles}>Title: {selectedBook.volumeInfo.title}</Text>
            <Text style={styles.textStyles}>Author: {selectedBook.volumeInfo.authors}</Text>
            {(() => {
                if(selectedBook.saleInfo.saleability == "FOR_SALE")
                    return <Text style={styles.textStyles}>Price: ${selectedBook.saleInfo.retailPrice.amount}</Text> 
                else
                    return <Text>NOT FOR SALE</Text>
                })()}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        alignItems: "center"
    },
    textStyles: {
        fontSize: 25
    }
});

export default BookDetailScreen;