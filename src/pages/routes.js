import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import MenuInicial from './MenuInicial';

export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator  initialRouteName="MenuInicial">
                <AppStack.Screen name="MenuInicial" component={MenuInicial} options={{headerShown: false}}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}

