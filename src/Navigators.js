import React, { Component } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import ForgotPassScreen from './screens/ForgotPassScreen';
import EnterCodeScreen from './screens/EnterCodeScreen';
import ChangePassScreen from './screens/ChangePassScreen';
import HomeScreen from './screens/HomeScreen';
import {connect} from 'react-redux';

const Stack = createNativeStackNavigator();

class Navigators extends Component {
  constructor(props){
    super(props);
  }

  render(){
    
    return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
          </Stack.Navigator>
        </NavigationContainer>
    );

  }

}

const mapStateToProps = state => {
  return {
    token: state.userState.token,
  };
};

export default connect(mapStateToProps)(Navigators);