import React from "react";
import { StyleSheet, View } from "react-native";

export default function Perfil() {
  return (
    <View style={StylePerfil.container}>
      <h3>This is perfil</h3>
    </View>
  );
}

const StylePerfil = StyleSheet.create({
  container: {
    backgroundColor: "#E0244C",
    flex: 1,
  },
});
