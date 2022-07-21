/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { Component } from 'react';
 import {
   StyleSheet,
   Text,
   TouchableOpacity,
 } from 'react-native';
 
 class BtnLight extends Component {
   constructor(props){
     super(props);
     this.state={
       
     }
   }

   render(){
    const {...rest} = this.props;
     return(
        <TouchableOpacity
            style={styles.btn}
            {...rest}
        >
            <Text style={styles.btnText}> {this.props.text} </Text>
        </TouchableOpacity>
     );
   }
 }
 
 
 
 const styles = StyleSheet.create({
    btn:{
        width: '100%',
        backgroundColor: '#F1F6FF',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 15,
        height: 45,
        fontSize: 12,
    },
    btnText: {
        color: '#0C3637',
        fontSize: 14,
    },
    logo: {
      width:16,
      height:16,
    }
 });
 
 export {BtnLight};
 