import React, { Component } from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'

class PlaceInput extends Component {

  state = {
    placeName: '',
    places: []
  }

  placeNameChangedHandler = (val) => {
    this.setState({
      placeName: val
    })
  }

  render () {
    return(
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.placeInput}
          value={this.state.placeName}
          placeholder="An awesome f place"
          onChangeText={this.placeNameChangedHandler}
        />
        <Button
          style={styles.placeButton}
          title="Add"
          onPress={() => this.props.onPlaceAdded(this.state.placeName)}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  placeInput: {
    width: '70%'
  },
  placeButton: {
    width: '30%'
  },
})

export default PlaceInput
