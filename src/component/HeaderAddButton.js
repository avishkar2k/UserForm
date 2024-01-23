import React from "react";
import {View, TouchableOpacity, StyleSheet} from 'react-native'

const HeaderAddButton = ({callback})=>{
    return (
        <TouchableOpacity onPress={callback}>
            <View>
                <View /> 
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

})

export default HeaderAddButton