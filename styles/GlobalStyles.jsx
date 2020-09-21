import {StyleSheet} from 'react-native';


export const GlobalStyles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 0,
        backgroundColor: '#ffffff'
    },
    boxSignIn:{
        alignItems:'center',
        justifyContent: "center",
        flex: 1.7,
        backgroundColor: '#000',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        borderColor: 'yellow',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        elevation: 15,
    },
    boxFormSignIn:{
        alignItems:'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#fff',
        padding: 0,
    },
    titleText:{
        fontFamily: 'Monofett-Regular',
        fontSize: 82, 
        color: 'red'
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