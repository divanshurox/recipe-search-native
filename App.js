import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Colors from "./constants/Colors";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

//Importing Screens
import CategoriesScreen from "./screens/CategoriesScreen";
import CategoryMealsScreen from "./screens/CategoryMealsScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import FavouriteScreen from "./screens/FavouritesScreen";
import FilterScreen from "./screens/FilterScreen";

import { enableScreens } from "react-native-screens";
import { Item } from "react-navigation-header-buttons";

enableScreens();

const MealsStack = createStackNavigator();
const FavouritesStack = createStackNavigator();
const FilterStack = createStackNavigator();

const Tabs = createMaterialBottomTabNavigator();

const Drawer = createDrawerNavigator();

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/Fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/Fonts/OpenSans-Bold.ttf"),
  });
};

// Meals Screen Stack
const MealsStackScreen = () => {
  return (
    <MealsStack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary },
        headerTintColor: "white",
      }}
    >
      <MealsStack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "Meal Categories",
        }}
      />
      <MealsStack.Screen name="CategoryMeals" component={CategoryMealsScreen} />
      <MealsStack.Screen
        name="MealDetails"
        component={MealDetailsScreen}
        options={{
          title: "Recipe",
        }}
      />
    </MealsStack.Navigator>
  );
};

//Create a Favourite Screen Stack
const FavouriteStackScreen = () => {
  return (
    <FavouritesStack.Navigator
      initialRouteName="Favourites"
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primary,
        },
        headerTintColor: "white",
      }}
    >
      <FavouritesStack.Screen name="Favourites" component={FavouriteScreen} />
      <FavouritesStack.Screen
        name="MealDetails"
        component={MealDetailsScreen}
        options={{ title: "Recipe" }}
      />
    </FavouritesStack.Navigator>
  );
};

const FilterStackScreen = () => {
  return (
    <FilterStack.Navigator
      initialRouteName="Filter"
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primary,
        },
        headerTintColor: "white",
      }}
    >
      <FilterStack.Screen name="Filter Recipe" component={FilterScreen} />
    </FilterStack.Navigator>
  );
};

// Create a Tab Navigator
const TabNavigation = () => {
  return (
    <Tabs.Navigator shifting={true}>
      <Tabs.Screen
        name="Meals"
        component={MealsStackScreen}
        options={{
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons name="ios-restaurant" size={24} color={tabInfo.color} />
            );
          },
          tabBarColor: Colors.primary,
        }}
      />
      <Tabs.Screen
        name="Favourites"
        component={FavouriteStackScreen}
        options={{
          tabBarIcon: (tabInfo) => (
            <MaterialIcons name="favorite" size={24} color={tabInfo.color} />
          ),
          tabBarColor: "tomato",
        }}
      />
    </Tabs.Navigator>
  );
};

export default function App(props) {
  const [load, setLoad] = useState(false);
  if (!load) {
    return (
      <AppLoading startAsync={fetchFonts} onFinish={() => setLoad(true)} />
    );
  }

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerType="slide"
        drawerContentOptions={{ activeTintColor: "orange" }}
      >
        <Drawer.Screen
          name="MealsFav"
          component={TabNavigation}
          options={{ drawerLabel: "Meals" }}
        />
        <Drawer.Screen
          name="MealFilter"
          component={FilterStackScreen}
          options={{ drawerLabel: "Filters" }}
        />
      </Drawer.Navigator>
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
