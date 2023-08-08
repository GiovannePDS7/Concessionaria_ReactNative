import * as React from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Logo from '../Components/imagens/logo/Logo.js';


export default function TelaBemVindo({ navigation }) {
    return (
        <View style={styles.fundo}>

            <Logo />
            <Text style={styles.texto}>Seja Bem-Vindo(a) a nossa concessionária{'\n'}<Text style={styles.bold}>MIDNIGHT CLUB</Text></Text>

            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.txtBtn}> Entrar!</Text>
            </TouchableOpacity>

        </View >
    );
}
const styles = StyleSheet.create({
    fundo: {
        backgroundColor: '#fff',
        height: '100%'
    },
    texto: {
        textAlign: 'center',
        fontSize: 20,
        lineHeight: 40,
        marginTop: 120,
    },
    bold: {
        fontWeight: 'bold'
    },
    botao: {
        height: 60,
        position: "absolute",
        backgroundColor: '#000',
        borderRadius: 10,
        width: '40%',
        alignSelf: 'center',
        bottom: '12%',
        alignItems: "center",
        justifyContent: "center",
    },
    txtBtn: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    }

})
