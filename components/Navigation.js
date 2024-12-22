import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Inicio from '../app/Inicio';
import Registro from '../app/Registro';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={Inicio} options={{ headerShown: false }} />
        <Stack.Screen name="Registro" component={Registro} options={{ title: 'Registrar Alquiler' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
