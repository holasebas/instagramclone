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
  AlertIOS
} from 'react-native'
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


 





import Feed from './components/feed';
import Tabs from './components/tabs';
import Search from './components/search';
import Noti from './components/noti';
import Profile from './components/profile';





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
      
    }
  }
  _configureScene(route, routeStack){
    switch(route.ident){
      case "Feed":
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

export class EstadosPicker extends Component {

  constructor(props) {
    super(props);
 
    this.state = {
      selected: '0',
      mensaje: 'Mensaje',
      desc: arr[0],
      platillos: null,
      dataSource: emptyDS.cloneWithRows([])

    };

    
  }


 

 
  render() {

      var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

  

      return( 
      <View style={styles.container}>
      
          
        </View>
       
        


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
