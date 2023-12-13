import { View, Text, StyleSheet, FlatList} from 'react-native'
import React from 'react'
import ExerciseContainer from '../../../components/Container/ExerciseContatiner'

export default function Exercise_2() {
  const base = [
    {
      name: 'Whats',
      icon: 'Whats',
    },
    {
      name: 'Github',
      icon: 'Github',
    },
    {
      name: 'Insta',
      icon: 'Insta',
    },
    {
      name: 'LinkedIn',
      icon: 'LinkedIn',
    },
    {
      name: 'Tiktok',
      icon: 'Tiktok',
    },
    {
      name: 'Thom',
      icon: 'Thom',
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
                <View>
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
          <Text style={styles.observation}>Uma "flatList" com dados basicos com a configuração na horizontal</Text>
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
  textStyle: {
    color: '#000000',
    fontSize: 20,
    marginTop: 10,
    marginRight: 20,
  },
  observation: {
    color: '#8c8c8c',
    fontSize: 20,
    marginTop: 10,
  },
})