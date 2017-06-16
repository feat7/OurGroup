import React, { Component } from 'react'
import {
	View,
	Text,
	StyleSheet
} from 'react-native'

export default class Login extends Component {

	render() {
		return(
	      <View style={styles.container}>
	        <Text style={styles.title}>OurGroup App</Text>
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
  }
})