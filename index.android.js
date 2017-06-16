import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import HomeScreen from './app/components/ui/HomeScreen'
import Login from './app/components/ui/Login'

export default class OurGroup extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="HomeScreen" component={HomeScreen} title="OurGroup App" initial={true} />
          <Scene key="Login" component={Login} title="Login" />
        </Scene>
      </Router>
    );
  }
}

AppRegistry.registerComponent('OurGroup', () => OurGroup);
