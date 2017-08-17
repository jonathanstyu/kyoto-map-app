import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Description extends React.Component {
  render() {
    var that = this;
    return(
      <View style={styles.container}>
        <Text>{that.props.title}</Text>
        <Text>{that.props.description}</Text>
        <Text>Latitude: {that.props.latlng.latitude}</Text>
        <Text>Longitude: {that.props.latlng.longitude}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
