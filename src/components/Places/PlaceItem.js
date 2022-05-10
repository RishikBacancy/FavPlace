import React from 'react';
import { Text, View, StyleSheet, Image, Pressable } from 'react-native';
import { Colors } from '../../constants/Colors';

const PlaceItem = ({ place, onSelect }) => {

	return (
		<Pressable style={({ pressed }) => [ styles.item, pressed && styles.pressed]} onPress={onSelect}>
			<Image style={styles.image} source={{ uri: place.imageUri }} />
			<View style={styles.info}>
				<Text style={styles.title}>{place.title}</Text>
				<Text style={styles.text}>{place.location.lat}</Text>
				<Text style={styles.text}>{place.location.lng}</Text>
			</View>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	item: {
		flexDirection: 'row',
		alignItems: 'flex-start',
		borderRadius: 6,
		marginVertical: 12,
		backgroundColor: Colors.primary500,
		elevation: 2,
		shadowColor: 'black',
		shadowOffset: { width: 1, height: 1 },
		shadowOpacity: 0.15,
		shadowRadius: 2
	},
	pressed: {
		opacity: 0.75
	},
	image: {
		flex: 1,
        height:100,
        borderBottomLeftRadius:4,
        borderTopLeftRadius:4,
	},
	info: {
		flex:2,
		padding: 12
	},
	text: {
		fontSize: 12,
		color: Colors.gray700
	},
	title: {
		fontWeight: 'bold',
		fontSize: 18,
		color: Colors.gray700
	}
});

export default PlaceItem;
