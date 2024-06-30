import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const MeuButton = (props) => {

    return(

        <TouchableOpacity
        style={ styles.button }
        onPress={ props.callback }>

                <Text style={ styles.text}>{ props.value }</Text>
            
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#e8833a',
        padding: 12,
        width: 320,
        borderRadius: 4,
        marginTop: 5
    },
    text: {
        fontSize: 18,
        color: '#fff',
    }
})

export default MeuButton