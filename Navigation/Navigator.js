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
import { Button } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from '../components/HeaderButton'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createAppContainer } from "react-navigation";

enableScreens();

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator()

// 1st Navigator
const MealsNavigator = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="MealsFavTabNavigator"
            component={MealsFavTabNavigator}
            options={{
            //   title: "Meal Categories",
            //   headerTintColor: "white",
            //   headerStyle: { backgroundColor: Colors.primaryColor },
            headerShown: false
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
      </NavigationContainer>
    );
  };
  
  // 2nd Navigator
  const MealsFavTabNavigator = () =>{
    return (
      <Tab.Navigator>
        <Tab.Screen name='CategoriesScreen' component={CategoriesScreen}/>
        <Tab.Screen name='FavoritesScreen' component={FavoritesScreen} />
      </Tab.Navigator>
    )
  }
  
export default MealsNavigator
