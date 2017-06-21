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
					{
						// rowData.map( d => (
						<View>
							<Text>{rowData.id}</Text>
							{(rowData.attachments) ? rowData.attachments.data.map(d => <Text>{d.description}</Text>) : null}
							<Text>---------------------------</Text>
						</View>
						// ))
					}
				</View>
			);
		};

		console.log("FeedList state",this.state)
		return (
		  <View style={styles.container}>
		  	<Text>Feed list</Text>
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
		backgroundColor: 'green',
		flex: 1,
		marginTop: 60
	}
});


export default FeedList;