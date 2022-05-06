import React from "react";
import { Text, View, StyleSheet, Image, Pressable } from "react-native";

const PlaceItem = ({place, onSelect}) => {
    return(
        <Pressable onPress={onSelect}>
            <Image source={{uri:place.imageUri}}/>
            <Text>
                {place.title}
            </Text>
            <Text>
                {place.address}
            </Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({

});

export default PlaceItem;