import React, { useState } from 'react';
import { Text, TextInput, Button, View, StyleSheet } from 'react-native';
import AppButton from '../components/AppButton';

const LoginScreen = () => {

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const emailInputHandler = inputText => {
        setEmail(inputText);
    };

    const passwordInputHandler = inputText => {
        setPassword(inputText);
    }

    const submitFormHandler = () => {
        user = {
            "email": email,
            "password": password
        }
        console.log(user);
        resetFormHandler();
    }

    const resetFormHandler = () => {
        setEmail('');
        setPassword('');
    };

    return (
        <View style={styles.container}>
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
            <AppButton title='Submit' style={styles.submit} onPress={submitFormHandler} />
            <AppButton title='Reset' style={styles.reset} onPress={resetFormHandler} />
        </View>
    );
}

const styles = StyleSheet.create({
    submit: {
        marginTop: 20,
        backgroundColor: '#009688',
    },
    reset: {
        marginTop: 15,
        backgroundColor: '#A60011'
    },
    input: {
        width: 240,
        height: 50,
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 20,
        fontSize: 18,
        paddingHorizontal: 10
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
        alignItems: 'center',
        marginTop: 100
    },
});

export default LoginScreen;