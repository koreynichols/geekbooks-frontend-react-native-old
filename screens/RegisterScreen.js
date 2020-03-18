import React from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

const RegisterScreen = () => {
    return (
        <View>
            <View>
                <Text>Register Form</Text>
            </View>
            <View style={styles.formComponent}>
                <Text>First Name: </Text>
                <TextInput 
                    style={styles.input}
                    blurOnSubmit
                    autoCapitalize='none'
                    autoCorrect={false}
                />
            </View>
            <View style={styles.formComponent}>
                <Text>Last Name: </Text>
                <TextInput
                    style={styles.input}
                    blurOnSubmit
                    autoCapitalize='none'
                    autoCorrect={false}
                />
            </View>
            <View style={styles.formComponent}>
                <Text>Email: </Text>
                <TextInput
                    style={styles.input}
                    blurOnSubmit
                    autoCapitalize='none'
                    autoCorrect={false}
                />
            </View>
            <View style={styles.formComponent}>
                <Text>Password: </Text>
                <TextInput
                    style={styles.input}
                    blurOnSubmit
                    autoCapitalize='none'
                    autoCorrect={false}
                />
            </View>
            <View style={styles.formComponent}>
                <Text>Confirm Password: </Text>
                <TextInput
                    style={styles.input}
                    blurOnSubmit
                    autoCapitalize='none'
                    autoCorrect={false}
                />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    input: {
        width: 50,
        textAlign: 'center',
        height: 30,
        borderColor: 'grey',
        borderWidth: 1,
        marginVertical: 10
    },
    formComponent: {
        flexDirection: 'row'
    }
});

export default RegisterScreen;