import React, { Component } from 'react'
import {
	View,
	Text,
	Button,
	StyleSheet
} from 'react-native'
import { Actions } from 'react-native-router-flux'
import LoginBtn from './LoginBtn'
import { AccessToken } from 'react-native-fbsdk'

export default class HomeScreen extends Component {

  componentDidMount() {
    AccessToken.getCurrentAccessToken().then(
            (data) => { if(data) Actions.UserProfile(); } //Refresh it every time
        );
  }

	render() {
		return(
	      <View style={styles.container}>
	        <Text style={styles.title}>OurGroup App</Text>
          <Text style={styles.text}>Manage Facebook Groups...</Text>
	        <LoginBtn />
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
})