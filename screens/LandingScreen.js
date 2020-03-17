import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const LandingPage = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>GeekBooks</Text>
            <View style={styles.button}>
                <Button title="Login" color='green' onPress={() => {
                    console.log('login');
                }} />
            </View>
            <View style={styles.button}> 
                <Button title="Register" onPress={() => {
                    console.log('register')
                }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        marginVertical: 20,
    },
    title: {
        fontSize: 35,
        marginTop: 50
    },
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    }
});

export default LandingPage