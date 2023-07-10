import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image ,ScrollView,  } from 'react-native';
import styles from './style';
import {sorveterias} from './Base';
import Banner from './Banner';

export default function App({}) {
  const flavors = ['Chocolate', 'Baunilha', 'Morango', 'Menta', 'Caramelo', 'Framboesa', 'Limão', 'Coco', 'Amendoim', 'Doce de Leite', 'Maracujá', 'Uva', 'Tangerina', 'Café', 'Açaí'];

  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.square}>
        <Text style={styles.title}>Sorveteria MOC</Text>
        {/* <Image source={require('./img/expo.png')} /> */}
      </View>

      <View style={styles.flavorsContainer}>
        {flavors.map((flavor, index) => (
          <View key={index} style={styles.flavorRectangle}>
            <Text style={styles.flavorText}>{flavor}</Text>
          </View>
        ))}

        {sorveterias.map((item,index) =>(
          <Banner key={index} props={item} />
        ))}
      </View>
      

      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}

