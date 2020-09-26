import React, { useState } from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

export default function Button({ children, onPress, color }) {
  const [colorBack] = useState(color);
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        marginTop: 10,
        borderRadius: "999px",
        paddingVertical: 16,
        paddingHorizontal: 12,
        flexDirection: "row",
        backgroundColor: colorBack,
        width: "80%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </TouchableOpacity>
  );
}

const StyleButton = StyleSheet.create({
  container: {},
});
