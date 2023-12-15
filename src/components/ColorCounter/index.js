import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function ColorCounter({ color, color1, color10, onIncrease1, onDecrease1, onIncrease10, onDecrease10, r, g, b }) {
    return (
        <View style={styles.container}>
            <Text style={styles.textColorName}>{color}</Text>
            <View style={styles.contentButton}>
                <TouchableOpacity
                    style={[styles.button, {backgroundColor: `rgb(${r}, ${g}, ${b})`}]}
                    onPress={() => onIncrease1()}
                >
                    <Text style={styles.textButton}>+ {color1}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, {backgroundColor: `rgb(${r}, ${g}, ${b})`}]}
                    onPress={() => onDecrease1()}
                >
                    <Text style={styles.textButton}>- {color1}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.contentButton}>
                <TouchableOpacity
                    style={[styles.button, {backgroundColor: `rgb(${r}, ${g}, ${b})`}]}
                    onPress={() => onIncrease10()}
                >
                    <Text style={styles.textButton}>+ {color10}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, {backgroundColor: `rgb(${r}, ${g}, ${b})`}]}
                    onPress={() => onDecrease10()}
                >
                    <Text style={styles.textButton}>- {color10}</Text>
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
        marginBottom: 10,
    },
    contentButton: {
        flexDirection: 'row'
    },
    button: {
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        width: '40%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 10
    },
    textButton: {
        fontSize: 18,
        color: '#fff',
    },
})