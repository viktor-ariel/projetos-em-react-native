import { Text, View, Image, ScrollView, } from 'react-native';
import * as React from 'react';
import styles from './style';

export default function Banner({ props }) {
    return (
        <View style={[styles.ContainerEndereco, style={backgroundColor:props.cor}]}>
            <Image style={styles.foto} source={props.foto} />

            <View style={styles.ContainerTexto}>
                <Text style={styles.nome}>{props.nome}</Text>
                <Text style={styles.endereco}> {props.endereco}</Text>
            </View>
        </View>
    )

}