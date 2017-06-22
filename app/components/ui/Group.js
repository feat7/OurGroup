'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import FeedList from './FeedList'

class Group extends Component {

	constructor(props) {
	  super(props);
	}

	render() {

		return (
			<View style={styles.container}>
				<FeedList state={this.props.state}/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		margin: 128
	}
});


export default Group;