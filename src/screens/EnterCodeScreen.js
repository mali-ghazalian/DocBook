/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
/* 34C759 */
 import React, { Component } from 'react';
//  import CodeInput from 'react-native-confirmation-code-input';
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
  BtnDark,
  BtnInfo,
  BtnLight
} from '../components/buttons';
import { types, verifyKey } from '../actions';
import { connect } from 'react-redux';
import {CautionText} from '../components';

 class EnterCodeScreen extends Component {
   constructor(props){
     super(props);
     this.state={
       keyCode : '',
       err: ''
     }
     this.props.navigation.setOptions({
      headerShown: false,
     });
   }
  
  
   verifyCode = code => {
    
    this.props.tokenVerification(this.props.email, code)
    .then(() => {
      this.setState({err: this.props.errMessage});
        
      if(this.props.status) {
        this.props.clearErr();
        this.props.navigation.navigate("ChangePass");
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
              <Text style={styles.title}> Enter Code </Text>
              <View style={{width: "80%"}}>
                <Text style={styles.subTitle}> 
                    Enter your forgot key below
                </Text>
              </View>
            </View>
        </View>
        <ScrollView style={{width:"100%"}}>
          
          <View style={styles.formWrapper}>
            {(this.state.err) ? 
                        <CautionText text = {this.state.err} type = {'danger'}/> :
                         <></>}
            {/* <CodeInput
              ref="forgotPassKeyCode"
              codeLength={4}
              keyboardType="numeric"
              activeColor="#3170FF"
              inactiveColor="#F3F3F3"
              autoFocus={false}
              ignoreCase={true}
              inputPosition='center'
              size={50}
              onFulfill={code => this.verifyCode(code)}
              containerStyle={{ marginTop: 30 }}
              codeInputStyle={{ borderWidth: 1.5, backgroundColor: "#F3F3F3", borderRadius: 8}}
              selectionColor="#34C759"
            /> */}

          </View>
          <View style={{marginTop:15,}}>
              <BtnInfo 
                text={this.props.isLoading ? 
                  (<ActivityIndicator size="large" color="#FFFFFF" />):
                  (<Text> Reset Password </Text>)}
                onPress={this.verifyCode}
              />
              <TouchableOpacity 
                onPress={()=> this.props.navigation.navigate("Login")}
                style={{alignItems:"center", marginTop: 15, marginBottom: 15}}
              >
                <Text style={{color: '#3170FF'}}> Cancel </Text>
              </TouchableOpacity>
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
  status: state.userState.keyVerifyStatus,
  email: state.userState.userEmail,
  errMessage: state.userState.errMsg,
  isLoading: state.userState.isLoading
});

const mapDispatchToProps = dispatch => ({
  tokenVerification: (...args) => dispatch(verifyKey(...args)),
  clearErr : () => dispatch({type: types.CLEAN_ERR})
});
export default connect(mapStateToProps, mapDispatchToProps)(EnterCodeScreen);
 