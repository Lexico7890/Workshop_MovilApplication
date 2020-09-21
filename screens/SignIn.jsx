import React from 'react';
import {View, Text} from 'react-native'
import {GlobalStyles} from '../styles/GlobalStyles'
import Inputs from './Inputs'


export default function SignIn({navigation}){
    return(
        <View style={GlobalStyles.container}>
            <View style={GlobalStyles.boxFormSignIn}>
                <Text style={GlobalStyles.titleText}>MINCA</Text>
                <Inputs navigation={navigation}/>
            </View>
            
        </View>
    )
}