import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Vibration,
} from "react-native";

const CategoryGridCard = (props) => {
  return (
    <TouchableOpacity
      style={[styles.gridItem, { backgroundColor: props.color }]}
      onPress={props.onSelect}
      onLongPress={() => Vibration.vibrate(1000)}
    >
      <View>
        <Text style={styles.title}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryGridCard;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    //Shadow Properties
    shadowColor: "#ccc",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.26,
    shadowRadius: 6,
    backgroundColor: "white",
    elevation: 8,
    borderRadius: 10,
  },
  title: {
    fontFamily: "open-sans-bold",
    padding: 20,
    fontSize: 16,
  },
});
