import React, { useState } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { launchCamera } from 'react-native-image-picker';
import { Colors } from '../../constants/Colors';
import OutlineButton from '../UI/OutlineButton';

const ImagePicker = () => {

    const [ imageSelected, setImageSelected ] = useState();

	const cameraHandler = async () => {
		const result = await launchCamera({
			quality: 0.5,
            maxWidth:1920,
            maxHeight:1080
		});

        const uri = result.assets.map(({uri})=>uri)

        setImageSelected(uri[0]);
	};


    let imagePreview = <Text>Image not picked yet - please select image!</Text>;

    if(imageSelected) {
        imagePreview = <Image style={styles.image} source={{uri:imageSelected}}/>;
    }

	return (
		<View>
			<View style={styles.imagePreview}>
                {imagePreview}
            </View>
			<OutlineButton onSelect={cameraHandler} icon="camera">Take Image</OutlineButton>
		</View>
	);
};

const styles = StyleSheet.create({
    imagePreview:{
        width:"100%",
        height:200,
        marginVertical:8,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: Colors.primary100,
        borderRadius:4,
    },
    image: {
        height:"100%",
        width:"100%",
        borderRadius:4,
    }
});

export default ImagePicker;
