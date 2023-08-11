import React from "react";
import logoBaixo from '../../../../assets/logoBaixo.png';
import { Image, StyleSheet, View } from 'react-native';

export default function Logo() {
    return (

        <View style={styles.centralizar}>
            <Image style={styles.LogoBaixo} source={logoBaixo}></Image>
        </View>
    )
}
const styles = StyleSheet.create({
    centralizar: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    LogoBaixo: {
        marginTop: 335,
        width: '25%',
        height: 12.5
    },
})