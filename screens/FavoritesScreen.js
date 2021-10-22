import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import MealsList from "../components/MealsList";
import { MEALS } from "../data/dummy-data";

const FavoritesScreen = (props) => {
  // get states from reducer
  // meals is a name for mealsReducer which is defined in rootReducer
  //   the second meals is defined in initial state of mealReducer
  const favMeals = useSelector((state) => state.meals.favoriteMeals);

  if (favMeals.length === 0 || !favMeals) {
    return (
      <View style={styles.content}>
        <Text>No Favorite Meals Found.</Text>
      </View>
    );
  }

  return <MealsList listData={favMeals} navigation={props.navigation} />;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
