import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaLogin from './telaLogin';
import Home from './home'
import CadastroUsuarioScreen from './TeladeCadatro';
import TelaCadastroConfirmado from './confirmacaoCadastro';
import TelaCadastro from './TeladeCadatro';


export default function Rotas() {
    const stack = createNativeStackNavigator();
 return (
    <stack.Navigator initialRouteName='login'>
    <stack.Screen options={{headerShown:false}} name='login' component={TelaLogin}></stack.Screen>
    <stack.Screen name='Home' component={Home}></stack.Screen>
    <stack.Screen name='cadastro' component={TelaCadastro}></stack.Screen>
    <stack.Screen name='cadastro-resultado' component={TelaCadastroConfirmado}></stack.Screen>
  </stack.Navigator>
  );
}