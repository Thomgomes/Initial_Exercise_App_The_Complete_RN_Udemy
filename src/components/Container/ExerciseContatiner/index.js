import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Container from '..'
import Title from '../../Title'
import BackButton from '../../BackButton'

export default function ExerciseContainer(props) {
    return (
        <Container>
            <View style={styles.header}>
                <View style={styles.headerBackButton}>
                    <BackButton
                        navigation={props.navigation}
                        text={props.text}
                    />
                </View>
                <View style={styles.headerTitle}>
                    <Title title={props.title} />
                </View>

            </View>
            <ScrollView style={styles.main}>
                <View>
                    {props.children}
                </View>
            </ScrollView>
        </Container>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        marginTop: 20,
    },
    headerBackButton: {
        alignSelf: 'center',
        marginRight: -30,
    },
    headerTitle: {
        alignSelf: 'center',
        marginRight: 'auto',
        marginLeft: 'auto',
    },
    main: {
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: 30,
    },
})