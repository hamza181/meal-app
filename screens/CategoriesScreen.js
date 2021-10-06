import React from 'react'
import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import { CATEGORIES } from '../data/dummy-data'

const CategoriesScreen = (props) => {

    const renderGridItem = (itemData) => {
        return (
            <View><Text>{itemData.item.title}</Text></View>
        )
    }

    return (
        <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={1}/>
    )
}

export default CategoriesScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
