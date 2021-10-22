import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading"; // follow official website
import MainNavigator from "./Navigation/Navigator";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import mealsReducer from "./store/reducers/meals";

// create root reducer in which all reducers but in this app thee is only 1 reducers
const rootReducer = combineReducers({
  meals: mealsReducer,
});

// create store for redux
const store = createStore(rootReducer);

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
    // wrap the top most component in the Provider
    <Provider store={store}>
      <MainNavigator />
    </Provider>
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
