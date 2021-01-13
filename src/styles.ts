  
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ff0000',
        justifyContent: "center",
        padding: 40,
    },
    banner: {
        width: '100%',
        resizeMode: 'contain'
    },
    title: {
        fontFamily: 'Poppins_400Regular',
        color: '#fff',
        fontSize: 20,
        lineHeight: 30,
        marginTop: 80
    },
    titleBold: {
        fontFamily: 'Poppins_600SemiBold'
    },
    buttonsContainer: {
        flexDirection: 'column',
        justifyContent: "center",
        paddingTop:20,
        paddingBottom:90
    },
    button: {
        height: 50,
        width: 330,
        backgroundColor: '#333',
        borderRadius: 8,
        padding: 24,
        justifyContent: 'center',
        
    },

    button2: {
        
        height: 50,
        width: 330,
        backgroundColor: '#333',
        borderRadius: 8,
        padding: 24,
        justifyContent: 'center'
    },
    buttonsPrimary: {
        backgroundColor: '#9871f5'
    },
    buttonsSecondary: {
        backgroundColor: '#fff'
        
    },
    buttonsText: {
        fontWeight:'bold',
        fontStyle:'italic',
        color: '#FFF',
        fontSize: 20
    },
    ico: {
        justifyContent: 'center'
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight:'bold'
}
        
})

export default styles;