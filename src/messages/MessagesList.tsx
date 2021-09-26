import React from 'react';
import { View } from 'react-native';
import Svg from 'react-native-svg';
import tailwind from 'tailwind-rn';
import Message from './Message';

const messages = [
    "あんたも登録しておいてね。    今日みたいに連絡の行き違いが無いよ",
    "これから仲良くしてくださいね。  よろしくお願いしま\nす。",
    "次こそはぼた餅食べてくださいね。 有無は言わせない。",
    "ハーピーバースデー夏凛ちゃん！  学校のや部活のことでわからないことがあったらなんでも聞いてね。"
]
const colors: ('yellow' | 'green' | 'blue' | 'red')[] = ['yellow', 'green', 'blue', 'red']

const MessagesList = () => {
    return (
        <View style={tailwind('h-full flex justify-center items-center')}>
            <Svg>
                {messages.map((msg, index) =>
                    <Message
                        key={`messageListItem${index}`}
                        messageBits={index < 3 ? msg.match(/(.|[\r\n]){1,17}/g) : msg.match(/(.|[\r\n]){1,27}/g)}
                        index={index}
                        color={colors[index]}
                    />
                )}
            </Svg>
        </View>
    );
};

export default MessagesList;