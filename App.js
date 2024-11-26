import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import nodejs from "nodejs-mobile-react-native";

nodejs.start("main.js");
nodejs.channel.addListener("message", (msg) => {
  console.log("From node: " + msg);
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button
        title="Message Node"
        onPress={() => nodejs.channel.send("A message!")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
