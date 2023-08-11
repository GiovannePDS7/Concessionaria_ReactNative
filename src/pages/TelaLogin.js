import * as React from 'react';
import { TextInput, View, Text, Button, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Logo from '../Components/imagens/logo/Logo.js';
import LogoBaixo from '../Components/imagens/logoBaixo/LogoBaixo.js'

export default function TelaLogin({ navigation }) {
    const [username, SetUsername] = React.useState('');
    return (
        <ScrollView style={styles.fundo}>
            <View>
                <Logo />
                <Text style={styles.Login}>Login</Text>
                <View style={styles.linha}></View>
                <View style={styles.grandContainer}>
                    <View style={styles.containerInput}>
                        <View style={styles.ViewUsuario}>
                            <Text style={styles.labelInput}>Usuário</Text>
                            <TextInput
                                placeholder='ex: SeuNomeDeUsuário'
                                value={username}
                                onChangeText={SetUsername}
                                style={styles.input}
                            />
                        </View>
                        <View style={styles.ViewEmail}>
                            <Text style={styles.labelInput}>Email</Text>
                            <TextInput
                                placeholder='ex: seuemail@email.com'
                                value={username}
                                style={styles.input}
                            />
                        </View>
                        <View style={styles.ViewSenha}>
                            <Text style={styles.labelInput}>Senha</Text>
                            <TextInput
                                placeholder='Digite sua senha'
                                style={styles.input}
                                secureTextEntry={true}
                                textContentType='password'
                            />

                            <TouchableOpacity style={styles.botao2} onPress={() => navigation.navigate('Principal', { username })}>
                                <Text style={styles.txtBtn2}>Esqueci minha senha!</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.botoes}>
                            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Principal', { username })}>
                                <Text style={styles.txtBtn}>Entrar!</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.botao3, styles.rightButton]} onPress={() => navigation.navigate('Principal', { username })}>
                                <Text style={styles.txtBtn3}>Cadastrar-se!</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View >
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    linha: {
        zIndex: 1,
        backgroundColor: '#000',
        elevation: 3,
        height: 1,
        width: '100%'
    },
    Login: {
        marginBottom: 10,
        letterSpacing: 3,
        color: '#4C0051',
        marginTop: 7,
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    fundo: {
        backgroundColor: '#fff'
    },
    grandContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerInput: {
        backgroundColor: '#fff',
        width: '80%',
        height: '100%'
    },
    input: {
        fontSize: 14,
        backgroundColor: '#ecececcb',
        width: "100%",
        height: 45,
        borderRadius: 5,
        paddingLeft: 15,
    },
    ViewUsuario: {
        marginTop: 30
    },

    ViewEmail: {
        marginTop: 32
    },
    ViewSenha: {
        marginTop: 32
    },

    labelInput: {
        fontWeight: 'bold',
        fontSize: 20,
        height: 25,
        paddingLeft: 3.5
    },
    botao: {
        height: 60,
        backgroundColor: '#4C0051',
        borderRadius: 10,
        width: '60%',
        alignItems: "center",
        justifyContent: "center",
        marginTop: '22%',
        alignSelf: 'center',
    },
    txtBtn: {
        color: '#fff',
        fontWeight: 'bold',
        letterSpacing: 1.5,
    },
    botao2: {
        marginTop: 5,
        borderBottomWidth: 0.8,
        width: '43.2%'
    },
    txtBtn2: {
        color: '#000',
        fontWeight: 'bold',
        marginTop: '5%',
        letterSpacing: 1.5,
    },
    botao3: {
       
        width: '28.2%',
        alignItems: "center",
        justifyContent: "center",
        marginTop: '8%',
        alignSelf: 'center',
        borderBottomWidth: 0.8,
        marginBottom: '3%'
    },
    txtBtn3: {
        color: '#000',
        fontWeight: 'bold',
        letterSpacing: 1.5,
    },
})
