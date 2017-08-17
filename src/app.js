import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import MapViewer from './mapViewer';
import Description from './description';
import {Router, Scene} from 'react-native-router-flux';

export default class App extends React.Component {
  render() {
    return(
      <Router>
        <Scene key={"root"}>
          <Scene key="map" component={MapViewer} title="Explore Kyoto" initial/>
          <Scene key="description" component={Description}/>
        </Scene>
      </Router>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
