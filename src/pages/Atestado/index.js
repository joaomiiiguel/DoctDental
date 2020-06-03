import React from 'react';
import {View, Text, Image, TouchableOpacity, SafeAreaView, StatusBar} from 'react-native';


import styles from './styles';



export default function MenuInicial(){
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" />
            <View style={styles.containerList}>
                <Text>Atestados</Text>
            </View>
            
        </SafeAreaView>
    );
}