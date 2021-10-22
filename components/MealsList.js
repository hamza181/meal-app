import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import MealItem from "./MealItem";

const MealsList = (props) => {
  const renderMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordabilty={itemData.item.affordabilty}
        onSelectMeal={() => {
          props.navigation.navigate("MealDetail", {
            // these are params which we can also set by setParam() function
            mealId: itemData.item.id,
            // we are giving title with setParams in MealDetailScreen
            // mealTitle: itemData.item.title
          });
        }}
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

export default MealsList;

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
