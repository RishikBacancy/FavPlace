import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const IconButton = ({ icon, color, size, onSelect }) => {
	return (
		<Pressable onPress={onSelect} style={({pressed})=> [styles.button, pressed && styles.pressed]}>
			<Ionicons name={icon} size={size} color={color} />
		</Pressable>
	);
};

const styles = StyleSheet.create({
	button: {
		padding: 8,
		justifyContent: 'center',
		alignItems: 'center'
	},
	pressed: {
		opacity: 0.75
	}
});

export default IconButton;
