import React, { useState }from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import AppButton from '../components/AppButton';
const RegisterScreen = () => {
    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[confirmPassword, setConfirmPassword] = useState('');

    const resetFormHandler = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    };

    const firstNameInputHandler = inputText => {
        setFirstName(inputText);
    };

    const lastNameInputHandler = inputText => {
        setLastName(inputText);
    };

    const emailInputHandler = inputText => {
        setEmail(inputText);
    };

    const passwordInputHandler = inputText => {
        setPassword(inputText);
    };

    const confirmPasswordInputHandler = inputText => {
        setConfirmPassword(inputText);
    };

    const submitFormHandler = () => {
        let user = {
                "firstName": firstName,
                "lastName": lastName,
                "email": email,
                "password": password
        };
        console.log(user);
        resetFormHandler();
    }
    

    return (
        <View style={styles.container}>
            <View style={styles.formComponent}>
                <Text style={styles.label}>First Name: </Text>
                <TextInput 
                    style={styles.input}
                    blurOnSubmit
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChangeText={firstNameInputHandler}
                    value={firstName}
                />
            </View>
            <View style={styles.formComponent}>
                <Text style={styles.label}>Last Name: </Text>
                <TextInput
                    style={styles.input}
                    blurOnSubmit
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChangeText={lastNameInputHandler}
                    value={lastName}
                />
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
            <View style={styles.formComponent}>
                <Text style={styles.label}>Confirm Password: </Text>
                <TextInput
                    style={styles.input}
                    blurOnSubmit
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChangeText={confirmPasswordInputHandler}
                    value={confirmPassword}
                />
            </View>
            <AppButton title='Submit' style={styles.submit} onPress={submitFormHandler} />
            <AppButton title='Reset' style={styles.reset} onPress={resetFormHandler} />
        </View>
    )
};

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
        width: '50%',
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
        marginTop: '5%',
        maxWidth: '80%',
        marginHorizontal: '10%'
    },
});

export default RegisterScreen;