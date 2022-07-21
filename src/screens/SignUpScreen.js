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
  ActivityIndicator,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  BtnInfo,
} from '../components/buttons';
import { types, userRegister } from '../actions';
import { connect } from 'react-redux';
import {CautionText} from '../components';

 class SignUpScreen extends Component {

   constructor(props){
     super(props);
     this.state={
      date: new Date(),
      open: false,
      birthDate: '',
      showPassStatus: true,
      securePassIcon: "eye-slash",
      email: "",
      pass: "",
      fname:"",
      lname:"",
      mobile:"",
      mobileCode:"",
      uniqueNO: Number,
      actionBtnTxt: <Text>Create Now</Text>,
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

  UNSAFE_componentWillReceiveProps = nextProps =>{
    if(nextProps.err)
      this.setState({err: nextProps.err});
  }

   createUser = async () => {
      const userInfo = {
        email: this.state.email,
        password: this.state.pass,
        firstName: this.state.fname,
        lastName: this.state.lname,
        birthDate: this.state.birthDate,
        phone: this.state.mobileCode+this.state.mobile,
        No: this.state.uniqueNO
      }
      
      this.props.userRegister(userInfo);
      if(this.props.registerStatus) {
        this.props.clearErr();
        this.props.navigation.navigate("Login");
      }
      
   }

   render(){
    const { date } = this.state;
    const { open } = this.state;

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
              <Text style={styles.title}> Create an account </Text>
              <View style={{width: "80%"}}>
                <Text style={styles.subTitle}> 
                  Create a new account to make your booking easier
                </Text>
              </View>
            </View>
        </View>
        <ScrollView style={{width:"100%"}}>
          
          {/* Register Form */}
          <View style={styles.formWrapper}>
            
            {/* first name */}
            <View style={styles.inputWrapper}>
              <View style={styles.labelcontainer}>
                <Text style={styles.label}> First Name <Text style={{color:"#34C759",}}>*</Text> </Text>
              </View>
              <View style={styles.inputContainer}>
                <TextInput 
                  style={styles.inputField}
                  onChangeText={(text)=>this.setState({fname: text})}
                  selectionColor="#34C759"
                />
              </View>
            </View>
            {/* last name */}
            <View style={styles.inputWrapper}>
              <View style={styles.labelcontainer}>
                <Text style={styles.label}> Last Name <Text style={{color:"#34C759",}}>*</Text> </Text>
              </View>
              <View style={styles.inputContainer}>
                <TextInput 
                  style={styles.inputField}
                  onChangeText={(text)=>this.setState({lname: text})}
                  selectionColor="#34C759"
                />
              </View>
            </View>
            {/* Email address */}
            <View style={styles.inputWrapper}>
              <View style={styles.labelcontainer}>
                <Text style={styles.label}> Email Address <Text style={{color:"#34C759",}}>*</Text> </Text>
              </View>
              <View style={styles.inputContainer}>
                <TextInput 
                  style={styles.inputField}
                  onChangeText={(text)=>this.setState({email: text})}
                  selectionColor="#34C759"
                />
              </View>
            </View>
            {/* Mobile  */}
            <View style={styles.towColumn}>
                <View style={[styles.InputWrapperGray, {flex: 1, marginRight: 5,}]}>
                  <TextInput 
                    style={styles.inputField}
                    onChangeText={(text)=>this.setState({mobileCode: text})}
                    selectionColor="#34C759"
                    placeholder='code'
                  />
                </View>
                <View style={[styles.InputWrapperGray, {flex: 2, marginLeft: 5,}]}>
                  <TextInput 
                    style={styles.inputField}
                    onChangeText={(text)=>this.setState({mobile: text,})}
                    selectionColor="#34C759"
                    placeholder='Mobile'
                  />
                </View>
            </View>
            {/* Birth Date  */}
            <View style={styles.inputWrapper}>
              <View style={styles.labelcontainer}>
                <Text style={styles.label}> Birth Date <Text style={{color:"#34C759"}}>*</Text> </Text>
              </View>
              <View style={styles.inputContainer}>
                <TextInput 
                  style={styles.inputField}
                  onPressIn={()=> this.setState({open: true})}
                  selectionColor="#34C759"
                  value={this.state.birthDate}
                />
              </View>
              <View style={{position: "absolute", top: 0, right: 0,}}>
                <Icon.Button
                  name="calendar"
                  backgroundColor="transparent"
                  color="blue"
                  onPress={()=>{this.setState({open: true})}}
                  underlayColor={"#ffffff00"}
                >
                  <DatePicker
                    modal
                    open={open}
                    date={date}
                    onConfirm={(date) => {
                      this.setState({
                        birthDate: date.toDateString(),
                        open: false,
                      })
                    }}
                    onCancel={() => {
                      this.setState({
                        open: false,
                      })
                    }}
                    mode='date'
                  />
                </Icon.Button>
              </View>
            </View>
            {/* Unique No */}
            <View style={styles.InputWrapperGray}>
              <TextInput 
                style={styles.inputField}
                onChangeText={(text)=>this.setState({uniqueNO: text})}
                selectionColor="#34C759"
                placeholder='IC No/Passport No'
              />
            </View>
            {/* Password  */}
            <View style={styles.inputWrapper}>
              <View style={styles.labelcontainer}>
                <Text style={styles.label}> Password <Text style={{color:"#34C759",}}>*</Text> </Text>
              </View>
              <View style={styles.inputContainer}>
                <TextInput 
                  secureTextEntry = {this.state.showPassStatus}
                  style={styles.inputField}
                  onChangeText={(text)=>this.setState({pass: text,})}
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
            {/* Create Button  */}
            <View style={{marginTop:15,}}>
            {(this.state.err) ? 
                        <CautionText text = {this.state.err} type = {'danger'}/> :
                         <></>}
              <BtnInfo 
                text={this.props.isLoading ? 
                  (<ActivityIndicator size="large" color="#FFFFFF" />):
                  (<Text> Create Now </Text>)}
                onPress={this.createUser}
                activeOpacity={0.8}
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
    justifyContent: "center"
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
  picker: {
    padding: 0,
    margin: 0,
  }
 });

 const mapDispatchToProps = dispatch => ({
  userRegister: (...args) => dispatch(userRegister),
  clearErr: () => dispatch({type: types.CLEAN_ERR})
 });

 const mapStateToProps = state => ({
    err: state.userState.registerErr,
    registerStatus: state.userState.registerStatus,
    isLoading: state.userState.isLoading
 });

 export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen);
 