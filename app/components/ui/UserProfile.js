'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { Actions } from 'react-native-router-flux'

class UserProfile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome!</Text>
      	<Text style={styles.text}>Logged In successfully!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
    backgroundColor: '#27ae60',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'normal',
    fontSize: 25,
    color: '#fff'
  },
  text: {
    color: '#fff',
    padding: 2,
  },
  btn: {
  	color: '#fff',
  	backgroundColor: '#ff0000'
  }
});


export default UserProfile;