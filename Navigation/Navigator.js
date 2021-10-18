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
import { Button, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createAppContainer } from "react-navigation";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

enableScreens();

const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();
const Tab =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator();

// 1st Navigator
const MealsNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CategoriesScreen"
        component={CategoriesScreen}
        options={{
          title: "Meal Categories",
          headerTintColor: "white",
          headerStyle: { backgroundColor: Colors.primaryColor },
          // headerShown: false,  for ios
        }}
      />
      <Stack.Screen
        name="CategoryMealsScreen"
        component={CategoryMealsScreen}
        options={(props) => ({
          headerTitle: props.route.params.name,
          stackPresentation: "modal", // transition when screen changes on ios
        })}
      />
      <Stack.Screen name="FavoritesScreen" component={FavoritesScreen} />
      <Stack.Screen name="FiltersScreen" component={FiltersScreen} />
      <Stack.Screen
        name="MealDetail"
        component={MealDetailScreen}
        options={(props) => ({
          headerTitle: props.route.params.name,
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Favorite"
                iconName="ios-star"
                onPress={() => {
                  alert("asdfasdf");
                }}
              />
            </HeaderButtons>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

// 2nd Navigator

const FavoriteNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FavoritesScreen"
        component={FavoritesScreen}
        options={{
          headerTitle: "Favorite Screen",
          headerTintColor: "white",
          headerStyle: { backgroundColor: Colors.accentColor },
        }}
      />
      <Stack.Screen name="MealDetail" component={MealDetailScreen} />
    </Stack.Navigator>
  );
};

// 3rd Navigator
const MealsFavTabNavigator = () => {
  return (
    // there should be only 1 navigation container in whole app
    <NavigationContainer>
      <Tab.Navigator
        // this apply to all tabs
        // for ios that is for createBottomTabNavigator()
        screenOptions={{ tabBarActiveTintColor: Colors.accentColor }}
        // for android that is for createMaterialBottomTabNavigator()
        activeColor="white"
        shifting={true}
      >
        <Tab.Screen
          name="MealsNavigator"
          component={MealsNavigator}
          // this apply to only this tab
          // options={{ tabBarActiveTintColor: Colors.accentColor }}
          options={{
            tabBarIcon: (tabInfo) => {
              return <Ionicons name="ios-restaurant" size={25} color="white" />;
            },
            tabBarColor: Colors.accentColor,
          }}
        />
        <Tab.Screen
          name="FavoriteNavigator"
          component={FavoriteNavigator}
          // this apply to only this tab
          // options={{ tabBarActiveTintColor: Colors.accentColor }}
          options={{
            tabBarIcon: (tabInfo) => {
              return <Ionicons name="ios-star" size={25} color="white" />;
            },
            tabBarColor: Colors.primaryColor,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MealsFavTabNavigator;
