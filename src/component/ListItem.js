import React from "react";
import {Text, View, StyleSheet} from 'react-native'

const ListItem = ({name, email, dob})=>{

    return(
        <View>
            <Text>{name}</Text>
            <Text>{email}</Text>
            <Text>{dob}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default ListItem