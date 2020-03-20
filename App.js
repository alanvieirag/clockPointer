import React, { Component } from 'react'
import {
  StyleSheet, Alert,
  TouchableOpacity,
  Text, Image,
  View,
} from 'react-native'


export default class App extends Component {

  onPressEntrada=() => Alert.alert('Abrir camera Entrada')
  onPressSaida=() => Alert.alert('Abrir camera Saida')
  onPressConfig=() => Alert.alert('Abrir config')

 render() {
   return (
     <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.image}
          source={require('./img/logo.jpg')}
        />
        <Text style={styles.paragraph}>
          Horário de Ponto para comércios e empresas
        </Text>
      </View>
      
      <View style={styles.body}>
       <TouchableOpacity
         style={styles.button}
         onPress={this.onPressEntrada}>
         <Text style={styles.textButton}> ENTRADA </Text>
       </TouchableOpacity>
       <TouchableOpacity
         style={styles.button}
         onPress={this.onPressSaida}>
         <Text style={styles.textButton}> SAIDA </Text>
       </TouchableOpacity>
      </View>
      
      <View style={styles.footer}>
       <TouchableOpacity
       style={{borderColor: 'black', borderRadius: 25}}
         onPress={this.onPressConfig}>
         <Text style={styles.textButton}> Configurar Aplicativo </Text>
       </TouchableOpacity>
      <Text style={{textAlign:'center', color: 'white', margin: 25}}>
          Aplicativo desenvolvido por Alan Vieira - Artes Visuais - 2020/2021
        </Text>
      </View>

    </View>
    )
  }
}

const styles = StyleSheet.create({
 header:{
    marginTop: 50,
    flex: 1,
  },
  body:{
    justifyContent: 'space-between',
    flex: 3,
    flexDirection: 'row',
  },
  footer:{
    flex:1,
    backgroundColor: '#FF9300',
    alignItems: 'center',
    padding: 25
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  
  paragraph: {
    marginTop: 15,
    fontSize: 18,
    textAlign: 'center',
  },
  button: {
    flex:1,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#FF9300',
    padding: 35,
    margin: 10,
    borderRadius: 20,
  },
  textButton:{
    fontWeight: 'bold',
    color: 'white',
  },
  image: {
    height: 75,
    width: 75,
    alignSelf: 'center',
  }
})
