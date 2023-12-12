import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native';
import * as Animatable from 'react-native-animatable'

export default function Title(props) {
    return (
        <Animatable.View animation='fadeInLeftBig' delay={350} style={styles.boxTitle}>
            <Text style={styles.textTitle}>{props.title}</Text>
        </Animatable.View>
    )
}

const styles = StyleSheet.create({
    boxTitle: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    textTitle: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 24,
    }
});