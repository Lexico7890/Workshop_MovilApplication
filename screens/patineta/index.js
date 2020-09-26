import React from "react";
import { StyleSheet, View } from "react-native";

export default function PatinetaPage() {
  return (
    <View style={StylePatineta.container}>
      <h4>This is page patineta</h4>
    </View>
  );
}

const StylePatineta = StyleSheet.create({
  container: {
    backgroundColor: "#DDE024",
  },
});
