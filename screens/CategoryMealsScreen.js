import React from "react";
import { View, StyleSheet, Text } from "react-native";

import MealList from "../components/MealList";
import { CATEGORIES } from "../data/dummy-data";

import { useSelector } from "react-redux";

export default function CategoryMealsScreen({ route, navigation }) {
  const { categoryId } = route.params;
  const meals = useSelector((state) => state.meal.filteredMeals);
  const selectedCat = CATEGORIES.find((ele) => ele.id === categoryId);
  navigation.setOptions({ title: selectedCat.title });

  const displayedMeals = meals.filter(
    (ele) => ele.categoryId.indexOf(categoryId) >= 0
  );

  return (
    <View style={styles.screen}>
      {displayedMeals.length ? (
        <MealList meals={displayedMeals} navigation={navigation} />
      ) : (
        <Text>Items doesn't match the filter applied</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
