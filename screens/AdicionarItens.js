import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { db } from '../FirebaseConfig';

const AdicionarItens = () => {
  const [nomeItem, setNomeItem] = useState('');
  const [quantidadeItem, setQuantidadeItem] = useState('');

  const handleAdicionarItem = async () => {
    if (nomeItem.trim() === '' || quantidadeItem.trim() === '') {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    try {
      await db.collection('itens').add({
        nome: nomeItem,
        quantidade: parseInt(quantidadeItem)
      });
      setNomeItem('');
      setQuantidadeItem('');
      Alert.alert('Sucesso', 'Item adicionado com sucesso!');
    } catch (error) {
      console.error('Erro ao adicionar item:', error);
      Alert.alert('Erro', 'Ocorreu um erro ao adicionar o item. Por favor, tente novamente mais tarde.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome do Item"
        value={nomeItem}
        onChangeText={setNomeItem}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantidade"
        keyboardType="numeric"
        value={quantidadeItem}
        onChangeText={setQuantidadeItem}
      />
      <Button title="Adicionar Item" onPress={handleAdicionarItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default AdicionarItens;
