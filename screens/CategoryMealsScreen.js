import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import MealItem from "../components/MealItem";
import MealsList from "../components/MealsList";
import { CATEGORIES, MEALS } from "../data/dummy-data";

const CategoryMealsScreen = (props) => {
  // get states from reducer
  // meals is a name for mealsReducer which is defined in rootReducer
  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  // get param id from Categories Screen
  const catId = props.route.params.categoryId;

  // find the data from dummy data of id which we get from param
  // match the id of param to the id of dummy-data
  // const selectedCategory = CATEGORIES.find(value => value.id === catId)

  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  if (displayedMeals.length === 0) {
    return (
      <View style={styles.content}>
        <Text>
          No meals found ! To see data uncheck filters from side drawer
        </Text>
      </View>
    );
  }

  return <MealsList listData={displayedMeals} navigation={props.navigation} />;
};

export default CategoryMealsScreen;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
