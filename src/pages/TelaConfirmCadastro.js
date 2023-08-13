import * as React from 'react';
import { TextInput, View, Text, Button, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Logo from '../Components/imagens/logo/Logo';

export default function TelaConfirmCadastro({ route, navigation }) {
    const { nome, idade, senha, cpf, email, usuario } = route.params;
    return (
        <ScrollView style={styles.fundo}>
            <TouchableOpacity style={styles.botao1} onPress={() => navigation.goBack()}>
                <Text style={styles.txtBtn1}> ←Voltar</Text>
            </TouchableOpacity>
            <Logo />
            <Text style={styles.ConfirmeCadastro}>Confirme seu Cadastro</Text>
            <View style={styles.linha} />
            <View style={styles.grandContainer}>
                <View style={styles.container}>
                    <View style={styles.litleContainer1}>
                        <Text style={styles.label}>Nome</Text>
                    </View>
                    <Text style={styles.txt}>{nome}</Text>
                    <View style={styles.litleContainer}>
                        <Text style={styles.label}>Cpf</Text>
                    </View>
                    <Text style={styles.txt}>{cpf}</Text>
                    <View style={styles.litleContainer}>
                        <Text style={styles.label}>Idade </Text>
                    </View>
                    <Text style={styles.txt}>{idade}</Text>
                    <View style={styles.litleContainer}>
                        <Text style={styles.label}>Email </Text>
                    </View>
                    <Text style={styles.txt}>{email}</Text>
                    <View style={styles.litleContainer}>
                        <Text style={styles.label}>Usuário</Text>
                    </View>
                    <Text style={styles.txt}>{usuario}</Text>
                    <View style={styles.litleContainer}>
                        <Text style={styles.label}>Senha</Text>
                    </View>
                    <Text style={styles.txt}>{senha}</Text>
            <TouchableOpacity style={styles.botao2} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.txtBtn2}>Confirmar!</Text>
            </TouchableOpacity>
                </View>
            </View>

        </ScrollView>
    );
}
const styles = StyleSheet.create({
    fundo: {
        backgroundColor: '#fff',
        height: '100%'
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
    linha: {
        zIndex: 1,
        backgroundColor: '#000',
        elevation: 3,
        height: 1,
        width: '100%'
    },
    ConfirmeCadastro: {
        marginBottom: 10,
        letterSpacing: 3,
        color: '#4C0051',
        marginTop: 7,
        fontSize: 33,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    grandContainer: {
        
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        backgroundColor: '#fff',
        width: '80%',
        height: '100%'
    },
    botao2: {
        height: 60,
        backgroundColor: '#4C0051',
        borderRadius: 10,
        width: '60%',
        alignItems: "center",
        justifyContent: "center",
        alignSelf: 'center',
        marginTop: '15%',
        marginBottom: '20%'
    },
    txtBtn2: {
        color: '#fff',
        fontWeight: 'bold',
        letterSpacing: 1.5,
    },
    label: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        letterSpacing: 1.5,
    },
    litleContainer: {
        width: '90%',
        height: 30,
        backgroundColor: '#ecececcb',
        marginTop: 20,
        borderBottomRightRadius: 50,
        borderTopLeftRadius: 50,
        borderWidth: 1,
        borderColor: '#000',
        alignItems: "center",
        justifyContent: "center",
        alignSelf: 'center',
    },
    litleContainer1: {
        width: '90%',
        height: 30,
        backgroundColor: '#ecececcb',
        marginTop: 50,
        borderBottomRightRadius: 50,
        borderTopLeftRadius: 50,
        borderWidth: 1,
        borderColor: '#000',
        alignItems: "center",
        justifyContent: "center",
        alignSelf: 'center',
    },
    txt:{
        textAlign:'center',
        fontSize: 20,
        marginTop: 15,
        width: '90%',
        height: 30,
        borderBottomRightRadius: 50,
        borderTopLeftRadius: 50,
        alignSelf: 'center',
        letterSpacing: 1.2,
    }
});
