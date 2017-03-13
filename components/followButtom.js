
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

export default class followButtom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Follow: false
    };
  }
  _followAction(){

    if(this.state.Follow){
      this.setState({Follow:false})
    }else{
       this.setState({Follow:true})
    }
  }
  render() {
    return (
      <View style={this.state.Follow ? styles.followedButtom : styles.followButtom }>
         <TouchableHighlight  onPress={() =>  this._followAction()} >
         <Text style={this.state.Follow ? styles.buttomTextOn : styles.buttomText}>{this.state.Follow ? 'Followed' : 'Follow'}</Text>
         </TouchableHighlight>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  followButtom:{
    width:70,
    padding:5,
    borderRadius:3,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#01A9DB'
  },
  followedButtom:{
    borderWidth:1,
    borderColor:'#CCC',
   width:70,
     borderRadius:3,
    padding:5,
    justifyContent:'center',
    alignItems:'center',
  },
  buttomText:{
    fontSize:12,
    color:'#fff'
  },
  buttomTextOn:{
    fontSize:12,
    color:'#000'
  }
});


