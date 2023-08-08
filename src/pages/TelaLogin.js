import * as React from 'react';
import { TextInput, View, Text, Button } from 'react-native';

export default function TelaLogin({ navigation }) {
    const [ username, SetUsername ] = React.useState('');
    return (
        <View>
            <Text>TelaLogin</Text>
            <TextInput
                placeholder='Nome: '
                value={username}
                onChangeText={SetUsername}                
            />
            <Button
                title='Voltar'
                onPress={() => navigation.navigate('Principal', {username})}
            />
        </View>
    );
}

