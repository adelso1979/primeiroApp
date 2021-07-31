import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function App() {
 
  const [peso, mudaPeso] = useState()
  const [litros, mudaLitros] = useState(0)
  function submit(){
    var resultado = parseFloat(peso) * 35;
    mudaLitros(resultado)
  }
  return (
    <View style={styles.container}>
      <Image
      source={{uri:"https://images-na.ssl-images-amazon.com/images/I/61UhsQE5xOL.png"}}
     style={styles.logo}

     />
     <View>
      <Text style={styles.textoSimples}>Você tem que beber</Text>
      <Text style={styles.textoGrande}>{litros} ml</Text>
      <Text style={styles.textoSimples}>de água por dia.</Text>
      </View>
      <TextInput
      style={styles.input}
        placeholder="Digite seu peso numérico"
        keyboardType="twitter"
        onChangeText={(text)=> mudaPeso(text)}
      />  
      <TouchableOpacity style={styles.botao} onPress={submit}>
        <Text style={styles.textoBotao}>Descobrir</Text>
        </TouchableOpacity>
      
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34C8EE',
    alignItems: 'center',
    justifyContent: "space-evenly",
    paddingTop: 48
  },
  titulo:{
    color:"#f00",
  },
  logo:{
    width:110,
    height:100,
    backgroundColor:"#ffffff"
  },
  textoSimples: {
    fontSize: 24,
    color:"#222c61",
  },
  textoGrande: {
    color:"#ff0000",
    fontSize: 38,
  },
  input:{
    height: 48,
    fontSize:16,
    backgroundColor:"#c4c4c4",
    padding:10,
    width:"80%",
    color:"#e33e33",
    marginTop: 10
 },
 botao:{
   height: 48,
   backgroundColor:"#315163",
   borderRadius: 10,
   color:"#315163",
   width:"80%",
   justifyContent:"center",
   alignItems:"center"
 },
 textBotao:{
    fontSize:18
 },
  
    
  
});
