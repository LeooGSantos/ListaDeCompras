import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, StyleSheet, Alert } from 'react-native';
import { db } from '../FirebaseConfig';

const ListaDeCompras = () => {
  const [itens, setItens] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection('itens').onSnapshot(snapshot => {
      const itemsList = [];
      snapshot.forEach(doc => {
        itemsList.push({ id: doc.id, ...doc.data() });
      });
      setItens(itemsList);
    });

    return () => unsubscribe();
  }, []);

  const handleExcluirItem = async (id) => {
    try {
      await db.collection('itens').doc(id).delete();
      Alert.alert('Sucesso', 'Item excluído com sucesso!');
    } catch (error) {
      console.error('Erro ao excluir item:', error);
      Alert.alert('Erro', 'Ocorreu um erro ao excluir o item. Por favor, tente novamente mais tarde.');
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={itens}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.nome} - Quantidade: {item.quantidade}</Text>
            <Button title="Excluir" onPress={() => handleExcluirItem(item.id)} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default ListaDeCompras;
