import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

export default function Level5({ navigation }) {

  return (
    <Text style={styles.container}>
      LVL 5!
    </Text>
  );
}


const styles = StyleSheet.create({
  container: {
    padding: 70,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  display: {
    alignSelf: "stretch", // Make display span the full width of the grid
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(240, 240, 240)",
    borderWidth: 2,
    borderColor: "rgb(200, 200, 200)",
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  displayText: {
    padding: 20,
    fontSize: 20,
    color: "rgb(50, 50, 50)",
  },
  title: {
    fontSize: 40,
    textAlign: "center",
    marginBottom: 20,
  },
  grid: {
    flexDirection: "column", // Arrange rows vertically
    borderWidth: 2,
    borderColor: "rgb(222, 222, 222)",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "rgb(235, 235, 235)",
  },
  row: {
    flexDirection: "row", // Arrange buttons horizontally
    marginBottom: 10,
  },
  button: {
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(100, 100, 100)",
    borderWidth: 2,
    borderColor: "buttonVal",
    borderRadius: 10,
    margin: 5,
  },
  zeroButton: {
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2ecc71", // Different color for the "0" button
    borderWidth: 2,
    borderColor: "rgb(10, 10, 10)",
    borderRadius: 10,
    margin: 5,
  },
  displayError: {
    fontWeight:"900",
    borderColor:"black",
    backgroundColor: "red", // Make display red when an error occurs
  },
  displayCorrect: {
    fontWeight:"900",
    borderColor:"black",
    backgroundColor: "green", // Make display red when an error occurs
  },
  buttonText: {
    fontSize: 30,
    color: "#fff",
  },
  buttonPressed: {
    backgroundColor: "rgb(200, 200, 200)",
  },
});
