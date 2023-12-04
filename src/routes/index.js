import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ColorScreen from "../screen/ColorScreen";
import Welcome from "../screen/Welcome";
import ExerciseScreen from "../screen/ExerciseScreen";

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
                name="ColorScreen"
                component={ColorScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ExerciseScreen"
                component={ExerciseScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}