import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {Store, persistor} from './src/Store';
import Navigators from './src/navigators';
import {LogBox} from "react-native";

LogBox.ignoreLogs([
"exported from 'deprecated-react-native-prop-types'.",
])

class App extends Component {
  constructor(props){
    super(props);
    
  }

  render(){
    return(
      <Provider store={Store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navigators />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
