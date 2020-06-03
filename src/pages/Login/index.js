import React from 'react';
import {View, Text, Image, TouchableOpacity, StatusBar, TextInput, Button} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


import styles from './styles';
import ImgLogo from '../../assets/Logo.png';



export default function Login({navigation}){
    const [valueMail, onChangeText] = React.useState();
    const [valuePassword, onChangeText2] = React.useState();

    
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
                    <TouchableOpacity>
                        <Text style={styles.subtitulo}>Esqueceu a senha?</Text>
                    </TouchableOpacity>

                    
                    <View style={{flexDirection: 'column', marginTop:50}}>
                        <TouchableOpacity style={styles.buttons}>
                            <Text style={styles.BtTitulo}>Entrar</Text>
                        </TouchableOpacity>
                        <View style={{flexDirection: 'row',justifyContent:'center'}}>
                            <Text style={{color:'#fff'}}>Não tem uma conta? </Text>
                            <TouchableOpacity>
                                <Text style={styles.subtitulo}>Cadastre agora</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </LinearGradient>  
    );
}