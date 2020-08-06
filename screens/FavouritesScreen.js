import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";

const FavouritesScreen = (props) => {
  const displayData = MEALS.filter((ele) => ele.id === "m1" || ele.id === "m2");
  props.navigation.setOptions({
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Drawer"
          iconName="ios-menu"
          onClick={() => props.navigation.toggleDrawer()}
        />
      </HeaderButtons>
    ),
  });
  return (
    <View style={styles.screen}>
      <MealList meals={displayData} navigation={props.navigation} />
    </View>
  );
};

export default FavouritesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
