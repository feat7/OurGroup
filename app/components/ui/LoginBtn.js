import React, { Component } from 'react'
import {
	Text,
	View,
	Button
} from 'react-native'

const FBSDK = require('react-native-fbsdk');
const {
  LoginButton
} = FBSDK;

import { Actions } from 'react-native-router-flux'

export default class LoginBtn extends Component {
	render() {
    return (
      <View>
        <LoginButton
          publishPermissions={["publish_actions"]}
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert("Login failed with error: " + result.error);
              } else if (result.isCancelled) {
                alert("Login was cancelled");
              } else {
				Actions.UserProfile()

                alert("Login was successful with permissions: " + result.grantedPermissions)
              }
            }
          }
          onLogoutFinished={() => alert("User logged out")}/>
      </View>
    );
  }
}