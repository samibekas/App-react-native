import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    TextInput,
    StyleSheet,
    ImageBackground,
    Dimensions
} from 'react-native';
import startMainTabs from '../MainTabs/startMainTabs'
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput'
import HeadingText from '../../components/UI/HeadingText/HeadingText'
import backgroundImage from '../../assets/background.jpg'
import ButtonWithBackground from '../../components/UI/ButtonWithBackground/ButtonWithBackground'

class AuthScreen extends Component {

    state = {
        respStyles: {
            pwContainerDirection: 'column',
            pwContainerJustifyContent: 'flex-start',
            pwWrapperWidth: '100%'
        }
    }

    constructor(props) {
        super(props),
        Dimensions.addEventListener("change", (dims) => {
            this.setState({
                respStyles: {
                    pwContainerDirection: Dimensions.get('window').height > 500 ? 'column' : 'row',
                    pwContainerJustifyContent: Dimensions.get('window').height > 500 ? 'flex-start' : 'space-between',
                    pwWrapperWidth: Dimensions.get('window').height > 500 ? '100%' : '45%'
                }
            })
        })
    }

    loginHandler = () => {
        startMainTabs()
    }

    render () {

        let headingText = null

        if (Dimensions.get('window').height >500) {
            headingText = (<HeadingText>Auth Screen</HeadingText>)
        }

        return (
            <ImageBackground
                source={backgroundImage}
                style={styles.backgroundImage}>
                <View style={styles.container}>
                    {headingText}
                    <ButtonWithBackground
                        onPress={() => alert("hello")}
                        color="#29aaf4">
                        Switch to login
                    </ButtonWithBackground>
                    <View style={styles.inputContainer}>
                        <DefaultInput
                            style={styles.input}
                            placeholder="Your email address" />
                        <View style={{
                            flexDirection: this.state.respStyles.pwContainerDirection,
                            justifyContent: this.state.respStyles.pwContainerJustifyContent
                        }}>
                            <View style={{
                                width: this.state.respStyles.pwWrapperWidth
                            }}>
                                <DefaultInput
                                    style={styles.input}
                                    placeholder="Password" />
                            </View>
                            <View style={{
                                width: this.state.respStyles.pwWrapperWidth
                            }}>
                                <DefaultInput
                                    style={styles.input}
                                    placeholder="Confirm password" />
                            </View>
                        </View>
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
    },
    passwordContainer: {
        flexDirection: Dimensions.get('window').height > 500 ? 'column' : 'row',
        justifyContent: 'space-between'
    },
    passwordWrapper: {
        width: Dimensions.get('window').height > 500 ? '100%' : '45%'
    }
})

export default AuthScreen;
