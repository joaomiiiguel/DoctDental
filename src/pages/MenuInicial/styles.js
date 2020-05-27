import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#E4EBF0'
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height:180,
    },
    header2:{
        flexDirection: 'column',
    },
    titulo:{
        color: '#FFF',
        fontSize:18,
    },
    titulo2:{
        color: '#FFF',
        fontSize:22,
        fontWeight: 'bold',
        textAlign:'center'
    },
    ImgLogo:{
        width: 93,
        height: 100,
    },
    containerList:{
        margin: 20,
        borderRadius:20,
        paddingHorizontal: 10,
        paddingVertical: 30,
        backgroundColor: '#FFF',
    },
    buttons:{
        alignItems: 'center',
        width: '45%',
        paddingHorizontal: 15,
        paddingVertical: 40,
        margin: 10,
        borderColor: '#F2F2F2',
        borderRadius: 20,
        borderWidth: 2
    },
    ImgBt: {
        margin:10,
        width:108,
        height:115
    },
    BtTitulo: {
        color: '#1d80b2',
        paddingVertical: 3,
        fontSize:13,
        fontWeight: 'bold',
        textAlign:'center',
        letterSpacing: 1
    }
})