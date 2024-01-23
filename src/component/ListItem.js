import React from "react";
import {Text, View, StyleSheet} from 'react-native'

const ListItem = ({name, email, dob})=>{

    return(
        <View style={styles.container}>
            <Text style={styles.text}>{name}</Text>
            <Text style={styles.text}>{email}</Text>
            <Text style={styles.text}>{dob}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'column'
    },

    text:{
        fontSize:10,
        fontColor:'#0a0a0a'
    }
})

export default ListItem