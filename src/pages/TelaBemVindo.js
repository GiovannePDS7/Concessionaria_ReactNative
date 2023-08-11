import * as React from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Logo from '../Components/imagens/logo/Logo.js';
import LogoBaixo from '../Components/imagens/logoBaixo/LogoBaixo.js';


export default function TelaBemVindo({ navigation }) {
    return (

        <View style={styles.fundo}>
            <Logo />
            <Text style={styles.texto}>Seja Bem-Vindo(a) a nossa concessionária{'\n'}<Text style={styles.bold}>MIDNIGHT CLUB</Text></Text>
            <View style={styles.container}>
                <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.txtBtn}> Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao2} onPress={() => navigation.navigate('Principal')}>
                    <Text style={styles.txtBtn2}> Continuar sem Login</Text>
                </TouchableOpacity>
                <LogoBaixo />
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
        fontWeight: 'bold',
    },
    botao: {
        height: 60,
        position: "absolute",
        backgroundColor: '#fff',
        borderRadius: 10,
        width: '40%',
        alignSelf: 'center',
        bottom: '40%',
        alignItems: "center",
        justifyContent: "center",
    },
    txtBtn: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold'
    },
    container: {
        width: '100%',
        height: 352,
        backgroundColor: '#000',
        marginTop: 110,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
    },

    botao2: {
        height: 23,
        position: "absolute",
        width: '38.5%',
        alignSelf: 'center',
        bottom: '26%',
        borderBottomLeftRadius: 6.5,
        borderTopLeftRadius: 6.5,
        borderBottomRightRadius: 6.5,
        borderTopRightRadius: 6.5,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        alignItems: "center",
        borderColor: '#fff',
        justifyContent: "center",
    },
    txtBtn2: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
        letterSpacing: 1,
    },

})
