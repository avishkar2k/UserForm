import React, {useCallback, useState} from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity, Modal, useWindowDimensions } from 'react-native'
import { useDispatch } from 'react-redux'
import { deleteUser, crudUserPosition } from "../feature/userSlice";
import { useNavigation } from "@react-navigation/native";


const ListItem = ({ item, position }) => {
    const layout = useWindowDimensions()
    const navigation = useNavigation()

    const [isModalVisible, setModalVisible] = useState(false);


    console.log("item"+JSON.stringify(item))

    const dispatch = useDispatch()

    const deleteExistingUser = (position) => {
        dispatch(deleteUser({position: position}))
        toggleModal()
    }

    const setUserCrudPosition = (position) =>{
        dispatch(crudUserPosition({position: position}))
    }


    const nativageToForm = useCallback(() => {
        navigation.navigate('Form', {edit:true})
    }, [])

    const gotoEditUserDetails = ()=>{
        setUserCrudPosition(position)
        nativageToForm()
        toggleModal()
    }

    const getDisplayDob= (dob) =>{
        console.log(dob);
        return new Date(dob).toLocaleDateString('en-US')
    }


  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

    return (
        <View style={[styles.row, {width:layout.width*0.9, overflow:false}]}>
            <TouchableOpacity onPress={gotoEditUserDetails}>
                <View style={styles.container}>
                    <Text style={styles.text}>Email: {item.email}</Text>
                    <Text style={styles.text}>Phone: {item.phone}</Text>
                    <Text style={styles.text}>Date of Birth: {getDisplayDob(item.dob)}</Text>
                </View>
            </TouchableOpacity>
            
           {/*  <TouchableOpacity onPress={toggleModal}>
                <Image style={styles.ctaIcon} source={require('../assets/ic_more.png')} />
            </TouchableOpacity> */}
            <TouchableOpacity onPress={() => deleteExistingUser(position)}>
                <Image style={styles.ctaIcon} source={require('../assets/ic_delete.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={gotoEditUserDetails}>
                <Image style={styles.ctaIcon} source={require('../assets/ic_edit.png')} />
            </TouchableOpacity>
        
           

                    {/* <View>
                <Modal
                    transparent={true}
                    visible={toggleModal}
                    animationType="slide"
                    onRequestClose={toggleModal}>

                    <View style={styles.modalContainer}>

                        <TouchableOpacity onPress={gotoEditUserDetails}>
                            <Text style={[styles.text, { padding: 5 }]}>Edit</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => deleteExistingUser(position)}>
                            <Text style={[styles.text, { padding: 5 }]}>Delete</Text>
                        </TouchableOpacity>

                    </View>
                </Modal> 
            </View>*/}

        </View>

    )
}

const styles = StyleSheet.create({

    row: {
        flexDirection: 'row',
        marginVertical:8,
        marginHorizontal:15,
        padding:15,
        backgroundColor:'white',
        borderRadius:10,
        alignItems:'flex-start',
        justifyContent:'space-between'
    },

    container: {
        flex:1,
        flexDirection: 'column'
    },

    text: {
        fontSize: 10,
        color: '#0a0a0a'
    },

    ctaIcon:{
        alignContent:'space-between',
        height:14,
        width:14
    },

    modalContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(0,0,0,0.5)', 
      },
})

export default ListItem