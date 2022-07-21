import React, { Component } from 'react';
import {
   StyleSheet,
   Text,
   View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class CautionText extends Component {
   constructor(props){
     super(props);
     this.state = {
        viewStyle: ''
     }
}

componentDidMount(){
   const type = this.props.type;
   if(type === 'danger'){
      this.setState({
         viewStyle: styles.dangerStyle,
         textStyle: styles.lightText,
         icon: 'warning',
         iconColor: "#FFF"
      })
   }else {
      this.setState({
         viewStyle: styles.dangerStyle,
         icon: 'info-circle',
         iconColor: "#900"
      })
   }
}

render(){
     return(
      <View style={[styles.wrapper, this.state.viewStyle]}>
         <Icon name={this.state.icon} size={15} color={this.state.iconColor} style={styles.icon}/>
         <Text
            style = {[styles.lightText, styles.textStyle]}
         >
            {this.props.text}
         </Text>
      </View>
     );
   }
}
 
 
 
const styles = StyleSheet.create({
   wrapper: {
      borderRadius: 8,
      marginBottom: 5,
      marginTop: 5,
      backgroundColor: "transparent",
      flexDirection: 'row',
      flexWrap: "wrap",
      padding: 8,
      alignItems: "center"
   },
   textStyle: {
      borderRadius: 5,
      marginStart: 8,
      marginEnd: 5,
      textAlign: "center",
      flex: 2
   },
   defaultStyle: {
      backgroundColor: _inherits
   },
   dangerStyle: {
      backgroundColor: "#rgba(231, 76, 60,0.7)",
   },
   lightText: {
      color: "#FFF"
   },
});
 
export {CautionText};
 