
import { StyleSheet, Button, Text, TextInput, View } from "react-native"
import React from 'react'

export default function GoalList(){

    return (
        <View style={styles.appContainer}>

            <View style={styles.inputContainer} >
                <TextInput style={styles.textInput} placeholder="Your course goal"/>
                <Button title="Add goal"/>
            </View>

            <View>
                <Text>List of goals</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    appContainer: {
        padding: 50,

    },

    inputContainer: {
        flexDirection: 'row',
        justifyContent:'space-between'
    },

    textInput: {
        width:'80%',
        borderWidth:1,
        borderColor:'#cccccc',
        marginRight:8,
        padding:8

    }

})