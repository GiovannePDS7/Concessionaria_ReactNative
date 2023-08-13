import react from "react";
import TelaLogin from "../pages/TelaLogin";
import TelaPrincipal from "../pages/TelaPrincipal";
import TelaBemVindo from "../pages/TelaBemVindo";
import TelaCadastro from "../pages/TelaCadastro";
import TelaEsqueciSenha from "../pages/TelaEsqueciSenha";
import TelaConfirmCadastro from "../pages/TelaConfirmCadastro";
import TelaEmail from "../pages/TelaEmail";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function AppMavigator() {
    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name="BemVindo" component={TelaBemVindo} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={TelaLogin} options={{ headerShown: false }} />
            <Stack.Screen name="Cadastro" component={TelaCadastro} options={{ headerShown: false }} />
            <Stack.Screen name="EsqueciSenha" component={TelaEsqueciSenha} options={{ headerShown: false }} />
            <Stack.Screen name="Email" component={TelaEmail} options={{ headerShown: false }} />
            <Stack.Screen name="ConfirmCadastro" component={TelaConfirmCadastro} options={{ headerShown: false }} />
            <Stack.Screen name="Principal" component={TelaPrincipal} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}