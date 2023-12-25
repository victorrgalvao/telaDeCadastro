import { NavigationContainer } from '@react-navigation/native';
import "./src/config/firebase"
import { RootSiblingParent } from 'react-native-root-siblings';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Rotas from './telas/route';

export default function App() {

  return (
    <NavigationContainer>
      <RootSiblingParent>
        <Rotas/>
      </RootSiblingParent>
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
