import React from 'react';
import {View, Text, Image, TouchableOpacity, StatusBar, TextInput, Button} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { TextInputMask } from 'react-native-masked-text';


import styles from './styles';
import ImgLogo from '../../assets/Logo.png';


export default function NovoCadastro({navigation}){
    const [valueName, onChangeName] = React.useState();
    const [valueMail, onChangeMail] = React.useState();
    const [valueFone, onChangeFone] = React.useState();
    const [valueCPF, onChangeCPF] = React.useState();
    const [valuePassword, onChangePassword] = React.useState();


    

    return(
        <LinearGradient colors={['#1d80b2','#87daee']} style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" />
            <View style={styles.header}>

                <Image source={ImgLogo} style={styles.ImgLogo}/>

                <View style={styles.containerLogin}>
                    <Text style={styles.titulo}>Nome:</Text>
                    <TextInput style={styles.textinput} 
                        onChangeText={text => onChangeName(text)} 
                        placeholder='Digite seu nome' 
                        placeholderTextColor='#FFF'
                        textContentType='name' 
                        keyboardType='default' 
                        value={valueName} 
                    />
                    <Text style={styles.titulo}>E-mail:</Text>
                    <TextInput style={styles.textinput} 
                        onChangeText={text => onChangeMail(text)} 
                        placeholder='Digite seu e-mail' 
                        placeholderTextColor='#FFF'
                        textContentType='emailAddress' 
                        keyboardType='email-address' 
                        value={valueMail} 
                        
                    />
                    <Text style={styles.titulo}>CPF:</Text>
                    <TextInputMask
                        type={'cpf'}
                        value={valueCPF}
                        onChangeText={text => onChangeCPF(text)} 
                        style={styles.textinput}
                        placeholder='Digite seu CPF' 
                        placeholderTextColor='#FFF'                       
                    />

                    <Text style={styles.titulo}>Telefone:</Text>
                    <TextInputMask
                        type={'cel-phone'}
                        value={valueFone}
                        onChangeText={text => onChangeFone(text)} 
                        style={styles.textinput}
                        placeholder='Digite seu telefone' 
                        placeholderTextColor='#FFF'
                        options={{
                            maskType: 'BRL',
                            withDDD: true,
                            dddMask: '(99) '
                          }}                       
                    />
                        

                    <Text style={styles.titulo}>Senha:</Text>
                    <TextInput style={styles.textinput} 
                        onChangeText={text => onChangePassword(text)} 
                        placeholder='Digite sua senha' 
                        placeholderTextColor='#FFF'
                        textContentType='password'
                        secureTextEntry={true}
                        autoCorrect={false}
                        value={valuePassword} 
                    />
                    

                    
                    <View style={{flexDirection: 'column', marginTop:50}}>
                        <TouchableOpacity style={styles.buttons} onPress={() => navigation.push('MenuInicial')}>
                            <Text style={styles.BtTitulo}>Cadastrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </LinearGradient>  
    );
}