import { StatusBar } from "expo-status-bar";
import * as React from "react";
import "./styles/GlobalStyles";
import { useFonts } from "expo-font";
import { AppLoading } from "expo";
import SignInStack from "./routers/SignInStack";
import useUser from "./hooks/useUser";
import HomeStack from "./routers/HomeStack";

export default function App() {
  /*const user = useUser();
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "RESTORE_TOKEN":
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case "SIGN_IN":
          return {
            ...prevState,
            userToken: action.token,
            isSignOut: false,
          };
        case "SIGN_OUT":
          return {
            ...prevState,
            userToken: null,
            isSignOut: true,
          };
      }
    },
    {
      isLoading: true,
      isSignOut: false,
      userToken: null,
    }
  );

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;
      try {
        userToken = await AsyncStorage.getItem("userToken");
      } catch (e) {
        console.log(e);
      }
      dispatch({ type: "RESTORE_TOKEN", token: userToken });
    };
    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(() => ({
    signIn: async (data) => {
      dispatch({ type: "SIGN_IN", token: user.token });
    },
  }));*/

  const [fondLoaded] = useFonts({
    "Monofett-Regular": require("./assets/fonts/Monofett-Regular.ttf"),
  });
  if (!fondLoaded) {
    return <AppLoading />;
  } else {
    return <SignInStack />;
  }
}
