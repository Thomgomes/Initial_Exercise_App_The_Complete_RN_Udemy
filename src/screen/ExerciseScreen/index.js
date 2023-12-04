import { View, Text } from 'react-native'
import React from 'react'
import NavigationButton from '../../components/NavigationButton'
import Container from '../../components/Container'

export default function ExerciseScreen() {
    return (
        <Container>
            <View>
                <Text>Exercicio 1</Text>
                <NavigationButton
                    navigation='ExerciseScreen'
                    text='Ir à tela de Atividades'
                />
            </View>
        </Container>
    )
}