import React, { useCallback, useState } from "react";
import { StyleSheet, FlatList, Button, View, } from "react-native";
import EmptyComponent from "../component/EmptyComponent";
import ListItem from "../component/ListItem";


const Listing = ({ navigation }) => {

    const [dataList, setDataList] = useState([])

    const nativageToForm = useCallback(() => {
        navigation.push('Form')
    }, [])


    const renderEmptyContainer = () => <EmptyComponent />

    const renderItem = (item) => <ListItem name={item.name} email={item.email} dob={item.dob} />

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