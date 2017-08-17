import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import MapView from 'react-native-maps';
import markers from './markerLocations';
import Description from './description';
import {Actions} from 'react-native-router-flux';

export default class MapViewer extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <MapView
          style={styles.mapViewStyle}
          initialRegion={{
            latitude: 35.0116,
            longitude: 135.7680,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
          }}>
          {
            markers.map(function (marker) {
              return (
                <MapView.Marker
                  key={marker.title}
                  coordinate={marker.latlng}
                  title={marker.title}
                  description={marker.description}
                  onPress={() => Actions.description(marker)}
                />
              )
            })
          }
        </MapView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  mapViewStyle: {
    flex: 1,
     ...StyleSheet.absoluteFillObject,
  }
})
