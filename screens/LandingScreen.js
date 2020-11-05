import React from 'react';
import { ImageBackground } from 'react-native';
import { View, Text, Button, StyleSheet } from 'react-native';

import AppButton from "../components/AppButton"

const image = require("../assets/books-background.jpg");

const LandingPage = props => {
    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <View style={styles.innerContainer}>
            <Text style={styles.title}>GeekBooks</Text>
            <View style={styles.button}>
                <AppButton title="Login" style={styles.login} onPress={() => {
                    props.navigation.navigate({
                        routeName: 'Login'
                    })
                }} />
            </View>
            <View style={styles.button}> 
                <AppButton title="Register" style={styles.register} onPress={() => {
                    props.navigation.navigate({
                        routeName: 'Register'
                    })
                }} />
            </View>
            </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        marginVertical: 20,
        width: 120,
    },
    login: {
        backgroundColor: "#009688"
    },
    register: {
        backgroundColor: "#889688"
    },
    title: {
        fontSize: 55,
        marginBottom: 25,
        fontWeight: "bold",
    },
    container: {
        flex: 1,
        backgroundColor: "#9bc8cc"
    },
    image: {
        flex: 1,
        justifyContent: "center",
    },
    innerContainer: {
        alignItems: 'center'
    }
});

export default LandingPage