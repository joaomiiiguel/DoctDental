import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StatusBar, TextInput, CheckBox} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { TextInputMask } from 'react-native-masked-text';
import RadioButtonRN from 'radio-buttons-react-native';

import styles from './styles';


export default function NewAtend({navigation}){

    const [valueCPF, onChangeCPF] = React.useState();
    const [valueName, onChangeName] = React.useState();
    const [valueNameResp, onChangeNameResp] = React.useState();
    const [valueFone, onChangeFone] = React.useState();
    const [valueDataNasc, onChangeDataNasc] = React.useState();
    const [isSelectedMasc, setSelectionMasc] = useState(false);
    const [isSelectedFem, setSelectionFem] = useState(false);


    return(
        <LinearGradient colors={['#1d80b2','#87daee']} style={styles.container} >
            <View style={styles.checkLine}>
                <AntDesign color="#fff" size={25} name="checkcircle"/>
                <View style={{backgroundColor:'#fff', width: 30, height:2, borderRadius:5}}/>
                <AntDesign color="#fff" size={25} name="minuscircleo"/>
                <View style={{backgroundColor:'#fff', width: 30, height:2, borderRadius:5}}/>
                <AntDesign color="#fff" size={25} name="minuscircleo"/>
                <View style={{backgroundColor:'#fff', width: 30, height:2, borderRadius:5}}/>
                <AntDesign color="#fff" size={25} name="minuscircleo"/>
                <View style={{backgroundColor:'#fff', width: 30, height:2, borderRadius:5}}/>
                <AntDesign color="#fff" size={25} name="minuscircleo"/>
            </View>

            <View>
            <View style={styles.containerLogin}>
                    <Text style={styles.titulo}>CPF:</Text>
                    <TextInputMask
                        type={'cpf'}
                        value={valueCPF}
                        onChangeText={text => onChangeCPF(text)} 
                        style={styles.textinput}
                        placeholder='Digite o CPF do paciente' 
                        placeholderTextColor='#FFF'                       
                    />
                    <Text style={styles.titulo}>Nome:</Text>
                    <TextInput style={styles.textinput} 
                        onChangeText={text => onChangeName(text)} 
                        placeholder='Digite o nome do paciente' 
                        placeholderTextColor='#FFF'
                        textContentType='name' 
                        keyboardType='default' 
                        value={valueName} 
                    />
                    <Text style={styles.titulo}>Nome do Responsável:</Text>
                    <TextInput style={styles.textinput} 
                        onChangeText={text => onChangeNameResp(text)} 
                        placeholder='Digite o nome do responsável' 
                        placeholderTextColor='#FFF'
                        textContentType='name' 
                        keyboardType='default' 
                        value={valueNameResp} 
                    />
                    

                    <Text style={styles.titulo}>Telefone:</Text>
                    <TextInputMask
                        type={'cel-phone'}
                        value={valueFone}
                        onChangeText={text => onChangeFone(text)} 
                        style={styles.textinput}
                        placeholder='Digite o telefone de contato' 
                        placeholderTextColor='#FFF'
                        options={{
                            maskType: 'BRL',
                            withDDD: true,
                            dddMask: '(99) '
                          }}                       
                    />
                
                    <Text style={styles.titulo}>Data de Nascimento:</Text>
                    <TextInputMask
                        type={'datetime'}
                        value={valueDataNasc}
                        onChangeText={text => onChangeDataNasc(text)} 
                        style={styles.textinput}
                        placeholder='Digite a data de nascimento' 
                        placeholderTextColor='#FFF'
                        options={{
                            format: 'DD/MM/YYYY'
                          }}                       
                    />
                    <Text style={styles.titulo}>Sexo:</Text>
                    <View style={{flexDirection:'row', justifyContent:'space-between', marginTop: 20}}>
                        <CheckBox  value={isSelectedMasc} onValueChange={setSelectionMasc} style={styles.checkbox}/>
                        <Text >Masculino</Text>
                        <CheckBox value={isSelectedFem} onValueChange={setSelectionFem} style={styles.checkbox}/>
                        <Text>Feminino</Text>
                    </View>
                    

                    
                    <View style={{flexDirection: 'column', marginTop:50}}>
                        <TouchableOpacity style={styles.buttons} onPress={() => navigation.push('AnamneseNewAtend')}>
                            <Text style={styles.BtTitulo}>Avançar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </LinearGradient>
    );
}