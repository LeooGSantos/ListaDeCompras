import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from "@react-native-firebase/auth";

function LoginScreen({ navigation }) {
  const [formInputs, setFormInputs] = useState({ email: '', password: '' });
  const [loginMessage, setLoginMessage] = useState('');

  const login = async () => {
    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, formInputs.email, formInputs.password);

      navigation.navigate('Home');

      setFormInputs({ email: '', password: '' });

      setLoginMessage('Login feito!');
    } catch (error) {
      
      Alert.alert('Erro', 'Não foi possível fazer o login. Verifique suas credenciais e tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log in</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={formInputs.email}
          onChangeText={(text) => setFormInputs({ ...formInputs, email: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={formInputs.password}
          onChangeText={(text) => setFormInputs({ ...formInputs, password: text })}
          secureTextEntry={true}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={login} />
      </View>
      {loginMessage !== '' && <Text style={styles.message}>{loginMessage}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textTransform: 'uppercase',
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    height: 40,
    marginVertical: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    width: '60%',
  },
  message: {
    marginTop: 20,
    color: 'green',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
