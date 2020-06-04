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
        height: '50%'
    },
    titulo:{
        color: '#FFF',
        fontSize:18,
        fontWeight: 'bold',
    },
    titulo2:{
        color: '#145C7F',
        fontSize:18,
        fontWeight: 'bold',
    },
    textinput:{
        color: 'black',
        borderColor: '#FFF', 
        borderBottomWidth: 1,
        height:40,
        fontSize: 16,
        marginBottom: 20
    },
    textinput2:{
        color: '#145C7F',
        borderColor: '#145C7F', 
        borderBottomWidth: 1,
        height:40,
        width: 250,
        fontSize: 16,
        marginBottom: 20
    },
    subtitulo:{
        color: '#FFF',
        fontSize:14,
        textAlign:'center',
        color: '#145C7F',
    },
    ImgLogo:{
        width: 114,
        height: 120,
        marginVertical: 90,
        
    },
    buttons:{
        alignItems: 'center',
        justifyContent:'center',
        height: 50,
        backgroundColor:'#FFF',
        borderRadius: 10,
        marginVertical: 20
    },
    ImgBt: {
        margin:10,
        width:108,
        height:115
    },
    BtTitulo: {
        color: '#1d80b2',
        fontSize:15,
        fontWeight: 'bold',
        textAlign:'center',
    },

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },

    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
})