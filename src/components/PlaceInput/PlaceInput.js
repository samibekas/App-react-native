import React from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'
import DefaultInput from '../UI/DefaultInput/DefaultInput'

const PlaceInput = props => (
    <DefaultInput
        value={props.placeName}
        onChangeText={props.onChangeText}
        placeholder="Place name"/>
)


export default PlaceInput
