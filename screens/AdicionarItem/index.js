import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, Text } from 'react-native'; 
import { db } from '../../FirebaseConfig';

const AdicionarItens = () => {
  const [nomeItem, setNomeItem] = useState('');
  const [quantidadeItem, setQuantidadeItem] = useState('');
  const [mensagem, setMensagem] = useState('');

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
      setMensagem('Item adicionado com sucesso!');
      setTimeout(() => {
        setMensagem('');
      }, 3000); 
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
      {mensagem ? <Text style={styles.mensagem}>{mensagem}</Text> : null}
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
  mensagem: {
    marginTop: 10,
    color: 'green',
    fontSize: 16,
  },
});

export default AdicionarItens;
