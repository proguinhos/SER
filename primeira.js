// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import * as React from 'react';
import { Button, View, Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';
import Desconto from '../Components/Desconto';
import Estilo from '../Components/Estilo'



const PrimeiraPagina = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            width:"100%",           
            justifyContent: 'center',
          }}>
          <Desconto/>
          
           <TouchableOpacity
            style={Estilo.button1}
            onPress={() => navigation.navigate('SegundaPagina')}>
            <Text  style={Estilo.texto}>    ↠  </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Estilo.button}
            onPress={() => navigation.navigate('HomePage')}>
            <Text  style={Estilo.texto}>  ↞ </Text>
          </TouchableOpacity>
         
        </View>
        
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
});

export default PrimeiraPagina;
