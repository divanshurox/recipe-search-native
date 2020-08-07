import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import MealList from "../components/MealList";

import { useSelector } from "react-redux";

const FavouritesScreen = (props) => {
  const displayData = useSelector((state) => state.meal.favouriteMeals);

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
      {displayData.length ? (
        <MealList meals={displayData} navigation={props.navigation} />
      ) : (
        <Text>Go get some favourites!</Text>
      )}
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
