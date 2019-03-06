import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import startMainTabs from '../MainTabs/startMainTabs'

class AuthScreen extends Component {

    loginHandler = () => {
        startMainTabs()
    }

    render () {
        return (
            <View style={styles.container}>
                <Text>Auth Screen</Text>
                <Button title="Switch to login"/>
                <TextInput placeholder="Your email address" />
                <TextInput placeholder="Password" />
                <TextInput placeholder="Confirm password" />
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
    }
})

export default AuthScreen;
