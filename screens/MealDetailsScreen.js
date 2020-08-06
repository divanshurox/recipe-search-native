import React from "react";
import { StyleSheet, Text, Image, View, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import IngredientItem from "../components/IngredientItem";

const ListItem = (props) => {
  return (
    <View style={styles.ingredient}>
      <Text>{props.children}</Text>
    </View>
  );
};

export default function MealDetailsScreen({ route, navigation }) {
  const selectedMeal = MEALS.find((ele) => ele.id === route.params.mealId);
  navigation.setOptions({
    title: selectedMeal.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Favourite" iconName="ios-star" onPress={() => {}} />
      </HeaderButtons>
    ),
  });
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{
          uri: selectedMeal.imageUrl,
        }}
        style={styles.img}
      />
      <View style={styles.details}>
        <IngredientItem ing={selectedMeal.duration + " mins"} />
        <IngredientItem
          ing={
            selectedMeal.affordability[0].toUpperCase() +
            selectedMeal.affordability.slice(1)
          }
        />
        <IngredientItem
          ing={
            selectedMeal.complexity[0].toUpperCase() +
            selectedMeal.complexity.slice(1)
          }
        />
      </View>
      <Text style={styles.title}>Ingredients</Text>
      <View style={styles.ingContainer}>
        {selectedMeal.ingredients.map((ele, i) => {
          return <IngredientItem key={i} ing={ele} />;
        })}
      </View>
      <Text style={styles.title}>Steps</Text>
      <View style={styles.steps}>
        {selectedMeal.steps.map((ele, i) => {
          return (
            <ListItem key={i}>
              {i + 1}: {ele}
            </ListItem>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  img: {
    height: 200,
    width: "100%",
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
  },
  ingContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    margin: 20,
  },
  title: {
    fontFamily: "open-sans-bold",
    textAlign: "center",
    fontSize: 20,
  },
  steps: {
    flex: 1,
    margin: 10,
  },
  ingredient: {
    marginVertical: 10,
    marginHorizontal: 10,
    padding: 5,
    borderColor: "#ccc",
    borderWidth: 5,
    borderRadius: 10,
  },
});
