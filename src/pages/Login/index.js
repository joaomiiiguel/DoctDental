import React, {useState } from 'react';
import {View, Text, Image, TouchableOpacity, StatusBar, TextInput, Button, Modal} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


import styles from './styles';
import ImgLogo from '../../assets/Logo.png';



export default function Login({navigation}){
    const [valueMail, onChangeText] = React.useState();
    const [valuePassword, onChangeText2] = React.useState();
    const [modalVisible, setModalVisible] = useState(false);

    
    return(
        <LinearGradient colors={['#1d80b2','#87daee']} style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" />
            <View style={styles.header}>

                <Image source={ImgLogo} style={styles.ImgLogo}/>

                <View style={styles.containerLogin}>
                    <Text style={styles.titulo}>E-mail:</Text>
                    <TextInput style={styles.textinput} 
                        onChangeText={text => onChangeText(text)} 
                        placeholder='Digite seu e-mail' 
                        placeholderTextColor='#FFF'
                        textContentType='emailAddress' 
                        keyboardType='email-address' 
                        value={valueMail} 
                        
                    />
                    <Text style={styles.titulo}>Senha:</Text>
                    <TextInput style={styles.textinput} 
                        onChangeText={text => onChangeText2(text)} 
                        placeholder='Digite sua senha' 
                        placeholderTextColor='#FFF'
                        textContentType='password'
                        secureTextEntry={true}
                        autoCorrect={false}
                        value={valuePassword} 
                    />



                    <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            }}
                        >
                            <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={{...styles.titulo2, marginBottom: 20}}>Alterar senha</Text>
                                <Text style={styles.modalText}>Enviaremos um link no seu e-mail para cadastrar uma senha nova</Text>
                                <TextInput style={styles.textinput2} 
                                    onChangeText={text => onChangeText(text)} 
                                    placeholder='Digite seu e-mail' 
                                    placeholderTextColor='#145C7F'
                                    textContentType='emailAddress' 
                                    keyboardType='email-address' 
                                    value={valueMail} 
                                    
                                />


                                <TouchableOpacity
                                style={{ ...styles.buttons, backgroundColor: "#2196F3", width:250 }}
                                onPress={() => {
                                    setModalVisible(!modalVisible);
                                }}
                                >
                                    <Text style={styles.textStyle}>Confirmar</Text>
                                </TouchableOpacity>
                            </View>
                            </View>
                        </Modal>

                    <TouchableOpacity 
                    onPress={() => {setModalVisible(true);}}>

                        <Text style={styles.subtitulo}>Esqueceu a senha?</Text>
                    </TouchableOpacity>

                    
                    <View style={{flexDirection: 'column', marginTop:50}}>
                        <TouchableOpacity style={styles.buttons} onPress={() => navigation.push('MenuInicial')}>
                            <Text style={styles.BtTitulo}>Entrar</Text>
                        </TouchableOpacity>
                        <View style={{flexDirection: 'row',justifyContent:'center'}}>
                            <Text style={{color:'#fff'}}>Não tem uma conta? </Text>
                            <TouchableOpacity onPress={() => navigation.push('NovoCadastro')}>
                                <Text style={styles.subtitulo}>Cadastre agora</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </LinearGradient>  
    );
}