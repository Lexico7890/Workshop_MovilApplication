import {StyleSheet} from 'react-native';


export const GlobalStyles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 20,
    },
    boxFormSignIn:{
        alignItems:'center',
        justifyContent: "center",
        flex: 1
    },
    titleText:{
        fontFamily: 'Monofett-Regular',
        fontSize: 82, 
    },
    input:{
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 2,
        fontSize: 18,
        borderRadius: 6,
        width: 250, 
        marginTop: 10
    },
    buttonOne:{
        marginTop: 10,
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#f01d71',
    },
    textButtonOne:{
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: "center",
    }
});