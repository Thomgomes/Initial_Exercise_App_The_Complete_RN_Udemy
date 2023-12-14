import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import ColorCounter from '../../../components/ColorCounter'
import ExerciseContainer from '../../../components/Container/ExerciseContatiner'


export default function Exercise_4() {
    const [red, setRed] = useState(106)
    const [green, setGreen] = useState(183)
    const [blue, setBlue] = useState(226)

    return (
        <ExerciseContainer
            title='Exercício 4'
            navigation='ExerciseScreen'
        >
            <View style={styles.viewBox}>

                <ColorCounter
                    onIncrease={() => setRed(red + 1)}
                    onDecrease={() => setRed(red - 1)}
                    color='Vermelho'                   
                />
                <ColorCounter
                    onIncrease={() => setGreen(green + 1)}
                    onDecrease={() => setGreen(green - 1)}
                    color='Verde' 
                />
                <ColorCounter
                    onIncrease={() => setBlue(blue + 1)}
                    onDecrease={() => setBlue(blue - 1)}
                    color='Azul'
                />

                <View style={styles.colorContent}>
                    <View style={[styles.color, { backgroundColor: `rgb(${red}, ${green}, ${blue})` }]} />
                    <Text style={styles.colorText}>{`Cor rgb(${red}, ${green}, ${blue})`}</Text>
                </View>
            </View>

        </ExerciseContainer>
    )
}

const styles = StyleSheet.create({
    viewBox: {
        paddingVertical: 20,
        marginHorizontal: 20,
        alignContent: 'center',
        alignItems: 'center',

    },
    button: {
        borderRadius: 50,
        backgroundColor: '#6AB7E2',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 14,
        paddingHorizontal: 14,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 10,
    },
    textButton: {
        fontSize: 20,
        color: '#fff'
    },
    colorContent: {
        alignSelf: 'baseline',
        flexDirection: 'row',
        marginBottom: 8,
    },
    color: {
        height: 100,
        width: 100,
        borderRadius: 10
    },
    colorText: {
        alignSelf: 'center',
        color: '#000000',
        fontSize: 20,
        paddingLeft: 20,
    },
    observation: {
        color: '#8c8c8c',
        fontSize: 20,
        marginTop: 10,
    },
})