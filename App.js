import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styles from "./styles"

export default function App() {

  return (
    <View style={styles.container}>
      <View style={styles.primeiraDiv}/>
      <View style={styles.segundaDiv}/>
      <View style={styles.terceiraDiv}/>
      <View style={styles.caixa}>
        <View style={styles.quartaDiv}/>
        <View style={styles.quintaDiv}/>
      </View>
      <View style={styles.sextaDiv}/>
      <View style={styles.setimaDiv}>
        <View style={styles.caixas}></View>
        <View style={styles.caixas}></View>
        <View style={styles.caixas}></View>
        <View style={styles.caixas}></View>
        <View style={styles.caixas}></View>
        <View style={styles.caixas}></View>  
      </View> 
      <View style={styles.oitavaDiv}/>     
     
      <StatusBar style="auto" />
    </View>
  );

}

