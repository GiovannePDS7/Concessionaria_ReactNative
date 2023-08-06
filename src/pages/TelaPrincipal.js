import * as React from 'react';
import { View, Text, Button } from 'react-native';

export default function TelaPrincipal({ navigation }) {
    return (
        <View>
            <Text>TelaPrincipal</Text>
            <Button
                title="ir para próxima página"
                onPress={() => navigation.navigate('Login')}
            />
        </View>
    );
}

