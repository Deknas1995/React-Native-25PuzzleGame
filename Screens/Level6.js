import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

export default function Level6({ navigation }) {
  return <Text style={styles.container}>LVL 6! SÖTIS &lt;3</Text>;
}

const styles = StyleSheet.create({
  container: {
    padding: 70,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
});
