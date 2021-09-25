import React from 'react';
import { View } from 'react-native';
import tailwind from 'tailwind-rn';

const Message: React.FC<{msg: string}> = () => {
    // const characters = text.split('');
    return (
        <View style={tailwind('h-full flex justify-center items-center')}>
            
        </View>
    );
};

export default Message;