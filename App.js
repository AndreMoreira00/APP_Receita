import { StyleSheet, Text, View, StatusBar, ScrollView, Image} from 'react-native';
import React from 'react';

// npx expo start --tunnel
export default function App() {
  return (
    <ScrollView style={styles.tela}>
      <StatusBar backgroundColor="#f54748" barStyle="ligth-content"/>
      <View style={styles.topo}>
        <Image style={styles.topoImage} source={require("./assets/icon.png")}/>
        <Text style={styles.topoText}>MELOGRANO {"\n"} Cozinhando com APPs</Text>
      </View>
      <View style={styles.receita}>
        <Text style={styles.receitaTitulo}>Bolo de cenoura com chocolate</Text>
        <Image style={styles.receitaImagem} source={require("./assets/bolo.jpg")}/>

        <Text style={styles.receitaSubtitulo}>Ingredientes</Text>
        <Text>1 colher de açucar {"\n"}
        1 xicara de farinha
        </Text>
        <Text style={styles.receitaSubtitulo}>Modo de preparo</Text>
        <Text>
          Em um liquidificador...{"\n"}
          Acrescente o fermento...
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  tela:{
    backgroundColor: "#fff"
  },
  topo:{
    alignItems: "center",
    backgroundColor: "#f54748",
    padding: 32
  },
  topoImage:{
    height: 64,
    width: 64
  },
  topoText:{
    color: "#fff",
    fontSize: 32,
    textAlign: "center"
  },
  receita:{
    marginVertical:16,
    marginHorizontal:32
  },
  receitaImagem:{
    height:200,
    width:"auto"
  },
  receitaTitulo:{
    fontSize: 32,
    fontWeight:"bold",
    marginVertical:16,
    textAlign: "center",
  },
  receitaSubtitulo:{
    fontSize: 24,
    marginVertical: 16,
  },
});
