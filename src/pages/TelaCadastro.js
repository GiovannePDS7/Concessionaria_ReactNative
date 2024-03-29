import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Logo from '../Components/imagens/logo/Logo';

export default function TelaCadastro({ navigation }) {

    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [idade, setIdade] = useState('');
    const [email, setEmail] = useState('');
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmSenha, setConfirmSenha] = useState('');

    const [erros, setErros] = useState({});

    const validarCampos = () => {
        const novosErros = {};

        if (!nome) {
            novosErros.nome = 'Campo obrigatório';
        }

        if (!cpf) {
            novosErros.cpf = 'Campo obrigatório';
        }

        if (!idade) {
            novosErros.idade = 'Campo obrigatório';
        }

        if (!email) {
            novosErros.email = 'Campo obrigatório';
        }

        if (!usuario) {
            novosErros.usuario = 'Campo obrigatório';
        }

        if (!senha) {
            novosErros.senha = 'Campo obrigatório';
        }

        if (!confirmSenha) {
            novosErros.confirmSenha = 'Campo obrigatório';
        }

        return novosErros;
    };

    const handleCadastro = () => {
        const novosErros = validarCampos();

        if (Object.keys(novosErros).length === 0) {
            const mudarPagina = () => { navigation.navigate('ConfirmCadastro', { nome: nome, idade: idade, senha: senha, cpf: cpf, email: email, usuario: usuario })}
            mudarPagina()
            alert('Confirme os dados preenchidos');
        } else {
            setErros(novosErros);
        }
    };

    return (
        <ScrollView style={styles.fundo}>

            <TouchableOpacity style={styles.botao1} onPress={() => navigation.goBack()}>
                <Text style={styles.txtBtn1}> ←Voltar</Text>
            </TouchableOpacity>
            <Logo />
            <Text style={styles.Cadastro}>Cadastro</Text>
            <View style={styles.linha} />
            <View style={styles.grandContainer}>
                <View style={styles.containerInput}>

                    <View style={styles.ViewNome}>
                        <Text style={styles.labelInput}>Nome</Text>
                        <TextInput
                            placeholder='Digite seu nome'
                            style={styles.input}
                            value={nome}
                            onChangeText={setNome}
                        />
                        {erros.nome && <Text style={styles.erro}>{erros.nome}</Text>}
                    </View>

                    <View style={styles.ViewCPF}>
                        <Text style={styles.labelInput}>CPF</Text>
                        <TextInput
                            maxLength={14}
                            placeholder='ex: xxx.xxx.xxx-xx'
                            keyboardType="numeric"
                            style={styles.input}
                            value={cpf}
                            onChangeText={setCpf}
                        />
                        {erros.cpf && <Text style={styles.erro}>{erros.cpf}</Text>}
                    </View>
                    <View style={styles.ViewIdade}>
                        <Text style={styles.labelInput}>Idade</Text>
                        <TextInput
                            value={idade}
                            onChangeText={setIdade}
                            keyboardType="numeric"
                            maxLength={2}
                            placeholder='Digite sua idade'
                            style={styles.input}
                        />
                        {erros.idade && <Text style={styles.erro}>{erros.idade}</Text>}
                    </View>

                    <View style={styles.ViewEmail}>
                        <Text style={styles.labelInput}>Email</Text>
                        <TextInput
                            onChangeText={setEmail}
                            placeholder='ex: seuemail@email.com'
                            style={styles.input}
                            value={email}
                        />
                        {erros.email && <Text style={styles.erro}>{erros.email}</Text>}
                    </View>

                    <View style={styles.ViewUsuario}>
                        <Text style={styles.labelInput}>Nome de Usuário</Text>
                        <TextInput
                            placeholder='ex: SeuNomeDeUsuário'
                            onChangeText={setUsuario}
                            value={usuario}
                            style={styles.input} />
                        {erros.usuario && <Text style={styles.erro}>{erros.usuario}</Text>}
                    </View>

                    <View style={styles.ViewSenha}>
                        <Text style={styles.labelInput}>Senha</Text>
                        <TextInput
                            placeholder='Digite sua senha'
                            style={styles.input}
                            secureTextEntry={true}
                            textContentType='password'
                            onChangeText={setSenha}
                            value={senha}
                        />
                        {erros.senha && <Text style={styles.erro}>{erros.senha}</Text>}
                    </View>
                    <View style={styles.ViewConfirmSenha}>
                        <Text style={styles.labelInput}>Confirme sua Senha</Text>
                        <TextInput
                            placeholder='Digite sua senha'
                            style={styles.input}
                            secureTextEntry={true}
                            textContentType='password'
                            onChangeText={setConfirmSenha}
                            value={confirmSenha}
                        />
                        {erros.confirmSenha && <Text style={styles.erro}>{erros.confirmSenha}</Text>}
                    </View>

                    <View style={styles.botoes}>
                        <TouchableOpacity style={styles.botao2} onPress={handleCadastro}>
                            <Text style={styles.txtBtn2}>Cadastrar!</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    labelInput: {
        fontWeight: 'bold',
        fontSize: 20,
        height: 25,
        paddingLeft: 3.5
    },
    containerInput: {
        backgroundColor: '#fff',
        width: '80%',
        height: '100%'
    },
    grandContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    linha: {
        zIndex: 1,
        backgroundColor: '#000',
        elevation: 3,
        height: 1,
        width: '100%'
    },
    Cadastro: {
        marginBottom: 10,
        letterSpacing: 3,
        color: '#4C0051',
        marginTop: 7,
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    fundo: {
        backgroundColor: '#fff',
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
    ViewNome: {
        marginTop: 28
    },
    ViewCPF: {
        marginTop: 20
    },
    ViewIdade: {
        marginTop: 20
    },
    ViewEmail: {
        marginTop: 20
    },
    ViewUsuario: {
        marginTop: 20
    },
    ViewSenha: {
        marginTop: 20
    },
    ViewConfirmSenha: {
        marginTop: 20
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

    erro: {
        color: '#f00',
        marginTop: 5,
    },
});
