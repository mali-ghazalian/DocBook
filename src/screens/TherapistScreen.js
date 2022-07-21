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
   View,
   Image,
   SafeAreaView,
   StatusBar,
   TextInput,
   TouchableOpacity,
   ScrollView,
 } from 'react-native';
 
  class TherapistScreen extends Component {
 
    constructor(props){
      super(props);
      this.state={
      }
 
      this.props.navigation.setOptions({
       headerShown: false,
      });
    }
 
    render(){
     const { date } = this.state;
     return(
       <SafeAreaView style={styles.background}>
         <StatusBar 
          backgroundColor="#fff"
          barStyle='dark-content'
          hidden={false}
         />
         <ScrollView style={{width:"100%"}}>
           <View style = {{width: "50%", alignSelf: 'center'}}>
              <Text style={styles.title}>Therapist </Text>
           </View>
         </ScrollView>
       </SafeAreaView>
     );
    }
  }
  
  
  
 const styles = StyleSheet.create({
   background:{
     backgroundColor: "white",
     height: "100%",
     justifyContent: 'center',
     alignItems: 'center',
     paddingTop: 20,
   },
   logoWrapper:{
     alignItems: 'center',
     paddingBottom: 20,
     marginTop: 50,
   },
   logo: {
     width: 45,
     height: 45,
     marginBottom: 15,
   },
   title: {
     textAlign: "center",
     fontSize: 22,
     color:"#0C3637",
   },
   subTitle: {
     fontSize: 14,
     color: "#9EAFAF",
     textAlign: "center"
   },
   text:{
       color:"pink",
       fontSize: 20,
       textAlign: "center",
   }
  });

  export default TherapistScreen;
  