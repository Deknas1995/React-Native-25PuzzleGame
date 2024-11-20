import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Button } from "react-native-web";

export default function Level6({ navigation }) {
  const [counter, setCounter] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const [intervalTime, setIntervalTime] = useState(1000);

  useEffect(() => {
    let interval;

    if (isRunning) {
      console.log("intervalTime = " + intervalTime);
      interval = setInterval(() => {
        setCounter((prev) => prev + 1);
      }, intervalTime);

      if (intervalTime === 0) {
        console.log("NAVIGATE TO LVL 7");
        setTimeout(() => {
          navigation.navigate("Level 7");
        }, 2000);
      }
    }

    return () => clearInterval(interval);
  }, [isRunning, intervalTime]);

  const handleStop = () => {
    setIsRunning(false);

    if (counter % 2 === 0) {
      setIntervalTime((prev) => prev - 200);
    } else {
      setIntervalTime(1000);
    }

    setIsRunning(true, 1000);
  };

  return (
    <View style={styles.container}>
      <Text>Stop on even numbers</Text>
      <Text style={styles.counterText}>{counter}</Text>
      <Button title="STOP" onPress={handleStop}></Button>
      {intervalTime === 0 ? <Text style={styles.WinMessage}>YOU WIN!</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 70,
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(200,200,230)",
  },
  counterText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "rgb(50,50,50)",
    marginVertical: 5,
  },
  WinMessage: {
    fontSize: 24,
    fontWeight: "bold",
    color: "rgb(0,150,0)",
  },
});
