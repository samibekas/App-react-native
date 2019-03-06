import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import startMainTabs from '../MainTabs/startMainTabs'
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput'
import HeadingText from '../../components/UI/HeadingText/HeadingText'

class AuthScreen extends Component {

    loginHandler = () => {
        startMainTabs()
    }

    render () {
        return (
            <View style={styles.container}>
                <HeadingText>Auth Screen</HeadingText>
                <Button title="Switch to login"/>
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
                <Button title="Login" onPress={this.loginHandler}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
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
