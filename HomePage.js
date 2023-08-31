// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import * as React from 'react';
import { Button, View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Estilo from '../Components/Estilo'

const HomePage = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white'}}>
      <View style={{ flex: 1, padding: 15 }}>
          <View style={Estilo.container}>
          <Text style={styles.txt}>
     Lixo Produzido
        </Text>
            <Image  style={Estilo.stretchImage}    
            source={{
            uri:
              'https://cdn.guiadoexcel.com.br/wp-content/uploads/2014/01/Gr%C3%A1fico-pontilhado-Excel.png',
          }}
         style={{
            width: 320,
            height: 144,
            marginTop: 30,
            transform: [{ translatex: -0 }]
          }}              
            />
          </View>  
          <TouchableOpacity
            style={Estilo.button2}
            onPress={() => navigation.navigate('PrimeiraPagina')}>
            <Text  style={Estilo.texto}>    ↠  </Text>
          </TouchableOpacity>
        </View>
       
    
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({ 
 txt: {
    fontSize: 16,
    color: '#9E9E9E',
     marginTop: 10,
    marginLeft: -28,
    marginRight: -28,
     fontWeight: 'bold',
  }
});

export default HomePage;
