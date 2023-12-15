import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import NavigationButton from '../NavigationButton'

export default function ExerciseChosse(props) {
    return (
        <View style={styles.viewBox}>
            <Text style={styles.textStyle}>{props.title}</Text>
            <NavigationButton
                navigation={props.navigation}
                text={props.buttonText}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    viewBox:{
        paddingVertical: 10,
    },

    textStyle: {
        color: '#000000',
        fontSize: 20,
        marginTop: 10,
        marginBottom: 20,
        marginLeft: 30,
        alignSelf: 'flex-start',
    },
})