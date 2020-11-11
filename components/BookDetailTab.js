import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const BookDetailTab = props => {
    return (
        <TouchableOpacity onPress={props.onPress} style={[styles.DetailTabContainer, props.style]}>
            <Text style={styles.appButtonText}>{props.title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    DetailTabContainer: {
        backgroundColor: "#009688",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        width: '40%',
        marginLeft: 15
      },
      appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      }
})

export default BookDetailTab;