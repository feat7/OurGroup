'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Alert,
  Button
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
			},
			groupData: {

			}
		}

		this._responseInfoCallback = this._responseInfoCallback.bind(this)
		this._responseGroupCallback = this._responseGroupCallback.bind(this)
		this.getUserData = this.getUserData.bind(this)
		this.getGroupData = this.getGroupData.bind(this)

	  	this.getUserData();
	  	this.getGroupData();

	}

	//getters

	getUserData() {

		const infoRequest = new GraphRequest(
			'/me',
		  	{
              parameters: {
                fields: {
                  string: 'email,name,first_name,middle_name,last_name,birthday'
                }
              }
            },
		    this._responseInfoCallback,
		);
		      
		new GraphRequestManager().addRequest(infoRequest).start();
	}

	getGroupData() {
		const infoRequest = new GraphRequest(
			'/586400221495560/feed',
			{
				parameters: {
					fields: {
						string: 'attachments'
					}
				}
			},
			this._responseGroupCallback,
		);

		new GraphRequestManager().addRequest(infoRequest).start();
	}

	//Callbacks

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

	_responseGroupCallback(error: ?Object, result: ?Object) {
	  if (error) {
	    alert('Error fetching data: ' + JSON.stringify(error));
	  } else {
	  	this.setState({
	  		groupData: result
	  	})

		console.log(this.state)
	  	
	    // Alert.alert('Success fetching data: ' + JSON.stringify(result));
	  }
	}

	componentWillMount() {
	}

	componentDidMount() {
	}


	render() {
	
		const goToFeedList = () => Actions.FeedList({state: this.state});
	
		return (
		  <View style={styles.container}>
		    <Text style={styles.title}>{this.state.userData.name}!</Text>
		  	<Text style={styles.text}>Logged In successfully! with id {this.state.userData.id}</Text>
		  	<Button onPress={goToFeedList}
		  	title="React Native" ></Button>
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