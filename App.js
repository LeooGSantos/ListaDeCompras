import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListaDeCompras from './screens/ListaDeCompras';
import AdicionarItens from './screens/AdicionarItens';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListaDeCompras">
        <Stack.Screen 
          name="ListaDeCompras" 
          component={ListaDeCompras} 
          options={{ title: 'Lista de Compras' }} 
        />
        <Stack.Screen 
          name="AdicionarItens" 
          component={AdicionarItens} 
          options={{ title: 'Adicionar Itens' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
