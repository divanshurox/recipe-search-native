import React from "react";
import { View, StyleSheet } from "react-native";

import MealList from "../components/MealList";

import { CATEGORIES } from "../data/dummy-data";
import { MEALS } from "../data/dummy-data";

export default function CategoryMealsScreen({ route, navigation }) {
  const { categoryId } = route.params;
  const selectedCat = CATEGORIES.find((ele) => ele.id === categoryId);
  navigation.setOptions({ title: selectedCat.title });

  const displayedMeals = MEALS.filter(
    (ele) => ele.categoryId.indexOf(categoryId) >= 0
  );

  return (
    <View style={styles.screen}>
      <MealList meals={displayedMeals} navigation={navigation} />
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
