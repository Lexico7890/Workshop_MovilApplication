import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Button from "../../components/button";

export default function PatinetaPage() {
  return (
    <>
      <View style={StylePatineta.header}>
        <Text style={StylePatineta.textHeader}>Mis Patinetas</Text>
      </View>
      <View style={StylePatineta.conatiner}>
        <View style={StylePatineta.section}>
          <Text style={StylePatineta.textSection}>Minca 500W</Text>
          <Image
            style={StylePatineta.imagePatineta}
            source={{
              uri:
                "https://mincaelectric.com/wp-content/uploads/2019/11/naranja-con-negro-500-w.png",
            }}
          />
          <View style={StylePatineta.buttons}>
            <View style={StylePatineta.button}>
              <Button color="#FF5733">
                <Text>Ir al taller</Text>
              </Button>
            </View>
            <View style={StylePatineta.button}>
              <Button color="#FF0000">
                <Text>Ver Historico</Text>
              </Button>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

const StylePatineta = StyleSheet.create({
  header: {
    backgroundColor: "#F7F1F0",
    flex: 0.2,
    elevation: 10,
  },
  conatiner: {
    backgroundColor: "#ffffff",
    flex: 1.8,
    paddingVertical: 10,
    paddingHorizontal: 9,
  },
  section: {
    marginBottom: 9,
    height: "100%",
    flexDirection: "column",
    backgroundColor: "#ffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.23,
    shadowRadius: 10.97,
    elevation: 4,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  textHeader: {
    color: "black",
    height: "100%",
    fontWeight: "600",
    fontSize: 20,
    marginTop: 11,
    marginLeft: 7,
  },
  textSection: {
    color: "black",
    height: 30,
    fontWeight: "600",
    fontSize: 20,
    marginTop: 11,
    textAlign: "center",
  },
  imagePatineta: {
    width: "100%",
    height: 350,
    resizeMode: "cover",
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginTop: 17,
  },
  buttons: {
    flexDirection: "row",
    flex: 1,
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
