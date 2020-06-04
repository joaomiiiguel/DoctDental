import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import MenuInicial from './MenuInicial';
import Pacientes from './Pacientes';
import NewAtend from './NewAtend';
import Agenda from './Agenda';
import CID from './CID';
import Calc from './Calc';
import Atestado from './Atestado';
import Login from './Login';
import NovoCadastro from './NovoCadastro';

export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator  initialRouteName="Login">
                <AppStack.Screen name="Login" component={Login} options={{headerShown: false}}/>
                <AppStack.Screen name="NovoCadastro" component={NovoCadastro} options={{title: 'Novo Usuário', headerStyle: {backgroundColor: '#1d80b2',},headerTintColor: '#fff', headerTitleAlign:'center' }}/>
                <AppStack.Screen name="MenuInicial" component={MenuInicial} options={{headerShown: false}}/>
                <AppStack.Screen name="Pacientes" component={Pacientes} options={{title: 'Meus Pacientes', headerStyle: {backgroundColor: '#1d80b2',},headerTintColor: '#fff', headerTitleAlign:'center' }}/>
                <AppStack.Screen name="NewAtend" component={NewAtend} options={{title: 'Novo Atendimento', headerStyle: {backgroundColor: '#1d80b2',},headerTintColor: '#fff', headerTitleAlign:'center' }}/>
                <AppStack.Screen name="Agenda" component={Agenda} options={{title: 'Agenda', headerStyle: {backgroundColor: '#1d80b2',},headerTintColor: '#fff', headerTitleAlign:'center' }}/>
                <AppStack.Screen name="CID" component={CID} options={{title: 'CID', headerStyle: {backgroundColor: '#1d80b2',},headerTintColor: '#fff', headerTitleAlign:'center' }}/>
                <AppStack.Screen name="Calc" component={Calc} options={{title: 'Calculadora', headerStyle: {backgroundColor: '#1d80b2',},headerTintColor: '#fff', headerTitleAlign:'center' }}/>
                <AppStack.Screen name="Atestado" component={Atestado} options={{title: 'Atestado', headerStyle: {backgroundColor: '#1d80b2',},headerTintColor: '#fff', headerTitleAlign:'center' }}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}

