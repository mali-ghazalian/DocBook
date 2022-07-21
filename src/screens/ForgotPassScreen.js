/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { Component } from 'react';
 import axios from 'axios';
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
 import {
  BtnInfo,
} from '../components/buttons';
import { types, forgotKeySend } from '../actions';
import { connect } from 'react-redux';
import {CautionText} from '../components';

class ForgotPassScreen extends Component {
  constructor(props){
     super(props);
     this.state={
       email: '',
       err: ''
     }
     this.props.navigation.setOptions({
      headerShown: false,
     });
  }

  resetPassword = async () => {
    this.props.forgotKeySend(this.state.email)
    .then(() => {
      this.setState({err: this.props.errMessage});
      
      if(this.props.status) {
        this.props.clearErr();
        this.props.navigation.navigate("EnterCode");
      }
    });
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
            <View style={styles.headerTitle}>
              <Text style={styles.title}> Forgot Password? </Text>
              <View style={{width: "80%"}}>
                <Text style={styles.subTitle}> 
                  Enter your email address below
                </Text>
              </View>
            </View>
        </View>
        <ScrollView style={{width:"100%"}}>
          <View style={styles.formWrapper}>
            {(this.state.err) ? 
                        <CautionText text = {this.state.err} type = {'danger'}/> :
                         <></>}
            <View style={styles.inputWrapper}>
                <View style={styles.labelcontainer}>
                  <Text style={styles.label}> Email Address <Text style={{color:"#34C759",}}>*</Text> </Text>
                </View>
                <View style={styles.inputContainer}>
                  <TextInput 
                    style={styles.inputField}
                    onChangeText={(text)=> this.setState({email: text})}
                    selectionColor="#34C759"
                  />
                </View>
            </View>

            <View style={{marginTop:15,}}>
              <BtnInfo 
                text={this.props.isLoading ? 
                  (<ActivityIndicator size="large" color="#FFFFFF" />):
                  (<Text> Reset Password </Text>)}
                onPress={this.resetPassword}
              />
              <TouchableOpacity 
                onPress={()=> this.props.navigation.goBack()}
                style={{alignItems:"center", marginTop: 15, marginBottom: 15}}
              >
                <Text style={{color: '#3170FF'}}> Cancel </Text>
              </TouchableOpacity>

              <TouchableOpacity 
                onPress={()=> this.props.navigation.navigate("EnterCode")}
                style={{alignItems:"center", marginTop: 15, marginBottom: 15}}
              >
                <Text style={{color: '#3170FF'}}> Verify Code </Text>
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
  InputWrapperGray : {
    backgroundColor: "#F3F3F3",
    borderRadius: 10,
    marginTop: 15,
    height: 40,
    fontSize: 12,
  },
  inputField: {
    paddingLeft: 10,
    paddingRight: 10,
  },
 });
 
const mapStateToProps = state => ({
  status: state.userState.forgotTokenStatus,
  errMessage: state.userState.errMsg,
  isLoading: state.userState.isLoading
});

const mapDispatchToProps = dispatch => ({
  forgotKeySend: (...args) => dispatch(forgotKeySend(...args)),
  clearErr : () => dispatch({type: types.CLEAN_ERR})
});
export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassScreen);
 