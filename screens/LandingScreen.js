import React from 'react';
import { ImageBackground } from 'react-native';
import { View, Text, Button, StyleSheet } from 'react-native';

const image = require("../assets/books-background.jpg");

const LandingPage = props => {
    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <View style={styles.innerContainer}>
            <Text style={styles.title}>GeekBooks</Text>
            <View style={styles.button}>
                <Button title="Login" color='green' onPress={() => {
                    props.navigation.navigate({
                        routeName: 'Login'
                    })
                }} />
            </View>
            <View style={styles.button}> 
                <Button title="Register" onPress={() => {
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
    title: {
        fontSize: 50,
        marginTop: 10,
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