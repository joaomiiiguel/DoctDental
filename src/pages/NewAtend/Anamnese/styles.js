import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
    },
    containerLogin:{
        marginTop: 40,
        flexDirection: 'column',
        width: 300,
    },
    checkLine: {
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center'
    },
    titulo:{
        color: '#FFF',
        fontSize:18,
    },
    
    textinput:{
        color: 'black',
        borderColor: '#FFF', 
        borderBottomWidth: 1,
        height:40,
        fontSize: 16,
        marginBottom: 10
    },
    
    buttons:{
        alignItems: 'center',
        justifyContent:'center',
        height: 50,
        backgroundColor:'#FFF',
        borderRadius: 10,
        marginVertical: 10
    },
    BtTitulo: {
        color: '#1d80b2',
        fontSize:15,
        fontWeight: 'bold',
        textAlign:'center',
    }
})