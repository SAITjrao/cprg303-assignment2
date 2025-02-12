import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ButtonTemplate from './button_template';

const Welcome = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome to My New App</Text>
            <View style={styles.buttonContainer}>
                <ButtonTemplate link={"/about"} text={"Calgary"} color="red" />
                <ButtonTemplate link={"/(tabs)"} text={"Edmonton"} color="green" />
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 10,
        position: 'absolute',
        bottom: 0
      }
});

export default Welcome;