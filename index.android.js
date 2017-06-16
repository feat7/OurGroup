import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import HomeScreen from './app/components/ui/HomeScreen'
import Login from './app/components/ui/Login'

export default class OurGroup extends Component {
  render() {
    return (
      <HomeScreen />
    );
  }
}

AppRegistry.registerComponent('OurGroup', () => OurGroup);
