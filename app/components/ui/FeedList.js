'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  ListView
} from 'react-native';

class FeedList extends Component {

	constructor(props) {
	  super(props);

	  this.ds = new ListView.DataSource({
	  	rowHasChanged: (r1, r2) => r1 !== r2
	  })
	
	  this.state = {
	  	dataSource: this.ds.cloneWithRows(this.props.state.groupData.data),
	  }
	}

	render() {

		const renderRowData = (rowData) => {

			return (							
						<View>
						
							{(rowData.attachments) ? rowData.attachments.data.map( (item, i) => <View style={styles.listItem} key={i}>
								<Text>{JSON.stringify(item.description)}</Text>
								</View> ) : null}
						</View>	
			);
		};

	  	console.log("Debug",this.state)


		return (
		  <View style={styles.container}>
		  	<ListView
		  	dataSource={this.state.dataSource}
		  	renderRow={(rowData) => renderRowData(rowData)}
		  	/>
		  </View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#ffffff',
		flex: 1,
	},
	listItem: {
		padding: 8,
	}
});


export default FeedList;