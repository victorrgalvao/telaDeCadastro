// TelaCadastroConfirmado.js

import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { getAuth,signOut } from 'firebase/auth';
const Home = ({ route,navigation }) => {
  const { usuario } = route.params;
const auth = getAuth();
  return (
    <View style={styles.container}>
      <Text>Login efetuado com sucesso</Text>
      {/* <Text>Nome do Usuário: {nomeUsuario}</Text> */}
      <Text>Username: {usuario.username}</Text>
      <Text>Email: {usuario.email}</Text>
      <Text>Senha: {usuario.senha}</Text>
      <Button style={styles.button} onPress={()=>{signOut(auth),navigation.goBack() }}>Sair</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }, button: {
    marginTop: 16,
  }
});

export default Home;
