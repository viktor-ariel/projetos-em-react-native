import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import tictactoe from './src/tictactoe';



type props = {};


export default class App extends Component <props>{
  
  constructor (props) { 
    super(props);
    tictactoe.start();
    this.state = {
      board: tictactoe.board,
      gameOver: tictactoe.gameover
    };
  }
}
  makePlay(index)

  render(){
  return (
    <View style={styles.container}>
        {this.state.board.map((value, index) => (
          <TouchableOpacity key={index} style={styles.piece} onPress={()=>{this.makePlay(index)}}>
              <Text style={styles.pieceText}>
                {value}
              </Text>
          </TouchableOpacity>
        ))}
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: "wrap",
    alignContent: "center",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  piece:{
    width: Dimensions.get('window').width/3,
    height: Dimensions.get('window').width/3,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center'
  },
  pieceText:{
    fontSize: 60,

  }
});
