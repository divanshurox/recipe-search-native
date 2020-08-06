import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View, Switch } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

const FilterSwitch = (props) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        value={props.value}
        onValueChange={props.onChange}
        trackColor={{ true: "dodgerblue" }}
        thumbColor={"dodgerblue"}
      />
    </View>
  );
};

export default function FilterScreen(props) {
  const [gluten, setGluten] = useState(false);
  const [vegan, setVegan] = useState(false);
  const [vegeterian, setVegeterian] = useState(false);
  const [lactose, setLactose] = useState(false);

  const { navigation } = props;

  const saveFilters = useCallback(() => {
    const appliedFilter = {
      gluten,
      vegan,
      vegeterian,
      lactose,
    };
    console.log(appliedFilter);
  }, [gluten, vegan, vegeterian, lactose]);

  useEffect(() => {
    navigation.setParams({ save: saveFilters });
  }, [saveFilters]);

  props.navigation.setOptions({
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Drawer"
          iconName="ios-menu"
          onPress={() => {
            props.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Save"
          iconName="ios-save"
          onPress={() => {
            props.route.params.save();
          }}
        />
      </HeaderButtons>
    ),
  });
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Filters</Text>
      <FilterSwitch
        label="Gluten-Free"
        value={gluten}
        onChange={(newVal) => setGluten(newVal)}
      />
      <FilterSwitch
        label="Vegan"
        value={vegan}
        onChange={(newVal) => setVegan(newVal)}
      />
      <FilterSwitch
        label="Vegeterian"
        value={vegeterian}
        onChange={(newVal) => setVegeterian(newVal)}
      />
      <FilterSwitch
        label="Lactose-Free"
        value={lactose}
        onChange={(newVal) => setLactose(newVal)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontFamily: "open-sans",
    fontSize: 22,
    margin: 20,
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    margin: 10,
  },
});
