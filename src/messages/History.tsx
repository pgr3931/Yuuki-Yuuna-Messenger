import React from 'react';
import { View, StyleSheet } from 'react-native';
import tailwind from 'tailwind-rn';

const History = () => {
    return (
        <>
            <View style={{ ...tailwind('rounded-full'), ...circle.border }} />
            <View style={{ ...tailwind('rounded-full'), ...circle.background }} />
        </>
    );
};

const circle = StyleSheet.create({
    background: {
        position: 'absolute',
        left: '-50%',
        top: '-50%',
        width: '100%',
        paddingBottom: '100%',
        backgroundColor: '#BDFBD4',
        borderColor: '#EDF5F2',
        borderWidth: 3
    },
    border: {
        position: 'absolute',
        left: '-52%',
        top: '-52%',
        width: '105%',
        paddingBottom: '100%',
        backgroundColor: '#A5DFEF',
        borderColor: '#EDF5F2',
        borderWidth: 3
    },
    historyButton: {

    }
})

export default History;