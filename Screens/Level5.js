import React, { useRef, useState } from "react";
import {
  View,
  StyleSheet,
  Animated,
  PanResponder,
  Platform,
  Text,
} from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export default function Level5() {
  const pan = useRef(new Animated.ValueXY()).current;
  const [lastTap, setLastTap] = useState(null);
  const disableResetRef = useRef(false); // Use ref instead of state for immediate updates
  const targetPosition = useRef({ x: 0, y: 0 }); // Use ref to track the target box's position
  const boxPosition = useRef({ x: 0, y: 0 }); // Track the draggable box's position

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true, // Allow pan responder to start
      onPanResponderGrant: () => {
        // Ensure the pan value is updated to match the box's current position
        pan.setOffset({
          x: pan.x._value, // Current x position
          y: pan.y._value, // Current y position
        });
        pan.setValue({ x: 0, y: 0 }); // Reset animated value to zero for smooth dragging
      },
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: () => {
        if (!disableResetRef.current) {
          console.log("reset");
          // Reset to starting position
          Animated.spring(pan, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: false,
          }).start();
        } else {
          // Maintain current position (no reset)
          pan.flattenOffset(); // Ensure the new position is retained
          boxPosition.current = { x: pan.x._value, y: pan.y._value }; // Update box position on release
          checkIfBoxInsideTarget();
        }
      },
    })
  ).current;

  const handleDoublePress = () => {
    const now = Date.now();
    const DOUBLE_PRESS_DELAY = 300;

    if (lastTap && now - lastTap < DOUBLE_PRESS_DELAY) {
      console.log("disable reset true");
      disableResetRef.current = true; // Update ref value immediately
    } else {
      setLastTap(now);
    }
  };

  // Check if the box is inside the target box (basic proximity check)
  const checkIfBoxInsideTarget = () => {
    const targetSize = 120; // Target box size (could be dynamic)
    const boxSize = 100; // Box size (could be dynamic)

    // Basic bounding box check: box is inside target box if its position is within the target's boundaries
    const boxX = boxPosition.current.x;
    const boxY = boxPosition.current.y;

    console.log("X = " + boxX + " Y = " + boxY);
    // Check if the box is within the target box's boundaries
    if (
      boxX >= targetPosition.current.x &&
      boxX <= targetPosition.current.x + targetSize - boxSize &&
      boxY >= targetPosition.current.y &&
      boxY <= targetPosition.current.y + targetSize - boxSize
    ) {
      console.log("Box placed in target. Navigating to next level.");
      // You can call navigation here to move to the next level
      // navigation.navigate("NextLevel");
    }
  };

  // Set target box position using onLayout
  const handleTargetLayout = (event) => {
    const { x, y } = event.nativeEvent.layout;
    targetPosition.current = { x, y }; // Update ref with target box's position
    console.log("Target Box Position:", { x, y });
  };

  return (
    <View style={styles.container}>
      {/* Target box */}
      <View
        style={styles.targetContainer}
        onLayout={handleTargetLayout} // Capture the position of the target box
      >
        <Text style={styles.targetText}>Place the box here</Text>
        <View style={styles.targetBox} />
      </View>

      <TouchableWithoutFeedback onPress={handleDoublePress}>
        <Animated.View
          style={[
            styles.box,
            { transform: pan.getTranslateTransform() },
            Platform.OS === "web" ? { cursor: "grab" } : {},
          ]}
          {...panResponder.panHandlers}
        />
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  targetContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  targetText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  targetBox: {
    width: 120,
    height: 120,
    backgroundColor: "#FFD700",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#FFA500",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: "#4CAF50",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // For Android shadow
  },
});
