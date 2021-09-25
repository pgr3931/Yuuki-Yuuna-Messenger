import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import tailwind from 'tailwind-rn';
import Fairies from './fairies/Fairies';
import Messages from './messages/Messages';
import bg from '../assets/background.png';

const Container: React.FC = () => {
    return (
        <ImageBackground source={bg} resizeMode="stretch" style={{ width: 'auto', height: '100%' }} >
            <View style={tailwind('h-2/4 w-full')}>
                <Messages />
            </View>
            <View style={tailwind('h-2/4 w-full')}>
                <Fairies />
            </View>
        </ImageBackground>
    );
};

export default Container;