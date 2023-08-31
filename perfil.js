import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Text, 
   Pressable
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.text}>
      Olá, Bárbara!
        </Text>
        <Image
          source={{
            uri:
              'https://cdn-icons-png.flaticon.com/512/4139/4139951.png',
          }}
         style={{
            width: 130,
            height: 130,
            marginTop: 50,
            marginLeft: 20,
            marginRight: 20,
            borderRadius: 6 / 2,
            marginBottom: 100,
          }}
        />

        <Text style={styles.text}>
      Perfil
        </Text>

       <View style={styles.subContainer}>
       <Pressable style= {styles.formButton}>
        <Text style= {styles.textButton}> Editar Perfil </Text>
      </Pressable>
      </View>
      <View style={styles.subContainer}>
       <Pressable style= {styles.formButton}>
        <Text style= {styles.textButton}> Deslogar </Text>
      </Pressable>
      </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#fffff'
  },
  textHeadingStyle: {
    marginTop: 30,
    fontSize: 30,
    color: '#ffffff',
    fontWeight: '400',
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    color: '#9E9E9E',
    fontWeight: '400',
    marginLeft: -170,
    fontWeight: 'bold'
  },
    text: { fontSize: 16,
    color: '#9E9E9E',
     marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
     fontWeight: 'bold',
  },
   subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '110%',
  },
  subBotton: {
    padding: 0,
    marginTop: 8,
    marginLeft: -4,
    marginRight: -28,
    
  },
   formButton: {
    backgroundColor: '#3CB371',
    width: '93%',
    margin: 10,
    padding: 9, 
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  subTextBotton: {
    color: '#3CB371',
     margin: 15,
      fontSize: 13,
       fontWeight: 'bold',
  },
    textButton: {
    color: 'white',
    fontSize: 13,
    fontWeight: 'bold',

  }
});

export default App;
