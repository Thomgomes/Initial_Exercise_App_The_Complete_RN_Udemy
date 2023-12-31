import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "../screen/Welcome";
import ExerciseScreen from "../screen/ExerciseScreen";
import Exercise_1 from "../screen/Exercises/Exercise_1";
import Exercise_2 from "../screen/Exercises/Exercise_2";
import Exercise_3 from "../screen/Exercises/Exercise_3";
import Exercise_4 from "../screen/Exercises/Exercise_4";
import Exercise_5 from "../screen/Exercises/Exercise_5";

const Stack = createNativeStackNavigator()

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Welcome'
                component={Welcome}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ExerciseScreen"
                component={ExerciseScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Exercise_1"
                component={Exercise_1}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Exercise_2"
                component={Exercise_2}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Exercise_3"
                component={Exercise_3}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Exercise_4"
                component={Exercise_4}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Exercise_5"
                component={Exercise_5}
                options={{ headerShown: false }}
            />
        
        </Stack.Navigator>
    )
}