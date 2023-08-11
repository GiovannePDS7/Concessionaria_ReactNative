import * as React from 'react';
import { View, Text, Button } from 'react-native';
import Logo from '../Components/imagens/logo/Logo.js';

export default function TelaPrincipal({ route, navigation }) {
    return (
        <View>
            <Logo/>

                <Text>TelaPrincipal</Text>
                <Button
                    title="Entrar!"
                    onPress={() => navigation.navigate('BemVindo')}
                />
        </View>
    );
}

