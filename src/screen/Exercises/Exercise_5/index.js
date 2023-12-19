import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ExerciseContainer from '../../../components/Container/ExerciseContatiner'

export default function Exercise_5() {
    return (
        <ExerciseContainer
            title='Conclusão de Exercícios'
            navigation='ExerciseScreen'

        >
            <View style={styles.view}>
                <View>
                    <Text style={styles.title}>
                        Conclusão
                    </Text>
                </View>
                <View>
                    <Text style={styles.text}>
                        Conclusão de Seções do curso The Complete React Native + Hooks Course
                    </Text>
                    <Text style={styles.text}>
                        Foram concluidas as atividas das seções 1, 2, 3, 4, 5, 6, 7
                    </Text>
                    <Text style={styles.text}> Aqui foi ensinado o basico para se fazer projetos com react native.</Text>
                </View>
            </View>
        </ExerciseContainer>
    )
}

const styles = StyleSheet.create({
    view: {
        paddingVertical: 20,
        marginHorizontal: 20,
        alignContent: 'center',
        alignItems: 'center',
    },
    title: {
        marginTop: 20,
        fontSize: 24,
        marginBottom: 12,
    },
    text: {
        fontSize: 18,
        marginVertical: 5,
    },
})