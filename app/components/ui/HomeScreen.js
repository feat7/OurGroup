import React, { Component } from 'react'
import {
	View,
	Text,
	Button,
	StyleSheet
} from 'react-native'
import { Actions } from 'react-native-router-flux'

export default class Login extends Component {

	render() {
		return(
	      <View style={styles.container}>
	        <Text style={styles.title}>OurGroup App</Text>
	        <Button onPress={Actions.Login} style={styles.btn} title="Login"
	        	color="#005577"
	        />
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
  btn: {
  	color: '#fff',
  	backgroundColor: '#ff0000'
  }
})