import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


export default function BackButton(props) {
    const navigation = useNavigation()

    return (
        <View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate(props.navigation)}
            >
                <Text style={styles.textButton}>{`<`}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 20,
        marginRight: 'auto',
    },
    textButton: {
        fontSize: 20,
        color: '#fff'
    }
});