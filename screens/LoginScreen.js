import React, { useState } from 'react';
import { Text, TextInput, Button, View, StyleSheet } from 'react-native';

const LoginScreen = () => {

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const emailInputHandler = () => {

    }

    const passwordInputHandler = () => {

    }

    const submitFormHandler = () => {}

    const resetFormHandler = () => {}

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Login Form</Text>
            </View>
            <View style={styles.formComponent}>
                <Text style={styles.label}>Email: </Text>
                <TextInput
                    style={styles.input}
                    blurOnSubmit
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChangeText={emailInputHandler}
                    value={email}
                />
            </View>
            <View style={styles.formComponent}>
                <Text style={styles.label}>Password: </Text>
                <TextInput
                    style={styles.input}
                    blurOnSubmit
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChangeText={passwordInputHandler}
                    value={password}
                />
            </View>
            <Button title='Submit' onPress={submitFormHandler} />
            <Button title='Reset' onPress={resetFormHandler} />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        width: 200,
        textAlign: 'center',
        height: 20,
        borderColor: 'grey',
        borderBottomWidth: 1,
        marginVertical: 10
    },
    formComponent: {
        flexDirection: 'row',
        marginVertical: 20
    },
    label: {
        fontSize: 20,
        textAlignVertical: 'center'
    },
    container: {
        alignItems: 'center'
    },
    title: {
        fontSize: 40
    }
});

export default LoginScreen;