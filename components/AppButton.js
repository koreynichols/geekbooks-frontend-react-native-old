import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const AppButton = props => {
    return (
        <TouchableOpacity style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>{props.title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    appButtonContainer: {
        marginTop: 50,
        elevation: 8,
        backgroundColor: "#009688",
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