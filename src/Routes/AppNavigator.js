import react from "react";
import TelaLogin from "../pages/TelaLogin";
import TelaPrincipal from "../pages/TelaPrincipal";
import TelaBemVindo from "../pages/TelaBemVindo";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function AppMavigator() {
    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name="BemVindo" component={TelaBemVindo} options={{ headerShown: false }} />
            <Stack.Screen name="Principal" component={TelaPrincipal} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={TelaLogin} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}