import React, { useState } from "react";
import { Text, View, StyleSheet, ScrollView, TextInput } from "react-native";
import { Colors } from "../../constants/Colors";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";

const PlaceForm = () => {

    const [ title, setTitle ] = useState("");

    const titleInputHandler = (enteredTitle) => {
        setTitle(enteredTitle);
    }

    return(
        <ScrollView style={styles.formContainer}>
            <View>
                <Text style={styles.label}>Title</Text>
                <TextInput style={styles.input} onChange={titleInputHandler} value={title} />
            </View>
            <ImagePicker/>
            <LocationPicker/>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    formContainer:{
        flex:1,
        padding:24,
    },
    label:{
        marginBottom:4,
        color: Colors.primary500,
        fontWeight:"bold",
    },
    input:{
        backgroundColor: Colors.primary100,
        borderBottomColor: Colors.primary700,
        borderBottomWidth: 2,
        fontSize:16,
        marginVertical:8,
        paddingVertical:8,
        paddingHorizontal:4,
    }
});

export default PlaceForm;