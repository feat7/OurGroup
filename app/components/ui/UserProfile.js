'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Alert
} from 'react-native';
import { Actions } from 'react-native-router-flux'

const FBSDK = require('react-native-fbsdk');
const {
  GraphRequest,
  GraphRequestManager,
} = FBSDK;

class UserProfile extends Component {

	constructor() {
	  super();
	
	  this.state = {
	  	userData: {
	  		id: "",
	  		name: ""
	  	}
	  }

		this._responseInfoCallback = this._responseInfoCallback.bind(this)
		this.getUserData = this.getUserData.bind(this)

	  	this.getUserData();
		

	}

	getUserData() {

		const infoRequest = new GraphRequest(
			'/me',
		  	null,
		    this._responseInfoCallback,
		);
		      
		new GraphRequestManager().addRequest(infoRequest).start();
	}

	_responseInfoCallback(error: ?Object, result: ?Object) {
	  if (error) {
	    alert('Error fetching data: ' + JSON.stringify(error));
	  } else {
	  	this.setState({
	  		userData: result
	  	})
	    // Alert.alert('Success fetching data: ' + JSON.stringify(result));
	  }
	}

	componentWillMount() {
	}

	render() {
	
		return (
		  <View style={styles.container}>
		    <Text style={styles.title}>{this.state.userData.name}!</Text>
		  	<Text style={styles.text}>Logged In successfully! with id {this.state.userData.id}</Text>
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