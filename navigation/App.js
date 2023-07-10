import { StatusBar } from 'expo-status-bar';
//import React from 'react';
import { Text, View, Image, ScrollView, Button } from 'react-native';
import styles from './style';
import { sorveterias } from './Base';
import Banner from './Banner';


import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Chocolate from './chocolate'


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Chocolate"
        onPress={() => navigation.navigate('Chocolate')}
      />
      <Button
        title="Baunilha"
        onPress={() => navigation.navigate('Baunilha')}
      />
      <Button
        title="Morango"
        onPress={() => navigation.navigate('Morango')}
      />
      <Button
        title="Menta"
        onPress={() => navigation.navigate('Menta')}
      />
      <Button
        title="Caramelo"
        onPress={() => navigation.navigate('Caramelo')}
      />
      <Button
        title="Framboesa"
        onPress={() => navigation.navigate('Framboesa')}
      />
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}
function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      
    </View>
  );
}
function BaunilhaScreen({ navigation }) {
  return (
    <ScrollView>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {sorveterias.map((item,index) =>(
          <Banner key={index} props={item} />
        ))}
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      
    </View>
    </ScrollView>
  );
}
function MorangoScreen({ navigation }) {
  return (
    <ScrollView>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {sorveterias.map((item,index) =>(
          <Banner key={index} props={item} />
        ))}
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      
    </View>
    </ScrollView>
  );
}
function MentaScreen({ navigation }) {
  return (
    <ScrollView>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {sorveterias.map((item,index) =>(
          <Banner key={index} props={item} />
        ))}
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      
    </View>
    </ScrollView>
  );
}
function CarameloScreen({ navigation }) {
  return (
    <ScrollView>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {sorveterias.map((item,index) =>(
          <Banner key={index} props={item} />
        ))}
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      
    </View>
    </ScrollView>
  );
}
function FramboesaScreen({ navigation }) {
  return (
    <ScrollView>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {sorveterias.map((item,index) =>(
          <Banner key={index} props={item} />
        ))}
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      
    </View>
    </ScrollView>
  );
}
const Stack = createNativeStackNavigator();
function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Chocolate" component={ChocolateScreen} />
        <Stack.Screen name="Baunilha" component={BaunilhaScreen} />
        <Stack.Screen name="Morango" component={MorangoScreen} />
        <Stack.Screen name="Menta" component={MentaScreen} />
        <Stack.Screen name="Caramelo" component={CarameloScreen} />
        <Stack.Screen name="Framboesa" component={FramboesaScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
