import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const AppButton = props => {
    return (
        <TouchableOpacity onPress={props.onPress} style={[styles.appButtonContainer, props.style]}>
            <Text style={styles.appButtonText}>{props.title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    appButtonContainer: {
        elevation: 8,
        // backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
      },
      appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      }
})

export default AppButton;