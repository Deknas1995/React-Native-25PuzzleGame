import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function Level1({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.title}> Can you solve 20 Levels?</View>
      <Button
        title="Go to Level 2"
        onPress={() => navigation.navigate("Level 2")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
    fontSize: 50,
  },
});
