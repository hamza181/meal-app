import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { enableScreens } from "react-native-screens";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";  // follow official website
import CategoriesScreen from "./screens/CategoriesScreen";
import CategoryMealsScreen from "./screens/CategoryMealsScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import FiltersScreen from "./screens/FiltersScreen";
import MealDetailScreen from "./screens/MealDetailScreen";

enableScreens();

const Stack = createNativeStackNavigator();

// for fetching fonts

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};
// for fetching fonts

export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);

  // App loading while fetching fonts

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setFontLoaded(true);
        }}
        onError={(e) => {
          console.log(e);
        }}
      />
    );
  }
  // App loading while fetching fonts

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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
