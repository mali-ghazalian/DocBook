/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { Component } from 'react';
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import Icon from 'react-native-vector-icons/FontAwesome';
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
 import { types, changePassword } from '../actions'
 import { connect } from 'react-redux';
 import {CautionText} from '../components';

 class ChangePassScreen extends Component {
   constructor(props){
     super(props);
     this.state={
       navigation: this.props.navigation,
       showPassStatus: true,
       securePassIcon: "eye-slash",
       password: '',
       confirmPass: '',
       err: ''
     }
     this.props.navigation.setOptions({
      headerShown: false,
     });
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

   _onChangePassword = () => {
     
      if(this.state.password !== this.state.confirmPass || this.state.password === ''){
        this.setState({err: "passwords are not match."});
      }else {
  
        const userEntry = {
          email: this.props.email,
          password: this.state.password,
        }
    
        this.props.changePass(userEntry).then(() => {
          this.setState({err: this.props.errMessage});
          if(this.props.status) {
            this.props.clearErr();
            console.log("status");
            this.props.navigation.navigate("Login");
          }
    
        });
  
      }

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
              <Text style={styles.title}> Change Password </Text>
              <View style={{width: "80%"}}>
                <Text style={styles.subTitle}> 
                    Enter your new password below
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
                  <Text style={styles.label}> New Password <Text style={{color:"#34C759",}}>*</Text> </Text>
                </View>
                <View style={styles.inputContainer}>
                  <TextInput 
                    secureTextEntry = {this.state.showPassStatus}
                    style={styles.inputField}
                    onChangeText={text => this.setState({password: text})}
                    selectionColor="#34C759"
                  />
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

            <View style={styles.inputWrapper}>
                <View style={styles.labelcontainer}>
                  <Text style={styles.label}> Confirm Password <Text style={{color:"#34C759",}}>*</Text> </Text>
                </View>
                <View style={styles.inputContainer}>
                  <TextInput 
                    secureTextEntry = {this.state.showPassStatus}
                    style={styles.inputField}
                    onChangeText={text => this.setState({confirmPass: text})}
                    selectionColor="#34C759"
                  />
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

            <View style={{marginTop:15,}}>
              <BtnInfo 
                text={this.props.isLoading ? 
                  (<ActivityIndicator size="large" color="#FFFFFF" />):
                  (<Text> Change Password </Text>)}
                onPress={this._onChangePassword}
              />
              <TouchableOpacity 
                onPress={()=> this.props.navigation.goBack()}
                style={{alignItems:"center", marginTop: 15, marginBottom: 15}}
              >
                <Text style={{color: '#3170FF'}}> Cancel </Text>
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
    inputIcon: {
      position: 'absolute',
      top: 3,
      right: 0,
    },
   });
 
const mapStateToProps = state => ({
  status: state.userState.ChangePassStatus,
  email: state.userState.userEmail,
  errMessage: state.userState.errMsg,
  isLoading: state.userState.isLoading
});
  
const mapDispatchToProps = dispatch => ({
  changePass : (...args) => dispatch(changePassword(...args)),
  clearErr : () => dispatch({type: types.CLEAN_ERR}),
});
export default connect(mapStateToProps, mapDispatchToProps)(ChangePassScreen);
 