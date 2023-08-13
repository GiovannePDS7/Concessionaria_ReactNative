import React, { useState } from 'react';
import Logo from '../Components/imagens/logo/Logo';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function TelaEmail({navigation}) {
    const [emailRec, setEmailRec] = useState('');
    return (
        <View style={styles.fundo}>
            <TouchableOpacity style={styles.botao1} onPress={() => navigation.goBack()}>
                <Text style={styles.txtBtn1}> ←Voltar</Text>
            </TouchableOpacity>
            <Logo />
            <View style={styles.grandContainer}>
                <View style={styles.container}>
                    <Text style={styles.texto}>Digite seu email cadastrado na nossa concessionária <Text style={styles.bold}>MIDNIGHT CLUB</Text></Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Digite seu email'
                        value={emailRec}
                        onChangeText={setEmailRec}
                    />
                    <Text style={styles.texto2}>Em seguida enviaremos um código de recuperação para seu email</Text>
                    <TouchableOpacity style={styles.botao2} onPress={() => navigation.navigate('EsqueciSenha', {emailRec})}>
                        <Text style={styles.txtBtn2}> Enviar Código</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        marginTop: '30%',
        fontSize: 18,
        backgroundColor: '#ecececcb',
        width: "100%",
        height: 45,
        borderRadius: 5,
        paddingLeft: 15,
    },
    texto: {
        lineHeight: 30,
        textAlign: 'center',
        fontSize: 22
    },
    texto2: {
        marginTop: '30%',
        lineHeight: 30,
        textAlign: 'center',
        fontSize: 22
    },

    bold: {
        fontWeight: 'bold'
    },
    grandContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        width: "80%",
        height: "90%",
    },
    botao1: {
        height: 13.8,
        borderRadius: 10,
        width: '20%',
        alignItems: "center",
        justifyContent: "center",
        marginTop: '3%',
    },
    txtBtn1: {
        fontSize: 15,
        color: '#4C0051',
        fontWeight: 'bold',
        letterSpacing: 1.5,
    },
    fundo: {
        height: "100%",
        backgroundColor: '#fff'
    },
    botao2: {
        height: 60,
        backgroundColor: '#4C0051',
        borderRadius: 10,
        width: '60%',
        alignItems: "center",
        justifyContent: "center",
        alignSelf: 'center',
        marginTop: '22%',
        marginBottom: '20%'
    },
    txtBtn2: {
        color: '#fff',
        fontWeight: 'bold',
        letterSpacing: 1.5,
    },

})