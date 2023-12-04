import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import NavigationButton from '../../components/NavigationButton'
import Container from '../../components/Container'
import Title from '../../components/Title'
import ExerciseChosse from '../../components/ExerciseChosse'

export default function ExerciseScreen() {
    return (
        <Container>
            <Title title='Exercícios / Atividades' />
            <ScrollView style={styles.main}>
                <ExerciseChosse
                    title='Exercício 1'
                    navigation='Welcome'
                    buttonText='Show two Text elements'
                />
                <ExerciseChosse
                    title='Exercício 2'
                    navigation='Welcome'
                    buttonText='FlatList scroll horizontal'
                />
                <ExerciseChosse
                    title='Exercício 3'
                    navigation='Welcome'
                    buttonText='Random Colors'
                />
            </ScrollView>
        </Container>
    )
}

const styles = StyleSheet.create({
    main: {
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: 30,
    },
    viewBox:{
        paddingVertical: 20,
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