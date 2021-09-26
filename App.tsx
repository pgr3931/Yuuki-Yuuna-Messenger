import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import tailwind from 'tailwind-rn';
import Container from './src/Container';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

const App: React.FC = () => {
  // TODO get this working
  let [fontsLoaded] = useFonts({
    'KiwiMaru': require('./assets/fonts/KiwiMaru-Regular.ttf'),
  });
  
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={tailwind('h-full')}>
        <Container />
        <StatusBar style="auto" />
      </View>
    )
  };
}

export default App;