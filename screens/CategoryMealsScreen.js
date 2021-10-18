import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import MealItem from "../components/MealItem";
import MealsList from "../components/MealsList";
import { CATEGORIES, MEALS } from "../data/dummy-data";

const CategoryMealsScreen = (props) => {
  

  // get param id from Categories Screen
  const catId = props.route.params.categoryId;

  // find the data from dummy data of id which we get from param
  // match the id of param to the id of dummy-data
  // const selectedCategory = CATEGORIES.find(value => value.id === catId)

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return (
    <MealsList listData={displayedMeals} navigation={props.navigation} />
  );
};

export default CategoryMealsScreen;

const styles = StyleSheet.create({
  
});
