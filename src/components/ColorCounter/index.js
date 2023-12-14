import { View, Text, Button } from 'react-native'
import React from 'react'

export default function ColorCounter({ color, onIncrease, onDecrease }) {
    return (
        <View>
            <Text>{color}</Text>
            <Button onPress={() => onIncrease()} title={`+ ${color}`}/>
            <Button onPress={() => onDecrease()} title={`- ${color}`}/>
        </View>
    )
}