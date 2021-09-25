import React from 'react';
import { View } from 'react-native';
import tailwind from 'tailwind-rn';
import History from './History';

const Messages = () => {
    return (
        <View style={tailwind('h-full')}>
            <History/>
        </View>
    );
};

export default Messages;