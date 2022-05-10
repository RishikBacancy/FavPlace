import React from "react";
import { Text, View, StyleSheet } from "react-native";
import PlaceForm from "../components/Places/PlaceForm";

const AddPlace = ({navigation}) => {

    const createPlaceHandler = (place) => {
        navigation.navigate("AllPlaces",{
            place: place
        })
    };

    return(
        <PlaceForm onPlaceSaved={createPlaceHandler}/>
    );
};

const styles = StyleSheet.create({

});

export default AddPlace;