import * as React from 'react';
import { View, Text, Button } from 'react-native';

export default function TelaPrincipal({ route, navigation }) {
    const {username} =  route.params;
    return (
        <View>
            <Text>TelaPrincipal</Text>
            <Text>Nome: { username }</Text>
            <Button
                title="ir para próxima página"
                onPress={() => navigation.navigate('BemVindo')}
            />
        </View>
    );
}

