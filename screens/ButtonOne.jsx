import React from 'react'
import {TouchableOpacity, Text, View} from 'react-native'
import {GlobalStyles} from '../styles/GlobalStyles'

export default function ButtonOne({text, onPress}){
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={GlobalStyles.buttonOne}>
                <Text style={GlobalStyles.textButtonOne}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}