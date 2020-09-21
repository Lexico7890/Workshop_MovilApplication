import React from 'react';
import {View, Text} from 'react-native'
import {GlobalStyles} from '../styles/GlobalStyles'
import Inputs from './Inputs'


export default function SignIn({navigation}){
    return(
        <View style={GlobalStyles.container}>
            <View style={GlobalStyles.boxSignIn}>
                <Text style={GlobalStyles.titleText}>MINCA</Text>
            </View>
            <View style={GlobalStyles.boxFormSignIn}>
            <Inputs navigation={navigation}/>
            </View>
        </View>
    )
}