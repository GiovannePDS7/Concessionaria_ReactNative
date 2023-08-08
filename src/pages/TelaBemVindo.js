import * as React from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Logo from '../Components/imagens/logo/Logo.js';
import LogoBaixo from '../Components/imagens/logoBaixo/LogoBaixo.js';

export default function TelaBemVindo({ navigation }) {
    return (
        <View style={styles.fundo}>

            <Logo />
            <Text style={styles.texto}>Seja Bem-Vindo(a) a nossa concessionária{'\n'}<Text style={styles.bold}>MIDNIGHT CLUB</Text></Text>
            <View style={ styles.container }>
                <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.txtBtn}> Entrar!</Text>
                </TouchableOpacity>
                <LogoBaixo/>
            </View>
            
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
        backgroundColor: '#fff',
        borderRadius: 10,
        width: '40%',
        alignSelf: 'center',
        bottom: '34%',
        alignItems: "center",
        justifyContent: "center",
    },
    txtBtn: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold'
    },
    container:{
        width: '100%',
        height: 316,
        backgroundColor: '#000',
        marginTop: 110,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        
    }

})
