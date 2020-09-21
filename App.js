import { StatusBar } from 'expo-status-bar';
import React from 'react';
import './styles/GlobalStyles'
import {useFonts} from 'expo-font'
import {AppLoading} from 'expo'
import SignInStack from './routers/SignInStack'


export default function App() {
  const[fondLoaded] = useFonts({'Monofett-Regular': require('./assets/fonts/Monofett-Regular.ttf')});
    if(!fondLoaded){
      return(
        <AppLoading/>
      );
    }else{
      return(
        <SignInStack/>
      );
    }
}


