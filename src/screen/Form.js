import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import {  createUser, editUser } from "../feature/userSlice";
import { useRoute } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { commonDateToString, getDisplayStringDob, getDateFromString } from "../untils/dateFormatting";

const phoneNumberRegex = /^\+?[0-9]{6,14}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


const Form = ({ navigation }) => {

    const iOSPlatform = Platform.OS === 'ios'

    const dispatch = useDispatch()

    const [isValidEmail, setValidEmail] = useState(true);
    const [isValidPhone, setValidPhone] = useState(true);

    const position = useSelector((state) => state.users.position)
    const userData = useSelector((state)=> state.users.users)
    const { edit } = useRoute().params || false; 

    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [dob, setDob] = useState(new Date())
    const displaymode = 'date' //display mode for the date picker

    const [shouldShowCalendarOnAndroid, setShouldShowAndroidCalendar] = useState(false)

    const changeSelectedDate = (event, selectedDate) => {
        if(!iOSPlatform && shouldShowCalendarOnAndroid)setShouldShowAndroidCalendar(false) //hide calendar on android
        console.log(selectedDate);
        if (selectedDate instanceof Date) {
            setDob(selectedDate)
        } 
     };

    useEffect(()=>{
        if(edit){
            const user = userData[position]
            setEmail(user.email)
            setPhone(user.phone)
            setDob(getDateFromString(user.dob))
        }
    }, [])

    const createNewUser = () => {
        const user = {
            email: email,
            phone: phone,
            dob: commonDateToString(dob)
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
                dob: commonDateToString(dob)
            }
        }))
    }

    const validateEmail = () => {
        const isValid = emailRegex.test(email);
        setValidEmail(isValid);
      };


    const validatePhone = () => {
        const isValid = phoneNumberRegex.test(phone);
        setValidPhone(isValid);
      };
      
    const saveFormAndGoBack = () => {
        if (isValidEmail && isValidPhone) {
            //data to be saved
            if (edit) {
                editExistingUser()
            } else {
                createNewUser()
            }

            //go back   
            navigation.goBack()
        }
    }


    const toggleAndroidCalendar = ()=>{
        setShouldShowAndroidCalendar(!shouldShowCalendarOnAndroid)
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
                onBlur={validateEmail}
            />        
            {!isValidEmail && (
                <Text style={styles.errorMessage}>Please enter a valid email address</Text>
            )}
            <TextInput
                style={styles.input}
                placeholder="Phone"
                keyboardType="phone-pad"
                value={phone}
                onChangeText={setPhone}
                onBlur={validatePhone}
            />
            {!isValidPhone && (
                <Text style={styles.errorMessage}>Please enter a valid phone number</Text>
            )}

            {iOSPlatform ? (<View style={styles.row}>
                <Text style={styles.labelText}>Select Date of Birth:</Text>
                <DateTimePicker
                    testID="dateTimePicker"
                    value={dob}
                    mode={displaymode}
                    is24Hour={true}
                    display="default"
                    onChange={changeSelectedDate}
                />
            </View>) : (<View>

                <TouchableOpacity onPress={toggleAndroidCalendar}>
                    <Text style={[styles.input, {padding:10}]}>{getDisplayStringDob(dob)}</Text>
                </TouchableOpacity>

                {shouldShowCalendarOnAndroid &&  <DateTimePicker
                    testID="dateTimePicker"
                    value={dob}
                    mode={displaymode}
                    is24Hour={true}
                    display="default"
                    onChange={changeSelectedDate}
                />}

            </View>)}
           
        <View style={styles.cta} > 
            <Button title="Submit" onPress={saveFormAndGoBack} />
        </View>
        </View>
    )
}

const styles = StyleSheet.create({

    row:{
        flexDirection:'row', 
        justifyContent:'space-evenly',
        alignItems:'center'
    },

    container: {
        flex:1,
        padding: 15,
    },

    input: {
        borderRadius: 5,
        borderWidth: 1,
        paddingHorizontal:10,
        margin:15,
    },

    errorMessage:{
         color: 'red', 
         marginHorizontal:15, 
         marginBottom:15    
    },

    labelText:{fontSize:14, fontWeight:'bold'},

    cta:{margin:20, width:300, backgroundColor:'white', borderRadius:20,},
    
})

export default Form