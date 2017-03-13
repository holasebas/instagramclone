import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Navigator
} from 'react-native';
import TopBar from './topBar';
import TabProfile from './tabProfile';

var mePic = require('../images/sebas.jpg');
var meName = 'Sebastian Diaz'
var meUsername = 'holasebasdiaz'
export default class Profile extends Component {
  constructor(props) {
    super(props);
  
    this.state = {};
  }
  render() {
    if(this.props.navigator){
      console.log("Si")
    }else{
      console.log("no")
    }
    return (
     <View> 

        <TopBar title={meUsername}/>
 
      <ScrollView automaticallyAdjustContentInsets={false} style={styles.scrollView}>


      <View style={styles.meInfoWrap}>

            <View style={styles.meInfo}>
              <Image source={mePic} style={styles.mePic}/>
              <Text style={styles.meName}>{meName}</Text>
            </View>

          <View style={{flex:1}}> 
            <View style={styles.meData}>

              <View style={styles.data}>
                <Text style={{fontWeight:'bold'}}>22</Text>
                <Text style={{fontSize:12, color:'#777'}}>posts</Text>
              </View>

              <View style={styles.data}>
                <Text style={{fontWeight:'bold'}}>204</Text>
                <Text style={{fontSize:12, color:'#777'}}>followers</Text>
              </View>

              <View style={styles.data}>
                <Text style={{fontWeight:'bold'}}>22</Text>
                <Text style={{fontSize:12, color:'#777'}}>following</Text>
              </View>

            </View>
            <View style={styles.edit}>
              <Text>Edit profile</Text>
            </View>
          </View>

      </View>
      <TabProfile navigator={this.props.navigator}/>

      
      </ScrollView>
     
    </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView:{
    backgroundColor: '#fff',
    marginBottom:110
  },
  container: {

  
    backgroundColor: '#fff',


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
  mePic:{
      width:70,
      height:70,
      borderRadius:35
  },
  meInfoWrap:{
    paddingTop:5,
    
    flexDirection:'row'
  },
  meData:{
    flex:2,
    paddingTop:20,
    flexDirection:'row',
    
  },
  meInfo:{
    alignItems:'center',
    padding:15
  },
  meName:{
    fontWeight:'bold',
    fontSize:12,
    paddingTop:10
  },
  data:{
    flex:1,
    
    alignItems:'center'
  },
  edit:{
    borderWidth:1,
    borderColor:'#ccc',
    borderRadius:3,
    alignItems:'center',
    margin:15,
    padding:2
  }

});

