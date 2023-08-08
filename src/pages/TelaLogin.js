import * as React from 'react';
import { View, Text, Button } from 'react-native';

export default function TelaLogin({ navigation }) {
    return (
        <View>
            <Text>TelaLogin</Text>
            <Button
                title='Voltar'
                onPress={() => navigation.navigate('BemVindo')}
            />
        </View>
    );
}

