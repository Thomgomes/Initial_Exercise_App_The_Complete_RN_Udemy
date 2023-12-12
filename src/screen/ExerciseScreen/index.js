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
                    buttonText='Show two Text elements'
                />
                <ExerciseChosse
                    title='Exercício 2'
                    navigation='Exercise_2'
                    buttonText='FlatList scroll horizontal'
                />
                <ExerciseChosse
                    title='Exercício 3'
                    navigation='Exercise_3'
                    buttonText='Random Colors'
                />
        </ExerciseContainer>
    )
}