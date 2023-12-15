import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import ColorCounter from '../../../components/ColorCounter'
import ExerciseContainer from '../../../components/Container/ExerciseContatiner'


export default function Exercise_4() {
    const [red, setRed] = useState(106)
    const [green, setGreen] = useState(183)
    const [blue, setBlue] = useState(226)

    const redLimit = () => {
        if (red > 255) { return setRed(255) } else if (red < 0) { return setRed(0) }
    }
    const greenLimit = () => {
        if (green > 255) { return setGreen(255) } else if (green < 0) { return setGreen(0) }
    }
    const blueLimit = () => {
        if (blue > 255) { return setBlue(255) } else if (blue < 0) { return setBlue(0) }
    }

    redLimit(), greenLimit(), blueLimit()
    return (
        <ExerciseContainer
            title='Exercício 4'
            navigation='ExerciseScreen'
        >
            <View style={styles.viewBox}>

                <ColorCounter
                    onIncrease1={() => setRed(red + 1)}
                    onIncrease10={() => setRed(red + 10)}
                    onDecrease1={() => setRed(red - 1)}
                    onDecrease10={() => setRed(red - 10)}
                    color='Vermelho'
                    color1='1 Vermelho'
                    color10='10 Vermelho'
                    r={red}
                    g={green}
                    b={blue}
                />
                <ColorCounter
                    onIncrease1={() => setGreen(green + 1)}
                    onIncrease10={() => setGreen(green + 10)}
                    onDecrease1={() => setGreen(green - 1)}
                    onDecrease10={() => setGreen(green - 10)}
                    color='Verde'
                    color1='1 Verde'
                    color10='10 Verde'
                    r={red}
                    g={green}
                    b={blue}
                />
                <ColorCounter
                    onIncrease1={() => setBlue(blue + 1)}
                    onIncrease10={() => setBlue(blue + 10)}
                    onDecrease1={() => setBlue(blue - 1)}
                    onDecrease10={() => setBlue(blue - 10)}
                    color='Azul'
                    color1='1 Azul'
                    color10='10 Azul'
                    r={red}
                    g={green}
                    b={blue}
                />

                <View style={styles.colorContent}>
                    <View style={[styles.color, { backgroundColor: `rgb(${red}, ${green}, ${blue})` }]} />
                    <Text style={styles.colorText}>{`Cor rgb(${red}, ${green}, ${blue})`}</Text>
                </View>
                <Text style={styles.observation}>{`Ao clicar em cada um dos seguintes botões disponiveis, ativa uma função que acrescenta ou diminui o valor "rgb", que por conta de um estado constante de alteração muda tanto o valor do número visualmente ativo logo em cima, quanto na cor do cubo e dos botões.\n*Todos os numeros dentro do padrão rbg tem um limete que vai de 0 à 255*`}</Text>
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
    colorContent: {
        alignSelf: 'baseline',
        flexDirection: 'row',
        marginTop: 15,
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