import React, { useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';
import { Circle, Defs, G, LinearGradient, Path, Stop, Text, TextPath, TSpan } from 'react-native-svg';
import { colorSet, describeArc, durations, endAngles, lengths, timeouts } from '../Helper';

export const AnimatedPath = Animated.createAnimatedComponent(Path);
export const AnimatedTextPath = Animated.createAnimatedComponent(TextPath);
export const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const Message: React.FC<{ messageBits: string[] | null, index: number, color: 'blue' | 'green' | 'red' | 'yellow' }> = ({ messageBits, color, index }) => {
    const ref1 = useRef<any>(null);
    const ref2 = useRef<any>(null);
    const ref3 = useRef<any>(null);
    const ref4 = useRef<any>(null);
    let animationValue: Animated.Value;
    let animationValueText: Animated.Value;
    let animationValueCircle: Animated.Value;
    const d = describeArc(0, 0, index * 59 + 237, 70, endAngles[index]);

    const startAnimation = () => {
        animationValue = new Animated.Value(-ref1.current?.getTotalLength() ?? 1);
        animationValueText = new Animated.Value((index + 1) * 800);
        animationValueCircle = new Animated.Value(70);

        animationValue.addListener(offset => {
            ref1.current?.setNativeProps({ strokeDashoffset: offset.value });
            ref2.current?.setNativeProps({ strokeDashoffset: offset.value });
        })

        animationValueText.addListener(offset => {
            ref3.current?.setNativeProps({ startOffset: offset.value });
        })

        animationValueCircle.addListener(offset => {
            const d = describeArc(0, 0, index * 59 + 237, 70, offset.value);
            ref4.current?.setNativeProps({ cx: d.split(' ')[1], cy: d.split(' ')[2] });
        })

        Animated.parallel([
            Animated.timing(animationValue, {
                toValue: ref1.current?.getTotalLength() ?? 1,
                duration: 1000,
                easing: Easing.out(Easing.ease),
                useNativeDriver: true
            }),
            Animated.timing(animationValueText, {
                toValue: 35,
                duration: durations[index],
                easing: Easing.out(Easing.ease),
                useNativeDriver: true
            }),
            Animated.timing(animationValueCircle, {
                toValue: endAngles[index],
                duration: durations[index],
                easing: Easing.out(Easing.ease),
                useNativeDriver: true
            })
        ]).start();
    }

    useEffect(() => {
        const timeout = setTimeout(startAnimation, timeouts[index]);
        return () => { clearTimeout(timeout); animationValue?.removeAllListeners(); animationValueText?.removeAllListeners(); animationValueCircle?.removeAllListeners(); };
    }, [])

    return (
        <G>
            <Defs>
                <LinearGradient id={`gradient${index}`}>
                    <Stop offset="0%" stopColor={colorSet[color][0]} />
                    <Stop offset="100%" stopColor={colorSet[color][1]} />
                </LinearGradient>
            </Defs>
            <AnimatedPath
                ref={ref1}
                strokeDasharray={1500}
                strokeDashoffset={-lengths[index]}
                d={d}
                fill="none"
                stroke="#fff" strokeWidth={60} strokeLinecap="round"
                id={`msg${index}`}
            />
            <AnimatedPath
                ref={ref2}
                strokeDasharray={1500}
                strokeDashoffset={-lengths[index]}
                d={d}
                fill="none"
                stroke={`url(#gradient${index})`}
                strokeWidth={56} strokeLinecap="round"
            />
            <AnimatedCircle ref={ref4} cx="-30" cy="-30" r="29" fill={`url(#gradient${index})`} stroke="#fff" strokeWidth="2" />
            <Text fill="#446688" fontSize="18" fontWeight="bold" stroke="#fff" strokeWidth="0.4">
                <AnimatedTextPath href={`#msg${index}`} startOffset={(index + 1) * 800} ref={ref3}>
                    {messageBits?.map((msg, i) =>
                        <TSpan key={`message${index}${i}`} fill="#446688" x="0" dy={messageBits.length === 1 ? 6 : i === 0 ? -5 : i * 20}>
                            {msg}
                        </TSpan>
                    )}
                </AnimatedTextPath>
            </Text>
        </G>
    );
};

export default Message;