import React from 'react';
import { Circle, Path, Text, TextPath } from 'react-native-svg';
import { describeArc } from '../Helper';

const History = () => {
    return (
        <>
            <Circle r="200" stroke="#EDF5F2" strokeWidth="8" fill="#BDFBD4" />
            {/* Blue Border */}
            <Path d={describeArc(0, 0, 200, 90, 180)} fill="none" stroke="#fff" strokeWidth="18" />
            <Path d={describeArc(0, 0, 200, 90, 180)} fill="none" stroke="#A0DCEE" strokeWidth="12" />
            {/* History Button */}
            <Path d={describeArc(0, 0, 192, 109, 161)} fill="none" stroke="#fff" strokeWidth="30" id="historyButton" />
            <Path d={describeArc(0, 0, 193, 110, 160)} fill="none" stroke="#86E3FE" strokeWidth="26" />
            <Text fill="#fff" fontSize="18" fontWeight="bold" dy="7" >
                <TextPath href="#historyButton" startOffset="10">
                    ↑ 履歴
                </TextPath>
            </Text>
        </>
    );
};

export default History;