import React from "react";
import logo from '../../../../assets/logo.png';
import { Image, StyleSheet, View } from 'react-native';

export default function Logo() {
    return (
        <View style={styles.centralizar}>
            <Image style={styles.Logo} source={logo}></Image>
        </View>

    )
}
const styles = StyleSheet.create({
    centralizar: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    Logo: {
        marginTop: 27,
        width: '65%',
        height: 150
    }
})