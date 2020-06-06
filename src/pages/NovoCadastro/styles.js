import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{
        flex: 1,
    },
    header:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    containerLogin:{
        flexDirection: 'column',
        width: "80%",
    },
    titulo:{
        color: '#FFF',
        fontSize:18,
        fontWeight: 'bold',
    },
    textinput:{
        color: 'black',
        borderColor: '#FFF', 
        borderBottomWidth: 1,
        height:40,
        fontSize: 16,
        marginBottom: 10
    },
    subtitulo:{
        color: '#FFF',
        fontSize:14,
        textAlign:'center',
        color: '#145C7F',
    },
    ImgLogo:{
        width: 93,
        height: 100,
        
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