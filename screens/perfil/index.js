import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";

export default function Perfil() {
  return (
    <>
      <View style={StylePerfil.header}>
        <View style={StylePerfil.boxHeader}>
          <Image
            style={StylePerfil.image}
            source={{
              uri:
                "https://fotos.perfil.com/2020/08/28/420/0/medico-blas-fiorovic-20200828-1008585.jpg",
            }}
          />
        </View>
      </View>
      <View style={StylePerfil.container}></View>
    </>
  );
}

const StylePerfil = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1.3,
  },
  header: {
    flex: 0.7,
    padding: 4,
    borderBottomWidth: 1,
    backgroundColor: "#F7F1F0",
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: "50%",
  },
  boxHeader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textHeader: {
    color: "black",
    height: "100%",
    fontWeight: "600",
    fontSize: 20,
    marginTop: 11,
  },
});
