import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Avatar from "../../components/avatar";
import useUser from "../../hooks/useUser";

export default function Home({ navigation }) {
  console.log();
  const user = useUser({ navigation });
  return (
    <>
      <View style={StyleHome.container}>
        <View style={StyleHome.header}>
          <Text style={StyleHome.textHeader}>Territorio MINCA</Text>
        </View>
      </View>
      <View style={StyleHome.section}>
        <View style={StyleHome.articleFull}>
          <View style={StyleHome.articleLeft}>
            <Avatar source={"https://reactnative.dev/img/tiny_logo.png"} />
          </View>
          <View style={StyleHome.articleRight}>
            <Text style={StyleHome.textArticleLeft}>
              Oscar Alexander casas alfonso
            </Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam,
              nulla voluptate quaerat accusamus delectus commodi corrupti, quod
              est optio facere, consequuntur quis autem fugiat ipsa minima
              mollitia soluta sequi assumenda.
            </Text>
          </View>
        </View>
      </View>
    </>
  );
}

const StyleHome = StyleSheet.create({
  container: {
    backgroundColor: "#F7F1F0",
    flex: 0.2,
    elevation: 10,
  },
  section: {
    backgroundColor: "#ffffff",
    flex: 1.8,
    paddingVertical: 10,
    paddingHorizontal: 9,
  },
  articleFull: {
    flexDirection: "row",
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
  header: {
    flexDirection: "row",
    padding: 5,
  },
  textHeader: {
    color: "black",
    height: "100%",
    fontWeight: "600",
    fontSize: 20,
    marginTop: 10,
    marginLeft: 5,
  },
  articleLeft: {
    backgroundColor: "#fff",
    flex: 1.4,
    alignItems: "center",
    borderTopStartRadius: 10,
    borderBottomLeftRadius: 10,
    paddingTop: 3,
    paddingLeft: 2,
  },
  articleRight: {
    flex: 10,
    paddingLeft: 6,
    paddingTop: 3,
    paddingBottom: 4,
  },
  textArticleLeft: {
    fontWeight: "800",
    fontSize: 15,
  },
});
