'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  ListView,
  Image
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

					// if(rowData.attachments) console.log(rowData.attachments);

			return (	

				<View>
					<View style={[styles.reset, styles.listItem]} key={rowData.id}>
						{ (rowData.attachments) ? ( <View style={styles.imageContainer}>
							<Image source={{uri: rowData.attachments.data[0].media.image.src}}
       												style={[ { width: rowData.attachments.data[0].media.image.width,
       												height: rowData.attachments.data[0].media.image.height,},
       												{overflow: 'visible'} ]} 
       												resizeMode="contain"/></View> ): null }
						<Text numberOfLines={4}>{rowData.message}</Text>
					</View>
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
	},
	imageContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	image: {
		  position: 'absolute',
		  top: 0,
		  left: 0,
		  bottom: 0,
		  right: 0,

	}
});


export default FeedList;