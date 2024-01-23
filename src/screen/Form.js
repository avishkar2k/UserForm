import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from 'react-native'

const Form = ({navigation}) => {

    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [dob, setDob] = useState('')

    const saveFormAndGoBack = ()=>{
        //data to be saved

        //go back
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
            />        
            <TextInput
                style={styles.input}
                placeholder="Phone"
                keyboardType="phone-pad"
                value={phone}
                onChangeText={setPhone}
            />
            <TextInput
                style={styles.input}
                placeholder="Date of Birth"
                value={dob}
                onChangeText={setDob}
            />
            <Button title="Submit" onPress={saveFormAndGoBack} />
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex:1,
        padding: 15,
    },

    input: {
        height: "8%",
        borderRadius: 5,
        borderWidth: 1,
        paddingHorizontal:8,
        margin:15,
    },
    
})

export default Form