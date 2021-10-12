import React from "react";
import { enableScreens } from "react-native-screens";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import FiltersScreen from "../screens/FiltersScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import Colors from "../constants/Colors";

enableScreens();

const Stack = createNativeStackNavigator();

const MealsNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="CategoriesScreen"
          component={CategoriesScreen}
          options={{
            title: "Meal Categories",
            headerTintColor: "white",
            headerStyle: { backgroundColor: Colors.primaryColor },
          }}
        />
        <Stack.Screen
          name="CategoryMealsScreen"
          component={CategoryMealsScreen}
          options={(props)=>({
            headerTitle: props.route.params.name,
            stackPresentation: 'modal'  // transition when screen changes on ios
          })}
        />
        <Stack.Screen name="FavoritesScreen" component={FavoritesScreen} />
        <Stack.Screen name="FiltersScreen" component={FiltersScreen} />
        <Stack.Screen name="MealDetail" component={MealDetailScreen} options={(props)=>({
          headerTitle: props.route.params.name,
          // headerTitle: 'asdfsa',
        })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MealsNavigator;
