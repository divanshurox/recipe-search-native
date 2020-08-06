import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import Color from "../constants/Colors";

const MealItem = (props) => {
  const [longPress, setLongPress] = useState(false);
  return (
    <TouchableOpacity
      style={styles.gridItem}
      onPress={props.onSelect}
      onPressIn={() => setLongPress(true)}
      onPressOut={() => setLongPress(false)}
      activeOpacity={0.8}
    >
      {!longPress ? (
        <View>
          <View style={styles.mealRow}>
            <Image
              source={{
                uri: props.img,
                height: 200,
                width: 300,
              }}
            />
          </View>
          <View style={{ backgroundColor: Color.secondary, padding: 20 }}>
            <View style={{ ...styles.mealRow, ...styles.header }}>
              <Text style={styles.title}>{props.title}</Text>
            </View>
            <View style={{ ...styles.mealRow, ...styles.divide }} />
            <View style={{ ...styles.mealRow, ...styles.detail }}>
              <Text>{props.duration}min</Text>
              <Text>{props.aff}</Text>
              <Text>{props.comp}</Text>
            </View>
          </View>
        </View>
      ) : (
        <View>
          <Image
            source={{
              uri: props.img,
              height: 200,
              width: 300,
            }}
          />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 30,
    width: 300,
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
    overflow: "hidden",
  },
  mealRow: {
    flexDirection: "row",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  divide: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginVertical: 5,
  },
  detail: {
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  backDrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.7)",
  },
});
