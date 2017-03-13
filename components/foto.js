import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  Dimensions,
  Image
} from 'react-native';
import TopBar from './topBar';
var width = Dimensions.get('window').width;
var mePic = require('../images/sebas.jpg');
var meName = 'Sebastian Diaz'
var meUsername = 'holasebasdiaz'
export default class foto extends Component {
  constructor(props) {
    super(props);
  
    this.state = {};
  }

     _likes(likes){
      
      var users = ""
      for (var i = 0; i < likes.length; i++) {
        users = users+ likes[i].username + ", "
      }
      return(
          <Text style={styles.user}>{users}</Text>
        )
    }
    _comments(comments){
      return comments.map(function(news, i){
        return(
          <View key={i} style={styles.comments}>
            <Text style={styles.user}>{news.username}</Text>
            
            <Text style={styles.comment}>{news.comment}</Text>
           
          </View>
        );
      });
    }

  render() {
    console.log(this.props.data)
    return (
      <View style={styles.container}>
       <TopBar title={'Photo'} onPhoto={true}  navigator={this.props.navigator} />
        
          <View style={styles.mediaUser}>
                  
                  <Image
                    style={styles.picture}
                    source={mePic} 
                   />
                   <Text style={styles.username}>{meUsername}</Text>
                   
              </View>
       
       <Image
               style={styles.media}
              source={this.props.data.media.media}
             />
             <View style={styles.mediaIcons}>
                 <Image style={styles.icons} source={require('../images/heart.png')} />
                 <Image style={styles.icons} source={require('../images/comm.png')} />
                 <Image style={styles.icons} source={require('../images/share.png')} />
              </View>
              <View style={styles.likes}>
             {this._likes(this.props.data.media.likes)}
             </View>
               <View>
             {this._comments(this.props.data.media.comments)}
             <Text style={styles.time}>HACE 2 HORAS</Text>
             </View>
  
     
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
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
  mediaIcons:{
       width:width-10,
    
    flexDirection:'row',
    height:30,
   
  },
  icons:{
    
    marginLeft:10,
    marginTop:5,
    width:20,
    height:20
   
  },
  likes:{
    flexDirection:'row',
    width:width,
    marginTop:10,
    marginLeft:10,
    marginBottom:10,


  
  },
  comments:{

    flexDirection:'row',
    width:width,

    marginLeft:10,
    marginBottom:5
  },
   media:{
  width:width,
  height:width
  },
   time:{
    marginLeft:10,
    fontSize:8,
    color:'#777',
    textAlign:'left'
  },
   user:{
    fontWeight:'bold',
    fontSize:10
  },
  comment:{

    marginLeft:5,
    fontSize:10
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

