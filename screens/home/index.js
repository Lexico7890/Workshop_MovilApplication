import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
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
            <Image
              style={StyleHome.logop}
              source={{
                uri:
                  "https://cdn.pixabay.com/photo/2017/12/31/15/56/portrait-3052641__340.jpg",
              }}
            />
          </View>
          <View style={StyleHome.articleRight}>
            <Text style={StyleHome.textArticleLeft}>
              <strong>Oscar Alexander casas </strong>- Hace 2 horas
            </Text>
            <Text>Hola buenas tardes tengo un problema con la patineta</Text>
            <Image
              style={StyleHome.imagePost}
              source={{
                uri:
                  "data:image/jpeg;base64,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",
              }}
            />
          </View>
        </View>
        <View style={StyleHome.articleFull}>
          <View style={StyleHome.articleLeft}>
            <Image
              style={StyleHome.logop}
              source={{
                uri:
                  "https://cdn.pixabay.com/photo/2018/01/06/09/25/hijab-3064633__340.jpg",
              }}
            />
          </View>
          <View style={StyleHome.articleRight}>
            <Text style={StyleHome.textArticleLeft}>
              <strong>Camila Perea Diaz </strong>- Hace 3 horas
            </Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam,
              nulla voluptate quaerat accusamus delectus commodi corrupti, quod
              est optio facere, consequuntur quis autem fugiat ipsa minima
              mollitia soluta sequi assumenda.
            </Text>
          </View>
        </View>
        <View style={StyleHome.articleFull}>
          <View style={StyleHome.articleLeft}>
            <Image
              style={StyleHome.logop}
              source={{
                uri:
                  "https://cdn.pixabay.com/photo/2015/06/19/09/39/lonely-814631__340.jpg",
              }}
            />
          </View>
          <View style={StyleHome.articleRight}>
            <Text style={StyleHome.textArticleLeft}>
              <strong>Jhon freddy alfonso </strong>- Hace 5 horas
            </Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam,
              nulla voluptate quaerat accusamus delectus commodi corrupti, quod
              est optio facere, consequuntur quis autem fugiat ipsa minima
              mollitia soluta sequi assumenda.
            </Text>
          </View>
        </View>
        <View style={StyleHome.articleFull}>
          <View style={StyleHome.articleLeft}>
            <Image
              style={StyleHome.logop}
              source={{
                uri:
                  "https://cdn.pixabay.com/photo/2017/08/07/16/39/people-2605526__340.jpg",
              }}
            />
          </View>
          <View style={StyleHome.articleRight}>
            <Text style={StyleHome.textArticleLeft}>
              <strong>Danna valeria casas </strong>- Hace 1 dia
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
    marginBottom: 9,
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
    fontSize: 15,
    paddingBottom: 5,
  },
  logop: {
    borderRadius: 999,
    height: 40,
    width: 40,
  },
  imagePost: {
    width: 250,
    height: 200,
    resizeMode: "contain",
  },
});
