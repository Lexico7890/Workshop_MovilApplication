import React from "react";
import { StyleSheet, View } from "react-native";

export default function StorePage() {
  return (
    <View style={StyleStore.container}>
      <h3>This is store page</h3>
    </View>
  );
}

const StyleStore = StyleSheet.create({
  container: {
    backgroundColor: "#43BCD7",
    flex: 1,
  },
});
