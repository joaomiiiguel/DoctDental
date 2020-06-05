import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';

//import { TextInputMask } from 'react-native-masked-text';
//import RadioButtonRN from 'radio-buttons-react-native';

import styles from '../styles';


export default function AnamneseNewAtend({navigation}){

    return(
        <LinearGradient colors={['#1d80b2','#87daee']} style={styles.container} >
            <View style={styles.checkLine}>
                <AntDesign color="#fff" size={25} name="checkcircle"/>
                <View style={{backgroundColor:'#fff', width: 30, height:2, borderRadius:5}}/>
                <AntDesign color="#fff" size={25} name="checkcircle"/>
                <View style={{backgroundColor:'#fff', width: 30, height:2, borderRadius:5}}/>
                <AntDesign color="#fff" size={25} name="minuscircleo"/>
                <View style={{backgroundColor:'#fff', width: 30, height:2, borderRadius:5}}/>
                <AntDesign color="#fff" size={25} name="minuscircleo"/>
                <View style={{backgroundColor:'#fff', width: 30, height:2, borderRadius:5}}/>
                <AntDesign color="#fff" size={25} name="minuscircleo"/>
            </View>

            <View>
            <View style={styles.containerLogin}>
                    
                    

                    
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