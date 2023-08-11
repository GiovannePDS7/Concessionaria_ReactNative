import * as React from 'react';
import { View, Text, Button } from 'react-native';
import Logo from '../Components/imagens/logo/Logo.js';

export default function TelaPrincipal({ route, navigation }) {
    const {username} =  route.params;
    return (
        <View>
            <Logo/>

                <Text>TelaPrincipal</Text>
                <Text>Nome: { username }</Text>
                <Button
                    title="Entrar!"
                    onPress={() => navigation.navigate('BemVindo')}
                />
        </View>
    );
}

