import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function StorePage() {
  return (
    <>
      <View style={StyleStore.header}>
        <Text style={StyleStore.textHeader}>Tienda Minca</Text>
      </View>
      <View style={StyleStore.container}>
        <View style={StyleStore.box}>
          <View style={StyleStore.product}>
            <Text>Container</Text>
          </View>
        </View>
        <View style={StyleStore.box}>
          <View style={StyleStore.product}>
            <Text>Container</Text>
          </View>
        </View>
        <View style={StyleStore.box}>
          <View style={StyleStore.product}>
            <Text>Container</Text>
          </View>
        </View>
        <View style={StyleStore.box}>
          <View style={StyleStore.product}>
            <Text>Container</Text>
          </View>
        </View>
      </View>
    </>
  );
}

const StyleStore = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1.8,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  header: {
    backgroundColor: "#F7F1F0",
    flex: 0.2,
    elevation: 10,
  },
  textHeader: {
    color: "black",
    height: "100%",
    fontWeight: "600",
    fontSize: 20,
    marginTop: 11,
    marginLeft: 7,
  },
  product: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    flex: 1,
  },
  box: {
    width: "50%",
    height: "50%",
    padding: 2,
  },
});
