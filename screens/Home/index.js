import React from 'react';
import { View, Text, Button } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      <Button 
        title="Login" 
        onPress={() => navigation.navigate('Login')} 
      />
      <Button 
        title="Sign Up" 
        onPress={() => navigation.navigate('SignUp')} 
      />
      <Button 
        title="Adicionar Item" 
        onPress={() => navigation.navigate('AdicionarItem')} 
      />
      <Button 
        title="Lista de Compras" 
        onPress={() => navigation.navigate('ListaDeCompras')} 
      />
    </View>
  );
};

export default Home;
