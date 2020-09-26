import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Perfil from "../screens/perfil";
import Home from "../screens/home";
import PatinetaPage from "../screens/patineta";
import StorePage from "../screens/store";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import CustomTab from "../components/customTab";
import Patineta from "../components/icons/patineta";

const Tab = createBottomTabNavigator();

export default function HomeStack() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: "#ffffff",
        inactiveTintColor: "#808080",
        activeBackgroundColor: "#FF5733",
        inactiveBackgroundColor: "#fff",
      }}
      tabBar={(props) => <CustomTab {...props} />}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: "Inicio",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Patineta"
        component={PatinetaPage}
        options={{
          title: "Patinetas",
          tabBarIcon: ({ color }) => (
            <Patineta height={30} width={30} fill={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Tienda"
        component={StorePage}
        options={{
          title: "Tienda",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="store" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          title: "Perfil",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-contact" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
/**
 *
 */
