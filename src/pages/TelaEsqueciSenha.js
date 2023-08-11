import * as React from 'react';
import { TextInput, View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Logo from '../Components/imagens/logo/Logo.js';

export default function TelaEsqueciSenha({ navigation }) {
    const gerarNumeroAleatorio = () => {
        const randomNum = Math.random() * 99;
        if (randomNum.toFixed() < 10){
            return '0' + randomNum.toFixed();
        }
        return randomNum.toFixed(); 
    };

    return (
        <ScrollView style={styles.fundo}>
            <View>
                <TouchableOpacity style={styles.botaoVoltar} onPress={() => navigation.goBack()}>
                    <Text style={styles.txtBtnVoltar}> ←Voltar</Text>
                </TouchableOpacity>
                <Logo />
                <Text style={styles.texto}>Verifique sua caixa de Email que foi cadastrada no {'\n'}<Text style={styles.bold}>MIDNIGHT CLUB</Text></Text>
                <View style={styles.numero}>
                    <Text style={styles.numeroAleatorio}>{gerarNumeroAleatorio()}</Text>
                </View>
                <Text style={styles.texto}>Selecione o código acima em sua caixa de email{'\n'} para redefinir sua senha</Text>
                <TouchableOpacity style={styles.botao2} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.txtBtn2}>Voltar ao Login</Text>
                </TouchableOpacity>
            </View >
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    fundo: {
        backgroundColor: '#fff',
        height: '100%'
    },
    botaoVoltar: {
        height: 20,
        borderRadius: 10,
        width: '20%',
        alignItems: "center",
        justifyContent: "center",
        marginTop: '2%',
    },
    txtBtnVoltar: {
        fontSize: 15,
        color: '#4C0051',
        fontWeight: 'bold',
        letterSpacing: 1.5,
    },
    texto: {
        textAlign: 'center',
        fontSize: 20,
        lineHeight: 40,
        marginTop: 70,
    },
    bold: {
        fontWeight: 'bold',
    },
    numeroAleatorio: {
        textAlign: 'center',
        fontSize: 20,
        marginTop: 10,
    },
    numeroAleatorio:{
        textAlign: 'center',
        fontSize: 55,
        fontWeight: 'bold',
        color: '#fff'
    },
    numero: {
        width: 100,
        height: 100,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: '#000',
        backgroundColor: '#4C0051',
        alignItems: "center",
        justifyContent: "center",
        alignSelf: 'center',
        marginTop: '15%'
    },
    botao2: {
        height: 60,
        backgroundColor: '#4C0051',
        borderRadius: 10,
        width: '60%',
        alignItems: "center",
        justifyContent: "center",
        marginTop: '15%',
        marginBottom: '10%',
        alignSelf: 'center',
    },
    txtBtn2: {
        color: '#fff',
        fontWeight: 'bold',
        letterSpacing: 1.5,
    },
});
