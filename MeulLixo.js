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
      Desconto atual
        </Text>
        <Image
          source={{
            uri:
              'https://www.tibco.com/sites/tibco/files/media_entity/2022-01/PieChart-01.svg',
          }}
         style={{
            width: 180,
            height: 180,
            marginTop: 50,
            marginLeft: -120,
            borderRadius: 6 / 2,
            marginBottom: 100,
          }}
        />

       <View style={styles.subContainer}>
       <Pressable style= {styles.formButton}>
        <Text style= {styles.textButton}> Cadastrar código </Text>
      </Pressable>
      </View>
      <View style={styles.subContainer}>
       <Pressable style= {styles.formButton}>
        <Text style= {styles.textButton}> Gerar Cupom </Text>
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
    txt: {
    marginTop: 0,
    fontSize: 18,
    color: '#73E6A0',
    fontWeight: '400'
  },
   subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '110%',
  },
  subBotton: {
    padding: 0,
    marginTop: -10,
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
