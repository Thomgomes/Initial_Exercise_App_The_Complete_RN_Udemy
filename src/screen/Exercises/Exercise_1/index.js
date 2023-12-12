import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ExerciseContainer from '../../../components/Container/ExerciseContatiner'

export default function Exercise_1() {
  return (
    <ExerciseContainer
      title='Exercício 1'
      navigation='ExerciseScreen'
    >
      <View style={styles.viewBox}>
        <Text style={styles.textStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat distinctio ut itaque minima doloremque fuga, mollitia tenetur sequi necessitatibus. Ut.</Text>
        <Text style={styles.textStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit laudantium iusto dignissimos optio dolores, libero tempore, repellendus odio a illo excepturi omnis sequi delectus. Saepe sunt quidem mollitia commodi facere.</Text>
        <Text style={styles.observation}>(texto criado a partir de "lorem")</Text>
      </View>
    </ExerciseContainer>
  )
}

const styles = StyleSheet.create({
  viewBox: {
    paddingVertical: 20,
  },

  textStyle: {
    color: '#000000',
    fontSize: 20,
    marginTop: 10,
    marginBottom: 20,
    marginHorizontal: 30,
    alignSelf: 'flex-start',
  },
  observation: {
    color: '#8c8c8c',
    fontSize: 20,
    marginTop: 10,
    marginBottom: 20,
    marginHorizontal: 30,
    alignSelf: 'flex-start',
  },
})