import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable'


export default function BackButton(props) {
    const navigation = useNavigation()

    return (
        <Animatable.View animation='flipInY' delay={850}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate(props.navigation)}
            >
                <Text style={styles.textButton}>{`<`}</Text>
            </TouchableOpacity>
        </Animatable.View>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 50,
        backgroundColor: 'transparent',
        marginLeft: 10,
        padding: 8,
        paddingHorizontal: 15,
    },
    textButton: {
        fontSize: 20,
        color: '#fff'
    }
});