import React, { Component } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    SplashScreen,
    LoginScreen,
    SignUpScreen,
    ForgotPassScreen,
    EnterCodeScreen,
    ChangePassScreen,
    HomeScreen
} from '../screens';
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
            {(!this.props.token)?(
                  <>
                  <Stack.Screen name="Splash" component={SplashScreen} />
                  <Stack.Screen name="Login" component={LoginScreen} />
                  <Stack.Screen name="SignUp" component={SignUpScreen} />
                  <Stack.Screen name="ForgotPass" component={ForgotPassScreen} />
                  <Stack.Screen name="EnterCode" component={EnterCodeScreen} />
                  <Stack.Screen name="ChangePass" component={ChangePassScreen} />
                  </>
              
            ):(
              <Stack.Screen name="Home" component={HomeScreen} />
              
            )}
             
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