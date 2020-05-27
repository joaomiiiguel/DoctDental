import React from 'react';
import {View, Text, Image, TouchableOpacity, SafeAreaView, StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


import styles from './styles';
import ImgLogo from '../../assets/Logo.png';

import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';



export default function MenuInicial(){
    return(
        <SafeAreaView style={styles.container}>
        <StatusBar translucent backgroundColor="transparent" />
        <LinearGradient colors={['#1d80b2','#87daee']} >
            <View style={styles.header}>
                <Image source={ImgLogo} style={styles.ImgLogo}/>
                <View style={styles.header2}>
                    <Text style={styles.titulo}>Bem vindo</Text>
                    <Text style={styles.titulo2}>João Miguel</Text>
                </View>
            </View>
        </LinearGradient>
            <View style={styles.containerList}>
                <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                    <TouchableOpacity style={styles.buttons}>
                        <AntDesign color="#1d80b2" size={35} name="addfile" style={{marginBottom:10}}/>
                        <Text style={styles.BtTitulo}>NOVO CADASTRO</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons}>
                        <SimpleLineIcons color="#1d80b2" size={35} name="user" style={{marginBottom:10}}/>
                        <Text style={styles.BtTitulo}>PACIENTE</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                    <TouchableOpacity style={styles.buttons}>
                        <SimpleLineIcons color="#1d80b2" size={35} name="calendar" style={{marginBottom:10}}/>
                        <Text style={styles.BtTitulo}>AGENDA</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons}>
                        <SimpleLineIcons color="#1d80b2" size={35} name="list" style={{marginBottom:10}}/>
                        <Text style={styles.BtTitulo}>CID</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                    <TouchableOpacity style={styles.buttons}>
                        <SimpleLineIcons color="#1d80b2" size={35} name="calculator" style={{marginBottom:10}}/>
                        <Text style={styles.BtTitulo}>CALCULADORA</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons}>
                        <SimpleLineIcons color="#1d80b2" size={35} name="doc" style={{marginBottom:10}}/>
                        <Text style={styles.BtTitulo}>ATESTADO</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        </SafeAreaView>
    );
}