import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

export default function Level2({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Press 
        <Pressable onPress={() => navigation.navigate("Level 3")}>
          <Text> hedgehog </Text>
        </Pressable>
        to go to the next level.
      </Text>
    </View>
  );
}

// Add basic styling for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,                    // Makes the container take up the full height of the screen
    justifyContent: "center",   // Centers content vertically
    alignItems: "center",       // Centers content horizontally
    backgroundColor: '#f5f5f5', // Optional: Add a background color for visibility
  },
  title: {
    fontSize: 40,
    textAlign: "center",        // Centers text inside the Text component
  }
});
