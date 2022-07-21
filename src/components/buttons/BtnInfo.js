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

 class BtnInfo extends Component {
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
        backgroundColor: '#3170FF',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 15,
        height: 45,
        borderRadius: 15,
        alignItems: "center"
    },
    btnText: {
        color: '#FFFFFF',
        fontSize: 14,
    }
 });
 
 export {BtnInfo};
 