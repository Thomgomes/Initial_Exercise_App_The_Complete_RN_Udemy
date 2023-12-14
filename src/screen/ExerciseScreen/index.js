import React from 'react'
import ExerciseChosse from '../../components/ExerciseChosse'
import ExerciseContainer from '../../components/Container/ExerciseContatiner'

export default function ExerciseScreen() {
    return (
        <ExerciseContainer 
        title='Exercícios / Atividades'
        navigation='Welcome'
        >
                <ExerciseChosse
                    title='Exercício 1'
                    navigation='Exercise_1'
                    buttonText='Mostrar 2 elementos de texto'
                />
                <ExerciseChosse
                    title='Exercício 2'
                    navigation='Exercise_2'
                    buttonText='FlatList scroll na horizontal'
                />
                <ExerciseChosse
                    title='Exercício 3'
                    navigation='Exercise_3'
                    buttonText='Cores Aleatórias'
                />
                <ExerciseChosse
                    title='Exercício 4'
                    navigation='Exercise_4'
                    buttonText='Cores Aleatórias'
                />
        </ExerciseContainer>
    )
}