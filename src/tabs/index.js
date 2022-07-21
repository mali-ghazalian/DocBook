/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { Component } from 'react';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 import {
     HomeTabScreen,
     WorldTourScreen,
     OutletScreen,
     ScheduleScreen,
     TherapistScreen
 } from '../screens';

const Tab = createBottomTabNavigator();
 
class Tabs extends Component {
 
    constructor(props){
      super(props);
    }

    render(){
     return(
        <Tab.Navigator>
            <Tab.Screen name={"HomeTab"} component={HomeTabScreen} />
            <Tab.Screen name={"WourldTour"} component={WorldTourScreen}/>
            <Tab.Screen name={"Outlet"} component={OutletScreen}/>
            <Tab.Screen name={"Schedule"} component={ScheduleScreen}/>
            <Tab.Screen name={"Therapist"} component={TherapistScreen}/>
        </Tab.Navigator>
     );
    }
  }

  export default Tabs;
  