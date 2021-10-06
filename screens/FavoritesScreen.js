import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const FavoritesScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>FavoritesScreen</Text>
            <Button title='Categories Screen' onPress={()=>{props.navigation.navigate('CategoriesScreen')}}/>
        </View>
    )
}

export default FavoritesScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
