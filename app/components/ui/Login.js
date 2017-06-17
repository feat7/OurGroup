import React, { Component } from 'react'
import {
	View,
	Text,
	StyleSheet
} from 'react-native'

const FBSDK = require('react-native-fbsdk');
const {
  GraphRequest,
  GraphRequestManager,
} = FBSDK;

export default class Login extends Component {

	_responseInfoCallback(error: ?Object, result: ?Object) {
	  if (error) {
	    alert('Error fetching data: ' + JSON.stringify(error));
	  } else {
	    alert('Success fetching data: ' + JSON.stringify(result));
	  }
	}

	componentDidMount() {
		const infoRequest = new GraphRequest(
		  '/1896202937282833/posts?fields=attachments&access_token=EAAaRRZCZBtKYMBADIkcH7XolJcfRqq1q4Gn7RPHZAESWCsV0iDjxfKrNjkENZCtHEZCygZBg8ZBytvnfbQfFkDq2AMrZBMoHUAGeru42C97DXqJUP5CyZBPk6p0c0k2gtZAAYXWVdD92GkfObcf3FoNeQTeeZAhBY7yZCk1YlbbTwtyIyvEHmhBXtbZAyoSOZAVhkTyesTZAzI0GNGmZCwZDZD',
		  null
		  ,
		  this._responseInfoCallback,
		);
		      
		new GraphRequestManager().addRequest(infoRequest).start();
	}

	render() {
		return(
			<View>
				<Text>
					Welcome To Login Screen!
				</Text>
			</View>

		);
	}

}