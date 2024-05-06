import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

function SignUpScreen({ navigation }) {
  const [formInputs, setFormInputs] = useState({ email: '', password: '' });

  const changeEmail = (value) => {
    setFormInputs({ ...formInputs, email: value });
  };

  const changePassword = (value) => {
    setFormInputs({ ...formInputs, password: value });
  };

  const signUp = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, formInputs.email, formInputs.password)
      .then((userCredential) => {
        navigation.navigate('Home');
      })
      .catch((error) => {
        const errorMessage = error.message;
        Alert.alert('Error', errorMessage);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={formInputs.email}
          onChangeText={changeEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={formInputs.password}
          onChangeText={changePassword}
          secureTextEntry={true}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Sign Up" onPress={signUp} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textTransform: 'uppercase',
  },
  formContainer: {
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
});

export default SignUpScreen;
