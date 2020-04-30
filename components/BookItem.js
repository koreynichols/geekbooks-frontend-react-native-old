import React from 'react';
import { View, Image, Text, StyleSheet} from 'react-native';

const BookItem = props => {
    return (
        <View style={styles.bookItemContainer}>
            <Image style={styles.imageStyle} source={{uri: props.imgSrc}} />
            <Text style={styles.textStyles}>{props.bookTitle}</Text>
            <Text style={styles.textStyles}>{props.bookAuthor}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    imageStyle: {
        width: 150,
        height: 225,
    },
    textStyles: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    bookItemContainer: {
        marginVertical: 15,
        alignItems: 'center',
        width: '100%',
        justifyContent: 'flex-end',
        width: 170
    }
})

export default BookItem;