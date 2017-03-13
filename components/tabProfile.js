import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Dimensions,
  Image,
  Navigator
} from 'react-native';
var width = Dimensions.get('window').width;
var feedData = require('./feedData');
var mePic = require('../images/sebas.jpg');
var meName = 'Sebastian Diaz'
var meUsername = 'holasebasdiaz'

export default class tabProfile extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      render: this._Grid()
    };
  }

  _goPhoto(data) {
  this.props.navigator.push({
  ident: 'Photo',
  data

 
 })

  }

  _Grid(){
     //This should be a loop data reder
    return(
      <View>
      <View style={styles.viewrow}>
        <TouchableHighlight onPress={() => this._goPhoto(feedData[1])}><Image source={feedData[1].media.media} style={styles.rowimage}/></TouchableHighlight>
        <TouchableHighlight onPress={() => this._goPhoto(feedData[2])}><Image source={feedData[2].media.media} style={styles.rowimage}/></TouchableHighlight>
        <TouchableHighlight onPress={() => this._goPhoto(feedData[3])}><Image source={feedData[3].media.media} style={styles.rowimage}/></TouchableHighlight>
      </View>
      <View style={styles.viewrow}>
        <TouchableHighlight onPress={() => this._goPhoto(feedData[4])}><Image source={feedData[4].media.media} style={styles.rowimage}/></TouchableHighlight>
        <TouchableHighlight onPress={() => this._goPhoto(feedData[5])}><Image source={feedData[5].media.media} style={styles.rowimage}/></TouchableHighlight>
        <TouchableHighlight onPress={() => this._goPhoto(feedData[6])}><Image source={feedData[6].media.media} style={styles.rowimage}/></TouchableHighlight>
      </View>
      <View style={styles.viewrow}>
        <TouchableHighlight onPress={() => this._goPhoto(feedData[7])}><Image source={feedData[7].media.media} style={styles.rowimage}/></TouchableHighlight>
        <TouchableHighlight onPress={() => this._goPhoto(feedData[8])}><Image source={feedData[8].media.media} style={styles.rowimage}/></TouchableHighlight>
        <TouchableHighlight onPress={() => this._goPhoto(feedData[9])}><Image source={feedData[9].media.media} style={styles.rowimage}/></TouchableHighlight>
      </View>
      <View style={styles.viewrow}>
        <TouchableHighlight onPress={() => this._goPhoto(feedData[10])}><Image source={feedData[10].media.media} style={styles.rowimage}/></TouchableHighlight>
        <TouchableHighlight onPress={() => this._goPhoto(feedData[1])}><Image source={feedData[1].media.media} style={styles.rowimage}/></TouchableHighlight>
        <TouchableHighlight onPress={() => this._goPhoto(feedData[2])}><Image source={feedData[2].media.media} style={styles.rowimage}/></TouchableHighlight>
      </View>
   
      </View>
    )
  }

   _List(feed, callback){
  //This should be a loop data reder
    return(
     <View>
        <View style={styles.mediaUser}><Image style={styles.picture} source={mePic} /><Text style={styles.username}>{meUsername}</Text></View>
        <TouchableHighlight onPress={() => this._goPhoto(feedData[1])}><Image source={feedData[1].media.media} style={styles.listImage}/></TouchableHighlight>
        <View style={styles.mediaUser}><Image style={styles.picture} source={mePic} /><Text style={styles.username}>{meUsername}</Text></View>
        <TouchableHighlight onPress={() => this._goPhoto(feedData[2])}><Image source={feedData[2].media.media} style={styles.listImage}/></TouchableHighlight>
        <View style={styles.mediaUser}><Image style={styles.picture} source={mePic} /><Text style={styles.username}>{meUsername}</Text></View>
        <TouchableHighlight onPress={() => this._goPhoto(feedData[3])}><Image source={feedData[3].media.media} style={styles.listImage}/></TouchableHighlight>
        <View style={styles.mediaUser}><Image style={styles.picture} source={mePic} /><Text style={styles.username}>{meUsername}</Text></View>
        <TouchableHighlight onPress={() => this._goPhoto(feedData[4])}><Image source={feedData[4].media.media} style={styles.listImage}/></TouchableHighlight>
        <View style={styles.mediaUser}><Image style={styles.picture} source={mePic} /><Text style={styles.username}>{meUsername}</Text></View>
        <TouchableHighlight onPress={() => this._goPhoto(feedData[5])}><Image source={feedData[5].media.media} style={styles.listImage}/></TouchableHighlight>
        <View style={styles.mediaUser}><Image style={styles.picture} source={mePic} /><Text style={styles.username}>{meUsername}</Text></View>
        <TouchableHighlight onPress={() => this._goPhoto(feedData[6])}><Image source={feedData[6].media.media} style={styles.listImage}/></TouchableHighlight>
        <View style={styles.mediaUser}><Image style={styles.picture} source={mePic} /><Text style={styles.username}>{meUsername}</Text></View>
        <TouchableHighlight onPress={() => this._goPhoto(feedData[7])}><Image source={feedData[7].media.media} style={styles.listImage}/></TouchableHighlight>
        <View style={styles.mediaUser}><Image style={styles.picture} source={mePic} /><Text style={styles.username}>{meUsername}</Text></View>
        <TouchableHighlight onPress={() => this._goPhoto(feedData[8])}><Image source={feedData[8].media.media} style={styles.listImage}/></TouchableHighlight>
        <View style={styles.mediaUser}><Image style={styles.picture} source={mePic} /><Text style={styles.username}>{meUsername}</Text></View>
        <TouchableHighlight onPress={() => this._goPhoto(feedData[9])}><Image source={feedData[9].media.media} style={styles.listImage}/></TouchableHighlight>
        <View style={styles.mediaUser}><Image style={styles.picture} source={mePic} /><Text style={styles.username}>{meUsername}</Text></View>
        <TouchableHighlight onPress={() => this._goPhoto(feedData[10])}><Image source={feedData[10].media.media} style={styles.listImage}/></TouchableHighlight>
        <View style={styles.mediaUser}><Image style={styles.picture} source={mePic} /><Text style={styles.username}>{meUsername}</Text></View>
        <TouchableHighlight onPress={() => this._goPhoto(feedData[1])}><Image source={feedData[1].media.media} style={styles.listImage}/></TouchableHighlight>
        <View style={styles.mediaUser}><Image style={styles.picture} source={mePic} /><Text style={styles.username}>{meUsername}</Text></View>
        <TouchableHighlight onPress={() => this._goPhoto(feedData[2])}><Image source={feedData[2 ].media.media} style={styles.listImage}/></TouchableHighlight>
      </View>
    )
  }


  render() {
    return (
      <View style={styles.container}>
      <View style={styles.menu}>
        <TouchableHighlight underlayColor='#FFF' style={styles.menuitem} onPress={() => this.setState({render:this._Grid()})}>
          <Image source={require('../images/menu.png')} style={{width:20, height:20}}/>
        </TouchableHighlight>
         <TouchableHighlight underlayColor='#FFF'  style={styles.menuitem} onPress={() => this.setState({render:this._List(feedData)})}>
           <Image source={require('../images/menu2.png')} style={{width:20, height:20}}/>
        </TouchableHighlight>
         <TouchableHighlight underlayColor='#FFF'  style={styles.menuitem} >
         <Image source={require('../images/tag.png')} style={{width:20, height:20}}/>
        </TouchableHighlight>
         <TouchableHighlight underlayColor='#FFF'  style={styles.menuitem}>
          <Image source={require('../images/saved.png')} style={{width:20, height:20}}/>
        </TouchableHighlight>
      </View>
      {this.state.render}
      </View>
      
    );  
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
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
  menu:{
    borderWidth:1,
    borderTopColor:'#f2f2f2',
    borderRightColor:'#FFF',
    borderLeftColor:'#FFF',
    borderBottomColor:'#f2f2f2',

    marginTop:10,
    width:width,
    height:40,
    backgroundColor:'#FFF',
    flexDirection:'row'
  },
  menuitem:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
   viewrow:{
    flexDirection:'row',
  },
  rowimage:{
    width:width/3,
    height:width/3,
    borderWidth:.5,
    borderColor:'#fff'

  },
  listImage:{
    width:width,
    height:width, 
  },
   mediaUser:{
  
    alignItems: 'center',
    padding:10,

    backgroundColor:'#FFF',
    
    width:width,
    flexDirection:'row',

     borderWidth:1,
  borderTopColor:'#fff',
  borderLeftColor:'#fff',
  borderRightColor:'#fff',
  borderBottomColor:'#fff',
   
  },
   picture:{
    width:30,
    height:30,
    borderRadius:15,
     
  },
   username:{
    paddingLeft:10,

  },
});
