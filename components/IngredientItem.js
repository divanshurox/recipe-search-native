import React from "react";
import { StyleSheet, Text, View } from "react-native";

const IngredientItem = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.ing}</Text>
    </View>
  );
};

export default IngredientItem;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: "#97c4ef",
    margin: 3,
    padding: 4,
    shadowColor: "#ccc",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.26,
    shadowRadius: 6,
    elevation: 8,
  },
  text: {
    fontFamily: "open-sans",
  },
});
