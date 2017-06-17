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
import UserProfile from './app/components/ui/UserProfile'

export default class OurGroup extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="HomeScreen" component={HomeScreen} title="OurGroup App" initial={true} />
          <Scene key="Login" component={Login} title="Login" />
          <Scene key="UserProfile" component={UserProfile} title="UserProfile" />
        </Scene>
      </Router>
    );
  }
}

AppRegistry.registerComponent('OurGroup', () => OurGroup);
