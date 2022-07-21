/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { Component } from 'react';
//  import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
 import { createDrawerNavigator } from '@react-navigation/drawer';
 import {
  HomeTabScreen,
  WorldTourScreen,
  OutletScreen,
  ScheduleScreen,
  TherapistScreen
} from '../screens';
  // const Tab = createMaterialBottomTabNavigator();
  const Drawer = createDrawerNavigator();
  class HomeScreen extends Component {
 
    constructor(props){
      super(props);
 
      this.props.navigation.setOptions({
       headerShown: false,
      });
    }
 
    render(){
     return(
      // <Tab.Navigator>
      //     <Tab.Screen name={"HomeTab"} component={HomeTabScreen} />
      //     <Tab.Screen name={"WourldTour"} component={WorldTourScreen}/>
      //     <Tab.Screen name={"Outlet"} component={OutletScreen}/>
      //     <Tab.Screen name={"Schedule"} component={ScheduleScreen}/>
      //     <Tab.Screen name={"Therapist"} component={TherapistScreen}/>
      // </Tab.Navigator>
      <Drawer.Navigator>
        <Drawer.Screen name="HomeTab" component={HomeTabScreen} />
        <Drawer.Screen name="WourldTour" component={WorldTourScreen} />
      </Drawer.Navigator>
     );
    }
  }
  
  export default HomeScreen;
  