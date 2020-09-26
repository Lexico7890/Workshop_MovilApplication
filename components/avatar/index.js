import React from "react";
import { Image, StyleSheet } from "react-native";

export default function Avatar({ photoURL }) {
  console.log(photoURL);
  return (
    <>
      <Image
        style={StyleAvatar.img}
        source={{
          uri: { photoURL },
        }}
      />
    </>
  );
}

const StyleAvatar = StyleSheet.create({
  img: {
    borderRadius: 999,
    height: 40,
    width: 40,
  },
});
