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

			// return null

			return (							
						<View style={styles.reset}>
							{(rowData.attachments) ? rowData.attachments.data.map( (item, i) => 
								{
									if(item.description) {

										return (<View style={[styles.reset, styles.listItem]} key={i}>
										<Text>{JSON.stringify(item.description)}</Text>
										</View>	)
									}
									else return null;
										
								}
								 
								) : null
							}
						</View>	
			);
		};

	  	console.log("Debug",this.state)


		return (
		  <View style={styles.container}>
		  	<ListView
		  	dataSource={this.state.dataSource}
		  	renderRow={(rowData) => renderRowData(rowData)}
		  	renderSectionHeader={() => <Text style={styles.listTitle}>React Native Community</Text>}
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
		borderBottomWidth: 0.5,
		borderColor: '#d6d7da',
	},
	listTitle: {
		backgroundColor: '#2ecc71',
		color: '#fff',
		padding: 10,
	},
	reset: {
		padding: 0,
		margin: 0
	}
});


export default FeedList;