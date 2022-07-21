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
   ActivityIndicator
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  BtnInfo,
  BtnLight
} from '../components/buttons';
import { types, userLogin } from '../actions';
import { connect } from 'react-redux';
import {CautionText} from '../components';

class LoginScreen extends Component {
   constructor(props){
     super(props);
     this.state={
        navigation: this.props.navigation,
        showPassStatus: true,
        securePassIcon: "eye-slash",
        email: '',
        password: '',
     };

     this.props.navigation.setOptions({
      headerShown: false,
     });
     
   }

  UNSAFE_componentWillReceiveProps = nextProps =>{
      if(nextProps.token)
        this.props.navigation.navigate('Home');
      if(nextProps.err)
        this.setState({err: nextProps.err});
  }
   
  signIn = async () => {
    this.props.userLogin(this.state.email, this.state.password);
  }

  showPasswordSwitch = ()=>{
    let status = this.state.showPassStatus
    if(status == true){
      this.setState({
        showPassStatus: false,
        securePassIcon: "eye"
      });
    }else{
      this.setState({
        showPassStatus: true,
        securePassIcon: "eye-slash"
      });
    }
  }

  handleEmailUpdate = text => {
    this.setState({
      email: text
    });
  }

  handlePasswordUdpate = text => {
    this.setState({
      password: text
    });
  }

  createAcount = () => {
    this.props.navigation.navigate("SignUp");
    this.props.clearErr();
  }

  render(){
    return(
       <SafeAreaView style={styles.background}>
        <StatusBar 
          backgroundColor="#fff"
          barStyle='dark-content'
          hidden={false}
        />
        <View style={styles.logoWrapper}>
             <Image
                style={styles.logo}
                source={require("../../assets/images/Logo-Big.png")}
             />
             <Image
                style={styles.logoText}
                source={require("../../assets/images/docbook.png")}
             />
        </View>
        <ScrollView style={{width:"100%"}}>
          {/* Login Form */}
          <View style={styles.formWrapper}>
           {/* Email Input */}
            <View style={styles.inputWrapper}>
              <View style={styles.labelcontainer}>
                <Text style={styles.label}> Email Address <Text style={{color:"#34C759",}}>*</Text> </Text>
              </View>
              <View style={styles.inputContainer}>
                <TextInput 
                  style={styles.inputField}
                  onChangeText={this.handleEmailUpdate}
                  selectionColor="#34C759"
                />
              </View>
            </View>
            {/* Password Input */}
            <View style={styles.inputWrapper}>
              <View style={styles.labelcontainer}>
                <Text style={styles.label}> Password <Text style={{color:"#34C759",}}>*</Text> </Text>
              </View>
              <View style={styles.inputContainer}>
                <TextInput 
                  secureTextEntry = {this.state.showPassStatus}
                  style={styles.inputField}
                  onChangeText={this.handlePasswordUdpate}
                  selectionColor="#34C759"
                />
                {/* Show Password Secure BTN */}
                <View style={styles.inputIcon}>
                    <Icon.Button
                      name = {this.state.securePassIcon}
                      color={"#707070"}
                      backgroundColor={"transparent"}
                      size={14}
                      onPress={this.showPasswordSwitch}
                      underlayColor={"#ffffff00"}>
                    </Icon.Button>
                </View>
              </View>
            </View>
            
            {/* Forgot pass link */}
            <View>
              <TouchableOpacity 
                style={styles.forgotPassLink}
                onPress={()=>this.state.navigation.navigate('ForgotPass')}
              >
                <Text style={styles.grayLink}> Forgot Password? </Text>
              </TouchableOpacity>
            </View>
            
            {/* Sign in btn */}
            {(this.state.err) ? 
                        <CautionText text = {this.state.err} type = {'danger'}/> :
                         <></>}
            <View style={{marginTop:10,}}>
              <BtnInfo 
                text={this.props.isLoading ? 
                  (<ActivityIndicator size="large" color="#FFFFFF" />):
                  (<Text> SignIn </Text>)}
                onPress={this.signIn}
              />
            </View>

            <View style={styles.inLineText}>
              <Text style={styles.LineText}> or </Text>
            </View>
            {/* Sign in with google */}
            <View>
              <BtnLight 
                text='Sign in with Google'
                onPress={this.signIn}
                activeOpacity={0.8}
              />
              <View style={{position:"absolute", top:10, left: "18%"}}>
                <Image 
                  source={require("../../assets/images/Bitmap.png")}
                  style={styles.socialLogoImg}
                />
              </View>
            </View>
            {/* Create account link */}
            <View style={styles.blueLink}>
              <Text> Don’t have an account? </Text>
              <TouchableOpacity 
                onPress={this.createAcount}
              >
                <Text style={{color: '#3170FF'}}> Create now </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.blueLink}>
              <TouchableOpacity 
                onPress={()=>this.state.navigation.navigate('ForgotPass')}
              > 
                <Text style={{color: '#3170FF'}}> reset password </Text>
              </TouchableOpacity>
            </View>
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
    width: 55,
    height: 55,
    marginBottom: 10,
  },
  logoText: {
    width: 125,
    height: 25,
  },
  formWrapper: {
    width: "80%",
    alignSelf: "center",
    marginTop: 20,
  },
  inputWrapper: {
    borderColor:'#DFEEFF',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 15,
    height: 40,
    fontSize: 12,
  },
  labelcontainer: {
    width: "100%",
  },
  label: {
    position: 'absolute',
    left: 15,
    top: -10,
    paddingRight: 2,
    paddingLeft: 2,
    color: '#9EAFAF',
    backgroundColor: "#FFFFFF",
    fontSize: 12,
  },
  towColumn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
  },
  inputField: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  inputIcon: {
    position: 'absolute',
    top: 3,
    right: 0,
  },
  grayLink: {
    color: '#9EAFAF',
    paddingTop: 5,
    fontSize: 13,
  },
  inLineText: {
    borderTopColor: '#9EAFAF',
    borderTopWidth: 1,
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  LineText: {
    color: '#9EAFAF',
    position: 'absolute',
    top: -10,
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
  },
  blueLink: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'center'
  },
  socialLogoImg:{
    width:18,
    height:18,
  },
  errMessage : {
    color: "#FFF",
    backgroundColor: "#e74c3c",
    padding: 5,
    width: "100%"
  }
 });

 const mapDispatchToProps = dispatch => ({
  userLogin: (...args) => dispatch(userLogin(...args)),
  clearErr : () => dispatch({type: types.CLEAN_ERR})
 });

 const mapStateToProps = state => ({
   err: state.userState.loginErr,
   token: state.userState.token,
   isLoading: state.userState.isLoading
 });

 export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
 