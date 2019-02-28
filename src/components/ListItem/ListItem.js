import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const listItem = (props) => (
  <TouchableOpacity onPress={props.onItemPressed}>
    <View style={styles.ListItem}>
      <Image
        resizeMode="cover"
        source={props.placeImage}
        style={styles.placeImage} />
      <Text>{props.placeName}</Text>
    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  ListItem: {
    width: "100%",
    padding: 10,
    backgroundColor: "rgb(200,200,200)",
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center'
  },
  placeImage: {
    marginRight: 8,
    height: 40,
    width: 40
  }
});

export default listItem;
