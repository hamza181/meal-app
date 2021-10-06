import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { CATEGORIES } from '../data/dummy-data'

const CategoryMealsScreen = (props) => {

    // get param id from Categories Screen
    const catId = props.route.params.categoryId

    // find the data from dummy data of id which we get from param
    // match the id of param to the id of dummy-data
    const selectedCategory = CATEGORIES.find(value => value.id === catId)

    return (
        <View style={styles.screen}>
            <Text>{selectedCategory.title}</Text>
        </View>
    )
}

export default CategoryMealsScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
