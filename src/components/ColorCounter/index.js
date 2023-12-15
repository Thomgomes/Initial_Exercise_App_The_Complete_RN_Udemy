import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function ColorCounter({ color, onIncrease, onDecrease, r, g, b }) {
    return (
        <View style={styles.container}>
            <Text style={styles.textColorName}>{color}</Text>
            <View style={styles.contentButton}>
                <TouchableOpacity
                    style={[styles.button, {backgroundColor: `rgb(${r}, ${g}, ${b})`}]}
                    onPress={() => onIncrease()}
                >
                    <Text style={styles.textButton}>+ {color}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, {backgroundColor: `rgb(${r}, ${g}, ${b})`}]}
                    onPress={() => onDecrease()}
                >
                    <Text style={styles.textButton}>- {color}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },
    textColorName: {
        alignSelf: 'center',
        fontSize: 22,
        marginBottom: 15,
    },
    contentButton: {
        flexDirection: 'row'
    },
    button: {
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 14,
        width: '40%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 15
    },
    textButton: {
        fontSize: 20,
        color: '#fff',
    },
})