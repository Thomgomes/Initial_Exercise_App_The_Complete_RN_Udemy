import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React from 'react'
import ExerciseContainer from '../../../components/Container/ExerciseContatiner'
import { FontAwesome, AntDesign, FontAwesome5 } from '@expo/vector-icons'

export default function Exercise_2() {
  const base = [
    {
      name: 'Whats',
      icon: <FontAwesome name='whatsapp' size={35} style={styles.icon} />,
    },
    {
      name: 'Github',
      icon: <AntDesign name='github' size={35} style={styles.icon} />,
    },
    {
      name: 'Instagram',
      icon: <AntDesign name='instagram' size={35} style={styles.icon} />,
    },
    {
      name: 'LinkedIn',
      icon: <AntDesign name='linkedin-square' size={35} style={styles.icon} />,
    },
    {
      name: 'Tiktok',
      icon: <FontAwesome5 name='tiktok' size={35} style={styles.icon} />,
    },
  ]
  return (
    <ExerciseContainer
      title='Exercício 2'
      navigation='ExerciseScreen'
    >
      <View style={styles.viewBox}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={base => base.name}
          style={styles.flatList}
          data={base}
          renderItem={({ item }) => {
            return (
              <View>
                <View style={styles.rangeButton}>
                  <Text style={styles.textStyle}>
                    {item.name}
                  </Text>
                  <Text style={styles.textStyle}>
                    {item.icon}
                  </Text>
                </View>
              </View>
            )
          }}
        />

        <View>
          <Text style={styles.observation}>Uma "flatList" com dados basicos com a configuração na horizontal.</Text>
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
  flatList: {
    paddingVertical: 20,
  },
  rangeButton: {
    marginRight: 10,
    width: 98,
    height: 98,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#6AB7E2'
  },
  textStyle: {
    color: '#000000',
    fontSize: 20,
    marginTop: 10,
    alignSelf: 'center',
  },
  observation: {
    color: '#8c8c8c',
    fontSize: 20,
    marginTop: 10,
  },
  icon: {
    color: '#6AB7E2'
  },
})