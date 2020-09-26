import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../../components/button";
import Facebook from "../../components/icons/facebook";
import GmailIcon from "../../components/icons/gmail";
import LogoMinca from "../../components/logo";
import { loginWithGmail } from "../../firebase/client";
import useUser from "../../hooks/useUser";

export default function SignIn({ navigation }) {
  const user = useUser({ navigation });
  console.log(user);
  const handlePress = (e) => {
    e.preventDefault();
    navigation.navigate("Home");
  };
  useEffect(() => {
    user && navigation.navigate("Home");
  });
  const handleSubmitGmail = (e) => {
    loginWithGmail().catch((err) => {
      console.log(err);
    });
  };
  return (
    <View style={StyleSignIn.container}>
      <View style={StyleSignIn.boxUpSignIn}>
        <LogoMinca height={180} width={170} />
      </View>
      <View style={StyleSignIn.boxDownSignIn}>
        <Button onPress={handleSubmitGmail} color="#FF0000">
          <GmailIcon height={20} width={20} fill="#fff" margin="0" />
          <Text style={StyleSignIn.textButton}>Ingresar con Gmail</Text>
        </Button>
        <Button onPress={handlePress} color="#3b5998">
          <Facebook height={22} width={22} fill="#3b5998" margin="10" />
          <Text style={StyleSignIn.textButton}>Ingresar con Facebbok</Text>
        </Button>
      </View>
    </View>
  );
}

const StyleSignIn = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  boxUpSignIn: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1.6,
    backgroundColor: "#000",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,

    elevation: 21,
  },
  logo: {},
  boxDownSignIn: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#fff",
    padding: 0,
    backgroundColor: "rgba(0,0,0,0)",
  },
  textButton: {
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 16,
    textAlign: "right",
    marginLeft: 8,
  },
});
