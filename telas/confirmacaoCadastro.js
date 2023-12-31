// TelaCadastroConfirmado.js

import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const TelaCadastroConfirmado = ({ route }) => {
  const { usuario } = route.params;

  return (
    <View style={styles.container}>
      <Text>Cadastro efetuado com sucesso</Text>
      {/* <Text>Nome do Usuário: {nomeUsuario}</Text> */}
      <Text>Email: {usuario.email}</Text>
      <Text>Senha: {usuario.senha}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TelaCadastroConfirmado;
