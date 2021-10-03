import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const CategoriesScreen = ({navigation}) => {
    return (
        <View style={styles.screen}>
            <Text>CategoriesScreen</Text>
            <Button title='Favorite Screen' onPress={()=>{navigation.navigate('FavoritesScreen')}}/>
        </View>
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
