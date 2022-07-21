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
 } from 'react-native';
 import {connect} from 'react-redux';

 class SplashScreen extends Component {
    constructor(props){
     super(props);

     this.props.navigation.setOptions({
      headerShown: false,
     });
    }

    componentDidMount(){
      setTimeout(() => {
        this.props.navigation.navigate('Login');
      }, 1500);

    }
 
    render(){
      return(
        <SafeAreaView style={styles.background}>
          <StatusBar 
            backgroundColor="#3170FF"
            hidden={true}
          />
          <Image 
            style={styles.logo}
            source={require('../../assets/images/Logo-Big-White.png')}
          />
          <View style={styles.titleSection}>
            <Text style={styles.titletext}> Personal Doctor </Text>
            <Text style={styles.titletext}> Booking Apps </Text>
          </View>
        </SafeAreaView>
     );
    }
  }
 
 
 
const styles = StyleSheet.create({
  background:{
    backgroundColor: "#3170FF",
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  titleSection: {
    alignItems: 'center',
    paddingTop: 20,
  },
  titletext:{
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },
 });

 const mapStateToProps = state => {
  return {
    token: state.userState.token,
  };
};

 export default connect(mapStateToProps)(SplashScreen);
 