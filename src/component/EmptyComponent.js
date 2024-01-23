import React from "react";
import {StyleSheet, View, Text} from 'react-native'

const EmptyComponent = ()=>{

    return (
        <View style={styles.container}>
            <Text style={styles.text}>No Record Found</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },
    
    text:{
        flex:1,
        fontSize:15,
        fontWeight:'bold',
        alignSelf:'center'
    }
})

export default EmptyComponent