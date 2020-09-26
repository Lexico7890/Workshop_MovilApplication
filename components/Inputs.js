import React from "react";
import { Formik } from "formik";
import { TextInput, Button, View } from "react-native";
import { GlobalStyles } from "../styles/GlobalStyles";
import ButtonOne from "./ButtonOne";

export default function Inputs({ navigation }) {
  return (
    <View>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={GlobalStyles.input}
              placeholder="Email o correo"
              onChangeText={props.handleChange("email")}
              value={props.values.email}
              keyboardType="email-address"
            />
            <TextInput
              style={GlobalStyles.input}
              placeholder="Password"
              onChangeText={props.handleChange("password")}
              value={props.values.password}
              secureTextEntry={true}
            />
            <ButtonOne text="Ingresar" onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
}
