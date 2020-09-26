import React from "react";
import { Image, StyleSheet } from "react-native";

export default function Avatar({ photoURL }) {
  return (
    <>
      <Image style={StyleAvatar.img} source={photoURL} />
    </>
  );
}

const StyleAvatar = StyleSheet.create({
  img: {
    borderRadius: 999,
    height: 40,
    width: 40,
    backgroundColor: "black",
  },
});
