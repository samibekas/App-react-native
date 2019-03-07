import React, { Component } from 'react'
import { View, Text, Button, TextInput, StyleSheet, ScrollView, Image } from 'react-native'
import { connect } from 'react-redux'
import { addPlace } from '../../store/actions/index'
import PlaceInput from '../../components/PlaceInput/PlaceInput'
import PickImage from '../../components/PickImage/PickImage'
import PickLocation from '../../components/PickLocation/PickLocation'
import HeadingText from '../../components/UI/HeadingText/HeadingText'

class SharePlaceScreen extends Component {

    static navigatorStyle = {
        navBarButtonColor: 'orange'
    }

    state = {
        placeName: ""
    }
    constructor(props) {
        super(props)
        this.props.navigator.setOnNavigatorEvent(this.setOnNavigatorEvent)
    }

    setOnNavigatorEvent = event => {
        if (event.type === "NavBarButtonPress") {
            if (event.id === "sideDrawerToggle") {
                this.props.navigator.toggleDrawer({
                    side: "left"
                })
            }
        }
    }

    placeAddedHandler = () => {
        if (this.state.placeName.trim() !== "") {
            this.props.onAddPlace(this.state.placeName)
        }
    }

    placeNameChangeHandler = val => {
        this.setState({
            placeName: val
        })
    }

    render () {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <HeadingText>Share a place with us!</HeadingText>
                    <PickImage />
                    <PickLocation />
                    <PlaceInput
                        placeName={this.state.placeName}
                        onChangeText={this.placeNameChangeHandler}
                    />
                    <View style={styles.button}>
                        <Button title="Share place!" onPress={this.placeAddedHandler}/>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    }
})

const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: (placeName) => dispatch(addPlace(placeName))
    }
}

export default connect(null, mapDispatchToProps)(SharePlaceScreen)
