import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import PlaceList from "../components/Places/PlaceList";

const AllPlaces = ({route}) => {

    const [loadedPlace, setLoadedPlace] = useState([]);

    const isFocused = useIsFocused();

    useEffect(()=>{

        if(isFocused && route.params) {
            setLoadedPlace(curPlaces => [...curPlaces, route.params.place]);
        }

    },[route,isFocused])

    return(
        <PlaceList places={loadedPlace}/>
    );
};

const styles = StyleSheet.create({

});

export default AllPlaces;