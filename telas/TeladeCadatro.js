// CadastroUsuarioScreen.js

import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import * as yup from 'yup';
import Toast from 'react-native-root-toast';
import { getAuth, createUserWithEmailAndPassword ,updateProfile} from "firebase/auth";
const TelaCadastro = () => {
    const auth = getAuth();
    const navigation = useNavigation();
    const [usuario, setUsuario] = useState({
      username: '',
      email: '',
      senha: ''
    });

    // objeto que passara pela validação usando a bliblioteca yup
    const schema = yup.object({
      username: yup.string().required('username obrigatorio'),
      email: yup.string().email('o email nao e valido').required('o email nao pde ser vazio'),
      senha: yup.string().min(6).required('a senha nao pde ser vazio')

    })
    const validacao = async () => {
      // const valido = await schema.isValid(usuario)
      try {
        await schema.validate(usuario)
        await createUserWithEmailAndPassword(auth,usuario.email,usuario.senha)
        const usuarioAtual = auth.currentUser;
        await updateProfile(usuarioAtual,{displayName:usuario.nome})
        Toast.show('usuario cadastrado com sucesso')
        // se a validação for true navegara para a proxima tela e passara os usuario como parametro
    
          navigation.navigate('cadastro-resultado', { usuario });
          setUsuario({ ...usuario, email:'',senha:'' })
       

      } catch (error) {
        Toast.show(error.message)
      }
    }

    return (
      <View style={styles.container}>
        <TextInput
          label="Nome do Usuário"
          value={usuario.username}
          onChangeText={value => setUsuario({...usuario,username:value})}
          
          style={styles.input}
        />
        <TextInput
          label="Email"
          keyboardType='email-address'
          value={usuario.email}
          onChangeText={value => setUsuario({...usuario,email:value})}
        
          style={styles.input}
        />
        <TextInput
          label="Senha"
          value={usuario.senha}
          onChangeText={value => setUsuario({...usuario,senha:value})}
          secureTextEntry
          style={styles.input}
        />
        <Button mode="contained" onPress={validacao} style={styles.button}>
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
      backgroundColor: '#004'
    },
    input: {
      marginBottom: 8,
    },
    button: {
      marginTop: 16,
    },
  });

  export default TelaCadastro;
