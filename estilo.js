import * as React from 'react';
import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    
  },
   stretchImage: {
    margin:11,
    resizeMode: 'contain',
    width: 150,
    height: 150,
    borderRadius: 80 / 2,
    alignSelf: 'center',
    position: "relative",
    
  },
   button: {
    alignItems: 'center',    
    backgroundColor:  '#3CB371',
    width: '23%',
    margin: 10,
    padding: 1, 
    borderRadius: 5,
    marginTop: -46,
    marginLeft: -2,
  },
   button1: {
    alignItems: 'center',    
    backgroundColor:  '#3CB371',
    width: '23%',
    margin: 10,
    padding: 1, 
    borderRadius: 5,
    marginTop: 68,
    marginLeft: 220,
  },
  button2: {
    alignItems: 'center',    
    backgroundColor:  '#3CB371',
    width: '23%',
    margin: 10,
    padding: 1, 
    borderRadius: 5,
    marginTop: 70,
    marginLeft: 238,
  },
  texto:{
    color:'#FFFFFF',
    fontSize:23,
  }
});


export default styles;
