import React, { useCallback, useEffect, useState } from "react";
import { Button, LogBox, StyleSheet, Switch, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import Colors from "../constants/Colors";
import { setFilters } from "../store/actions/meals";

const FilterSwitch = (props) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        value={props.state}
        // trackColor={{ true: Colors.accentColor }}
        // thumbColor={Colors.accentColor}
        onValueChange={props.onChange}
      />
    </View>
  );
};

const FiltersScreen = (props) => {
  // ignore all warning msg in this screen
  // this warning is due to passing function in setParams
  LogBox.ignoreLogs([
    "Non-serializable values were found in the navigation state",
  ]);

  const dispatch = useDispatch();

  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
    };
    console.log(appliedFilters);
    dispatch(setFilters(appliedFilters));
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian, dispatch]);

  // setParams and setOptions should only be called in useEffect
  useEffect(() => {
    // set params here using props.navigation and call in navigator using props.route
    props.navigation.setParams({ save: saveFilters });
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch
        label="Gluten-free"
        state={isGlutenFree}
        //   the below function is used to toggle switch true and false
        onChange={(newValue) => setIsGlutenFree(newValue)}
      />
      <FilterSwitch
        label="Lactose-free"
        state={isLactoseFree}
        onChange={(newValue) => setIsLactoseFree(newValue)}
      />
      <FilterSwitch
        label="Vegan"
        state={isVegan}
        onChange={(newValue) => setIsVegan(newValue)}
      />
      <FilterSwitch
        label="Vegetarian"
        state={isVegetarian}
        onChange={(newValue) => setIsVegetarian(newValue)}
      />
    </View>
  );
};

export default FiltersScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    margin: 20,
    textAlign: "center",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 15,
  },
});
