
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 80,
    },
    square: {
      width: 200,
      height: 200,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: '#000',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    flavorsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 20,
      justifyContent: 'center',
    },
    flavorRectangle: {
      width: 100,
      height: 40,
      backgroundColor: '#ccc',
      margin: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    flavorText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#aaa',
    },

    ContainerEndereco: {
      flexDirection: 'row',
      
      borderRadius: 10,
      padding: 10,
      alignItems: 'center',
      marginBottom: 20,
    },
    foto: {
      width: 120,
      height: 120,
      borderRadius: 60,
      borderWidth: 3,
      borderColor: '#fff',
    },
    ContainerTexto: {
      marginLeft: 10,
    },
    nome: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#333',
      textTransform: 'uppercase',
    },
    endereco: {
      fontSize: 16,
      color: '#555',
    },
  });
  
  export default styles;


  // import Banner from './Banner';