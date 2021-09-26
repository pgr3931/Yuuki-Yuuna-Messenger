import React, { useEffect, useRef, useState } from 'react';
import { Animated, Easing, ImageBackground, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import tailwind from 'tailwind-rn';
import Fairies from './fairies/Fairies';
import { describeArc, durations, endAngles, timeouts } from './Helper';
import History from './messages/History';
import MessagesList from './messages/MessagesList';

const AnimatedPath = Animated.createAnimatedComponent(Path);

const Container: React.FC = () => {
    const ref = useRef<any>(null);
    const ref2 = useRef<any>(null);
    const ref3 = useRef<any>(null);
    const ref4 = useRef<any>(null);
    const [start, setStart] = useState<boolean>();
    const [index, setIndex] = useState<number>(0);
    let animationValueCircle = new Animated.Value(70);

    const startAnimation = (index: number) => {
        Animated.timing(animationValueCircle, {
            toValue: endAngles[index],
            duration: durations[index],
            easing: Easing.out(Easing.ease),
            useNativeDriver: true
        }).start();
    }

    useEffect(() => {
        if (start) {
            // Inugami
            animationValueCircle.addListener(offset => {
                setIndex(0);
                const circlePos = describeArc(0, 0, 237, 70, offset.value);
                ref.current?.setNativeProps({ d: "M 50 700 L " + circlePos.split(' ')[1] + ' ' + circlePos.split(' ')[2] });
            })
            startAnimation(0);

            // Kodama
            const timeout = setTimeout(() => {
                setIndex(1);
                animationValueCircle.removeAllListeners();
                animationValueCircle.setValue(70);
                animationValueCircle.addListener(offset => {
                    const circlePos = describeArc(0, 0, 59 + 237, 70, offset.value);
                    ref3.current?.setNativeProps({ d: "M 260 620 L " + circlePos.split(' ')[1] + ' ' + circlePos.split(' ')[2] });
                })
                startAnimation(1);
            }, timeouts[1]);

            // Aobouzu
            const timeout2 = setTimeout(() => {
                setIndex(2);
                animationValueCircle.removeAllListeners();
                animationValueCircle.setValue(70);
                animationValueCircle.addListener(offset => {
                    const circlePos = describeArc(0, 0, 2 * 59 + 237, 70, offset.value);
                    ref2.current?.setNativeProps({ d: "M 160 680 L " + circlePos.split(' ')[1] + ' ' + circlePos.split(' ')[2] });
                })
                startAnimation(2);
            }, timeouts[2]);

            // Gyuuki
            const timeout3 = setTimeout(() => {
                setIndex(3);
                animationValueCircle.removeAllListeners();
                animationValueCircle.setValue(70);
                animationValueCircle.addListener(offset => {
                    const circlePos = describeArc(0, 0, 3 * 59 + 237, 70, offset.value);
                    ref4.current?.setNativeProps({ d: "M 360 560 L " + circlePos.split(' ')[1] + ' ' + circlePos.split(' ')[2] });
                })
                startAnimation(3);
            }, timeouts[3]);

            return () => {
                clearTimeout(timeout);
                clearTimeout(timeout2);
                clearTimeout(timeout3);
                animationValueCircle.removeAllListeners();
            };
        }
    }, [start])

    return (
        <ImageBackground source={require('../assets/background.png')} resizeMode="stretch" style={{ width: 'auto', height: '100%' }} >
            {start &&
                <>
                    <Svg width="100%" height="100%">
                        {/* Inugami */}
                        {index === 0 && <AnimatedPath ref={ref} stroke="#fff" strokeWidth="4" />}
                        {/* Kodama */}
                        {index === 1 && <AnimatedPath ref={ref3} stroke="#fff" strokeWidth="4" />}
                        {/* Aobouzu */}
                        {index === 2 && <AnimatedPath ref={ref2} stroke="#fff" strokeWidth="4" />}
                        {/* Gyuuki */}
                        {index === 3 && <AnimatedPath ref={ref4} stroke="#fff" strokeWidth="4" />}
                    </Svg>
                </>
            }
            <View style={tailwind('absolute top-0 bottom-0 left-0 right-0')}>
                <View style={tailwind('h-full')}>
                    <Svg>
                        <History />
                        {start &&
                            <MessagesList />
                        }
                    </Svg>
                </View>
            </View>
            <View style={tailwind('absolute top-1/2 bottom-0 left-0 right-0')}>
                <View style={tailwind('h-full w-full')}>
                    <Fairies setStart={setStart} />
                </View>
            </View>

        </ImageBackground>
    );
};

export default Container;