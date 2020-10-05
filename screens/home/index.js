import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Avatar from "../../components/avatar";
import useUser from "../../hooks/useUser";

export default function Home({ navigation }) {
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
            <View style={StyleHome.viewIMG}>
              <Image
                style={StyleHome.imagePost}
                source={{
                  uri:
                    "https://www.elpais.com.co/files/article_main/uploads/2020/01/02/5e0e06b8493dc.jpeg  ",
                }}
              />
            </View>
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
    width: "100%",
    height: 150,
    resizeMode: "cover",
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  viewIMG: {
    height: "100%",
    width: "97%",
    flex: 1,
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 4,
  },
});
