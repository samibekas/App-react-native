import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ImageBackground } from 'react-native';
import startMainTabs from '../MainTabs/startMainTabs'
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput'
import HeadingText from '../../components/UI/HeadingText/HeadingText'
import backgroundImage from '../../assets/background.jpg'
import ButtonWithBackground from '../../components/UI/ButtonWithBackground/ButtonWithBackground'

class AuthScreen extends Component {

    loginHandler = () => {
        startMainTabs()
    }

    render () {
        return (
            <ImageBackground
                source={backgroundImage}
                style={styles.backgroundImage}>
                <View style={styles.container}>
                    <HeadingText>Auth Screen</HeadingText>
                    <ButtonWithBackground
                        onPress={() => alert("hello")}
                        color="#29aaf4">
                        Switch to login
                    </ButtonWithBackground>
                    <View style={styles.inputContainer}>
                        <DefaultInput
                            style={styles.input}
                            placeholder="Your email address" />
                        <DefaultInput
                            style={styles.input}
                            placeholder="Password" />
                        <DefaultInput
                            style={styles.input}
                            placeholder="Confirm password" />
                    </View>
                    <ButtonWithBackground
                        onPress={this.loginHandler}
                        color="#29aaf4">
                        Submit
                    </ButtonWithBackground>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    backgroundImage: {
        width: '100%',
        flex: 1
    },
    inputContainer: {
        width: '80%'
    },
    input: {
        borderColor: '#bbb',
        backgroundColor: '#eee'
    }
})

export default AuthScreen;
