import React, { useCallback, useState, useEffect } from "react";
import { StyleSheet, FlatList, Button, View, } from "react-native";
import EmptyComponent from "../component/EmptyComponent";
import ListItem from "../component/ListItem";
import {useSelector, useDispatch} from 'react-redux';
import {getPageList} from '../actions/pageList';



const Listing = ({ navigation }) => {
    const {pageList} = useSelector(state => state.pageReducer);
    const dispatch = useDispatch();
    const fetchData = () => dispatch(getPageList());
    const [dataList, setDataList] = useState([])
    
    useEffect(() => {
        fetchData();
      }, []);

    useEffect(()=>{
        setDataList(pageList)
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