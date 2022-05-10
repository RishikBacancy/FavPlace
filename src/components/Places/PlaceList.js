import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Colors } from '../../constants/Colors';
import PlaceItem from './PlaceItem';

const PlaceList = ({ places }) => {
	if (!places || places === 0) {
		return (
			<View style={styles.fallBackContainer}>
				<Text style={styles.fallBackText}>No places added yet - start adding!</Text>
			</View>
		);
	}

	return (
		<FlatList
			style={styles.list}
			data={places}
			keyExtractor={(item) => item.id}
			renderItem={({ item }) => <PlaceItem place={item} />}
		/>
	);
};

const styles = StyleSheet.create({
	fallBackContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	fallBackText: {
		fontSize: 16,
		color: Colors.primary200
	},
	list:{
		margin:24,
	}
});

export default PlaceList;
