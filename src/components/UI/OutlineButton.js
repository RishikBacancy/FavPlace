import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Colors } from "../../constants/Colors";

const OutlineButton = ({onSelect, icon, children }) => {
    return(
        <Pressable onPress={onSelect} style={({pressed}) => [styles.button, pressed && styles.pressed]}>
            <Ionicons style={styles.icon} name={icon} size={18} color={Colors.primary500}/>
            <Text style={styles.text}>{children}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button:{
        paddingHorizontal:12,
        margin:4,
        paddingVertical:6,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        borderWidth:1,
        borderColor:Colors.primary500,
    },
    pressed:{
        opacity:0.75,
    },
    icon:{
        marginRight: 6,
    },
    text:{
        color: Colors.primary500,
    },
});

export default OutlineButton;