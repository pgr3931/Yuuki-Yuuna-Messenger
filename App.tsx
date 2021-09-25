import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import tailwind from 'tailwind-rn';
import Container from './src/Container';

const App: React.FC = () => {
  return (
    <View style={tailwind('h-full')}>
      <Container />
      <StatusBar style="auto" />
    </View>
  );
}

export default App;