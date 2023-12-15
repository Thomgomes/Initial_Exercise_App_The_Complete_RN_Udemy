import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import ExerciseContainer from '../../../components/Container/ExerciseContatiner'

export default function Exercise_3() {
  const [colors, setColors] = useState([])

  const randomRgb = () => {

    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)

    return `rgb(${red}, ${green}, ${blue})`
  }

  return (
    <ExerciseContainer
      title='Exercício 3'
      navigation='ExerciseScreen'
    >
      <View style={styles.viewBox}>
        <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setColors([...colors, randomRgb()])
        }}>
          <Text style={styles.textButton}>Gerar Coras</Text>
        </TouchableOpacity>
        <View style={styles.colorcontent}>
          <View style={[styles.color, { backgroundColor: 'rgb(106, 183, 226)' }]} />
          <Text style={styles.colorText}>Cor rgb(106, 183, 226)</Text>
        </View>
        <FlatList
          keyExtractor={item => item}
          data={colors}
          style={styles.colorcontent}
          renderItem={({ item }) => {
            return (
              <View style={styles.colorcontent}>
                <View style={[styles.color, { backgroundColor: item }]} />
                <Text style={styles.colorText}>{`Cor ${item}`}</Text>
              </View>
            )
          }}
        />
        <Text style={styles.observation}>Ao clicar no botão de "gerar cor", ele aleatoriamente gera um cor e bota num vetor, assim renderizando na tela dentro de um componente de "flatList".</Text>
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
  colorcontent: {
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