import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";  // follow official website
import MealsFavTabNavigator from "./Navigation/Navigator";
import MainNavigator from "./Navigation/Navigator";

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
    <MainNavigator />
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
