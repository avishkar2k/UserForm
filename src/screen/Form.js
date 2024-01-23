import React, { useEffect, useState } from "react";
import { View, TextInput, Button, StyleSheet } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import {  createUser, editUser } from "../feature/userSlice";
import { CREATE_USER, EDIT_USER } from '../constants/index'
import { useRoute } from '@react-navigation/native';



const Form = ({ navigation }) => {

    const dispatch = useDispatch()

    const position = useSelector((state) => state.users.position)
    const userData = useSelector((state)=> state.users.users)
    const { edit } = useRoute().params || false; 

    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [dob, setDob] = useState('')


    useEffect(()=>{
        if(edit){
            const user = userData[position]
            setEmail(user.email)
            setPhone(user.phone)
            setDob(user.dob)
        }
    }, [])

    const createNewUser = () => {
        const user = {
            email: email,
            phone: phone,
            dob: dob
        }

        console.log(user)
        dispatch(createUser({user: user}))
    }

    const editExistingUser = () => {
        dispatch(editUser({
            position: position,
            user: {
                email: email,
                phone: phone,
                dob: dob
            }
        }))
    }

    const saveFormAndGoBack = () => {
        //data to be saved
        if(edit){
            editExistingUser()
        } else {
            createNewUser()
        }

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