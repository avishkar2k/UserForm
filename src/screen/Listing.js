import React, { useCallback, useState, useEffect } from "react";
import { StyleSheet, FlatList, Button, View, } from "react-native";
import EmptyComponent from "../component/EmptyComponent";
import ListItem from "../component/ListItem";
import { useSelector, useDispatch } from 'react-redux';
import { GET_PAGE_LIST } from '../constants';


const Listing = ({ navigation, getPageList }) => {

    const dispatch = useDispatch()

    const { pageList } = useSelector((state) => state.pageReducer) || {}

    const [dataList, setDataList] = useState([])

    useEffect(() => {
        try {
            const data = require('../assets/stocks.json')
            console.log(data);
            dispatch({
                type: GET_PAGE_LIST,
                payload: data,
            });

            return data || [];
        } catch (error) {
            console.error(error);
        }

    }, [getPageList]);

    useEffect(() => {
        if (pageList) {
            setDataList(pageList);
        }
    }, [pageList])



    const nativageToForm = useCallback(() => {
        navigation.push('Form')
    }, [])


    const renderEmptyContainer = () => <EmptyComponent />

    const renderItem = (item) => <ListItem name={item.name} email={item.price} dob={item.capital} />

    return (
        <View style={styles.container}>
            <FlatList
                data={dataList}
                renderItem={renderItem}
                ListEmptyComponent={renderEmptyContainer}
            />
            <Button title="Add" onPress={nativageToForm} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
    },

})

export default Listing
