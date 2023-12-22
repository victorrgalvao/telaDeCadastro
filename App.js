import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CadastroUsuarioScreen from './telas/TeladeCadatro';
import TelaCadastroConfirmado from './telas/confirmacaoCadastro';

export default function App() {
  const stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='cadastro'>
        <stack.Screen name='cadastro' component={CadastroUsuarioScreen}></stack.Screen>
        <stack.Screen name='cadastro-resultado' component={TelaCadastroConfirmado}></stack.Screen>
      </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
