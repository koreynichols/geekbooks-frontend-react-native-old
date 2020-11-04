import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView} from 'react-native';

const bookData = require('../data/books-data.json');

const BookDetailScreen = props => {
    selectedBookId = props.navigation.getParam('bookId')
    const selectedBook = bookData.items.find(book => book.id === selectedBookId);
    console.log(selectedBook.volumeInfo.title);
    return (
        <ScrollView style={styles.viewStyle}>
        <View style={styles.container}>
            <Image style={{width: 250, height: 400}} source={{uri: selectedBook.volumeInfo.imageLinks.thumbnail}} />
            <Text style={styles.textStyles}>Title: {selectedBook.volumeInfo.title}</Text>
            <Text style={styles.textStyles}>Author: {selectedBook.volumeInfo.authors}</Text>
            <Text style={styles.descriptionStyle}>Description: {selectedBook.volumeInfo.description}</Text>
            {(() => {
                if(selectedBook.saleInfo.saleability == "FOR_SALE")
                    return <Text style={styles.textStyles}>Price: ${selectedBook.saleInfo.retailPrice.amount}</Text> 
                else
                    return <Text style={styles.notForSale}>NOT FOR SALE</Text>
                })()}
        </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        marginBottom: 30,
        alignItems: "center",
    },
    textStyles: {
        fontSize: 25,
        marginTop: 10
    },
    notForSale: {
        fontSize: 25,
        marginTop: 10,
        color: "red"
    },
    descriptionStyle: {
        fontSize: 15,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10
    },
    viewStyle: {
        backgroundColor: "#9bc8cc"
    }
});

export default BookDetailScreen;