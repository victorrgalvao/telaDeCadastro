import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import Toast from 'react-native-root-toast';
import * as yup from 'yup';
const TelaLogin = () => {
    const navigation = useNavigation();
    const auth = getAuth();
    const [usuario, setUsuario] = useState({
        email: '',
        senha: ''
    });
    // const [email, setEmail] = useState('');
    // const [senha, setSenha] = useState('');

    // objeto que passara pela validação usando a bliblioteca yup
    const schema = yup.object({
        email: yup.string().email('o email nao e valido').required('o email nao pde ser vazio'),
        senha: yup.string().min(6).required('a senha nao pde ser vazio')

    })
    const validacao = async () => {
        // const valido = await schema.isValid(usuario)
        try {
            await schema.validate(usuario)
            await signInWithEmailAndPassword(auth, usuario.email, usuario.senha)
            // se a validação for true navegara para a proxima tela e passara os usuario como parametro

            navigation.navigate('Home', { usuario });

            setUsuario({ ...usuario, email:'',senha:'' })
        } catch (error) {
            Toast.show(error.message)
        }
    }

    const handleNavigateToCadastro = () => {
        navigation.navigate('cadastro');
    };
    return (

        <View style={styles.container}>

            <TextInput
                label="Email"
                keyboardType='email-address'
                value={usuario.email}
                onChangeText={value => setUsuario({ ...usuario, email: value })}
                style={styles.input}
            />
            <TextInput
                label="Senha"
                value={usuario.senha}
                onChangeText={value => setUsuario({ ...usuario, senha: value })}
                secureTextEntry
                style={styles.input}
            />


            <Button mode="contained" onPress={validacao} style={styles.button}>Login</Button>
            <Button mode="contained" onPress={handleNavigateToCadastro} style={styles.button}>Cadastrar-se</Button>
        </View>

    );



}

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


export default TelaLogin;