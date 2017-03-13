'use strict'

import React, {Component} from 'react'
import {
 AppRegistry,
  View,
  Text,
  Navigator,
  StyleSheet,
  Picker,
  ListView,
  Dimensions,
  TouchableHighlight,
  
} from 'react-native'
var width = Dimensions.get('window').width; 
var height = Dimensions.get('window').height;





import Feed from './components/feed';
import Tabs from './components/tabs';
import Search from './components/search';
import Noti from './components/noti';
import Profile from './components/profile';
import Photo from './components/foto';





export default class instagramclone extends Component {

  _rederScene(route, navigator){
    var globalProps = {navigator}

    switch(route.ident){
      case 'Feed':
        return(<Tabs {...globalProps} />)
      case 'Search':
        return(<Tabs {...globalProps} />)
      case 'Noti':
        return(<Tabs />)
      case 'Profile':
        return(<Tabs {...globalProps}/>)
      case 'Photo':
        return(<Photo {...globalProps} data={route.data}/>)
      
    }
  }
  _configureScene(route, routeStack){
    switch(route.ident){
      case "Feed":
      return Navigator.SceneConfigs.PushFromRight
      case "Photo":
      return Navigator.SceneConfigs.PushFromRight
      default:
      return Navigator.SceneConfigs.FloatFromRight

    }
  }

  render(){
    return(

       <Navigator
       initialRoute={{ ident: "Feed" }}
       renderScene={this._rederScene}
       configureScene={this._configureScene}
    
       />


      )
  }


}



const styles = StyleSheet.create({
  container: {
    marginTop:120,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor:'red'
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
  picker: {
    width: width,
    backgroundColor:'red'
   
  },
  lista:{
    width:width
  },
  item:{
    fontSize:30,
    textAlign: 'center',
    marginTop:1,
    padding:20,
    backgroundColor: '#E3F2FD'
  }
});



AppRegistry.registerComponent('instagramclone', () => instagramclone);
