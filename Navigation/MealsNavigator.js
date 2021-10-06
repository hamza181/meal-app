import React from 'react'
import { enableScreens } from "react-native-screens";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import FiltersScreen from "../screens/FiltersScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

enableScreens();

const Stack = createNativeStackNavigator();

const MealsNavigator = () => {
    return (
        <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CategoriesScreen" component={CategoriesScreen}/>
        <Stack.Screen name="CategoryMealsScreen" component={CategoryMealsScreen}/>
        <Stack.Screen name="FavoritesScreen" component={FavoritesScreen}/>
        <Stack.Screen name="FiltersScreen" component={FiltersScreen}/>
        <Stack.Screen name="MealDetailScreen" component={MealDetailScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    )
}

export default MealsNavigator
