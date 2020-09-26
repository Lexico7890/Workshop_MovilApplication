import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "../firebase/client";

export const USER_STATE = {
  NOT_LOGGED: null,
  NOT_KNOW: undefined,
};

export default function useUser({ navigation }) {
  const [user, setUser] = useState(USER_STATE.NOT_KNOW);

  useEffect(() => {
    onAuthStateChanged(setUser);
  }, []);

  useEffect(() => {
    user === USER_STATE.NOT_LOGGED && navigation.navigate("Home");
  }, [user]);

  return user;
}
