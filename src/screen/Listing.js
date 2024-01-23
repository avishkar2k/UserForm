import React, { useCallback, useState, useEffect } from "react";
import { StyleSheet, FlatList, Button, View, useWindowDimensions } from "react-native";
import EmptyComponent from "../component/EmptyComponent";
import ListItem from "../component/ListItem";
import { useSelector } from 'react-redux'

const Listing = ({ navigation }) => {
    const layout = useWindowDimensions()
    const userData = useSelector((state) => state.users.users)
    const [dataList, setDataList] = useState(userData)

    useEffect(()=>{
        setDataList(userData)
        printData()
    }, [userData])

    const printData = ()=> console.log("listing"+JSON.stringify(dataList))

    const nativageToForm = useCallback(() => {
        navigation.navigate('Form')
    }, [])

    const renderEmptyContainer = () => <EmptyComponent />

    const renderItem = ({item, index}) => <ListItem item={item} position={index}/>

    return (
        <View style={styles.container}>
            <FlatList
                data={dataList}
                renderItem={renderItem}
                ListEmptyComponent={renderEmptyContainer}
            />
            <View style={{backgroundColor:'white', width:layout.width}} >
                <Button title="Add" onPress={nativageToForm}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'center',
    },

})

export default Listing
