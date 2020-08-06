import React from "react";
import { FlatList } from "react-native";
import MealItem from "../components/MealItem";

const MealList = (props) => {
  const renderMealItem = (mealData) => {
    return (
      <MealItem
        img={mealData.item.imageUrl}
        title={mealData.item.title}
        duration={mealData.item.duration}
        aff={mealData.item.affordability}
        comp={mealData.item.complexity}
        onSelect={() => {
          props.navigation.navigate("MealDetails", {
            mealId: mealData.item.id,
          });
        }}
      />
    );
  };

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={props.meals}
      renderItem={renderMealItem}
    />
  );
};

export default MealList;
