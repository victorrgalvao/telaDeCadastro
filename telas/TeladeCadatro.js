// CadastroUsuarioScreen.js

import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const CadastroUsuarioScreen = () => {
  const navigation = useNavigation();
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleCadastro = () => {
    if (nomeUsuario !== '' && email !== '' && senha !== '') {
      console.log('Nome do Usuário:', nomeUsuario);
      console.log('Email:', email);
      console.log('Senha:', senha);

      // Passa os dados para a próxima tela
      navigation.navigate('cadastro-resultado', {
        nomeUsuario,
        email,
        senha,
      });
    } else {
      console.log('Preencha todos os campos!');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Nome do Usuário"
        value={nomeUsuario}
        onChangeText={text => setNomeUsuario(text)}
        style={styles.input}
      />
      <TextInput
        label="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        style={styles.input}
      />
      <TextInput
        label="Senha"
        value={senha}
        onChangeText={text => setSenha(text)}
        secureTextEntry
        style={styles.input}
      />
      <Button mode="contained" onPress={handleCadastro} style={styles.button}>
        Confirmar Cadastro
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    marginBottom: 8,
  },
  button: {
    marginTop: 16,
  },
});

export default CadastroUsuarioScreen;
