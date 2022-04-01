import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Hello React Native!</Text> 
      <Text style={styles.welcome}>This is my first React Native app</Text> 
      <Text style={styles.welcome}>This is my first React Native app</Text> 
      <Text style={styles.welcome}>This is my first React Native app</Text> 

      <StatusBar style="auto" />
    </View>
    
  );
}

/*Para multiples objetos en el style={styles.welcome}\n 
se pueden utilizar arreglos como style={[{styles.welcome}, {backgroundColor: 'pink'}]}
Nota: mejor utilizar solo clases, directamente en style como un arreglo no hace check
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
