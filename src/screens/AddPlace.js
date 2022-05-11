import React from "react";
import { Text, View, StyleSheet } from "react-native";
import PlaceForm from "../components/Places/PlaceForm";
import { insertPlace } from "../util/database";

const AddPlace = ({navigation}) => {

    const createPlaceHandler = async(place) => {
        await insertPlace(place);
        navigation.navigate("AllPlaces")
    };

    return(
        <PlaceForm onPlaceSaved={createPlaceHandler}/>
    );
};

const styles = StyleSheet.create({

});

export default AddPlace;