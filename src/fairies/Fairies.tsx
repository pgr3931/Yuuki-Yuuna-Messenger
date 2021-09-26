import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import tailwind from 'tailwind-rn';
import FairyIcon from './FairyIcon';

const Fairies: React.FC<{ setStart: React.Dispatch<React.SetStateAction<boolean | undefined>> }> = ({ setStart }) => {
    return (
        <TouchableWithoutFeedback onPress={() => setStart(prev => !prev)}>
            <View style={tailwind('flex flex-row justify-around my-10')}>
                <View style={tailwind('flex h-full justify-center mt-20')}>
                    <FairyIcon icon={require('../../assets/Inugami.png')} name="風" color="#EED943" fontColor="#EED943" dimensions="95%" />
                </View>
                <View style={tailwind('flex h-full justify-center mt-5')}>
                    <FairyIcon icon={require('../../assets/Aobozu.png')} name="東郷" color="#2E9FB7" fontColor="#BAEDF1" dimensions="110%" />
                </View>
                <View style={tailwind('flex h-full justify-center -mt-5')}>
                    <FairyIcon icon={require('../../assets/Kodama.png')} name="樹" color="#BADD75" fontColor="#BADD75" dimensions="110%" />
                </View>
                <View style={tailwind('flex h-full mt-3')}>
                    <FairyIcon icon={require('../../assets/Gyuki.png')} name="友奈" color="#EBA3A4" fontColor="#EBA3A4" dimensions="75%" />
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default Fairies;