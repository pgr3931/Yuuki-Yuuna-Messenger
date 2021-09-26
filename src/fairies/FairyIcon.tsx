import React, { useEffect, useRef } from 'react';
import { Animated, Easing, Image, StyleSheet, Text, View } from 'react-native';
import tailwind from 'tailwind-rn';

const randomOffset = () => {
    return Math.floor(Math.random() * (500));
}

const FairyIcon: React.FC<{ icon: any, color: string, fontColor: string, name: string, dimensions: string }> = ({ icon, name, color, dimensions, fontColor }) => {
    let animationValue = new Animated.Value(0);
    const ref = useRef<View>(null);

    const startAnimation = () => {
        animationValue.addListener(offset => ref.current?.setNativeProps({ style: { transform: [{ translateY: offset.value }] } }))
        Animated.loop(
            Animated.sequence([
                Animated.timing(animationValue, {
                    toValue: 6,
                    duration: 1000,
                    easing: Easing.inOut(Easing.ease),
                    useNativeDriver: true
                }),
                Animated.timing(animationValue, {
                    toValue: 0,
                    duration: 1000,
                    easing: Easing.inOut(Easing.ease),
                    useNativeDriver: true
                })
            ])
        ).start();
    }

    useEffect(() => {
        const timeout = setTimeout(startAnimation, randomOffset());
        return () => { clearTimeout(timeout); animationValue.removeAllListeners(); };
    }, []);

    return (
        <Animated.View ref={ref} style={{ ...tailwind('w-24 h-24 rounded-full flex justify-center items-center border-2 border-white relative'), backgroundColor: color, ...styles.shadow }}>
            <Image source={icon} style={{ ...tailwind('absolute'), height: dimensions, width: dimensions }} />
            <Text style={{ ...tailwind('absolute -bottom-9 text-2xl'), color: fontColor, ...styles.textshadow }}>{name}</Text>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    shadow: {
        shadowColor: 'rgba(0,0,0,0.4)',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 1
    },
    textshadow: {
        textShadowColor: '#3E4F56',
        textShadowRadius: 0,
    }
})

export default FairyIcon;