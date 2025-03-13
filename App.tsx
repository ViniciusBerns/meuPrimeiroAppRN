import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Alguém me faz um pix de R$350,00 pfv</Text>
      <StatusBar style="auto" />
      <MinhaImagem/>
    </View>
  );
}

import { Image } from 'react-native';
const MinhaImagem = () => {
  return <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm7JiFM3sUYtw3tqspwaA_SpS1Yq2oTa2mdQ&s' }} style={{ width: 150, height: 150 }} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#395161',
    alignItems: 'center',
    justifyContent: 'center',
  },


  txt: {
    color: "#158FE0",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 15
  }

});
