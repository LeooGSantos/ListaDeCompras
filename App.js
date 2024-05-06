import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Login from './screens/Login';
import Exit from './screens/Exit';
import AdicionarItem from './screens/AdicionarItem'; 
import ListaDeCompras from './screens/ListaDeCompras'; 

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ title: 'Home' }} 
        />
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ title: 'Login' }} 
        />
        <Stack.Screen 
          name="Exit" 
          component={Exit} 
          options={{ title: 'Exit' }} 
        />
        <Stack.Screen 
          name="AdicionarItem" 
          component={AdicionarItem} 
          options={{ title: 'Adicionar Item' }} 
        />
        <Stack.Screen 
          name="ListaDeCompras" 
          component={ListaDeCompras} 
          options={{ title: 'Lista de Compras' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
