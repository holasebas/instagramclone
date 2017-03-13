import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  Image,
  ScrollView
} from 'react-native';
var width = Dimensions.get('window').width;
import Stories from './stories';
export default class Search extends Component {
  render() {
    return (
   <ScrollView automaticallyAdjustContentInsets={false} style={{marginTop:20}}>
      <View style={styles.searchArea}>
      <TextInput
          style={styles.searchInput}
          placeholder="Search"
          onChangeText={(text) => this.setState({text})}
        />
        <Stories />
        <Image source={require('../images/23.jpeg')} style={{width:width, height:200}}/>
      </View>

      <View style={styles.viewrow}>
        <Image source={require('../images/m1.jpg')} style={styles.rowimage}/>
        <Image source={require('../images/m2.jpg')} style={styles.rowimage}/>
        <Image source={require('../images/m3.jpg')} style={styles.rowimage}/>
      </View>
      <View style={styles.viewrow}>
        <Image source={require('../images/m4.jpg')} style={styles.rowimage}/>
        <Image source={require('../images/m5.jpg')} style={styles.rowimage}/>
        <Image source={require('../images/m6.jpg')} style={styles.rowimage}/>
      </View>
      <View style={styles.viewrow}>
        <Image source={require('../images/m7.jpg')} style={styles.rowimage}/>
        <Image source={require('../images/m8.jpg')} style={styles.rowimage}/>
        <Image source={require('../images/m9.jpg')} style={styles.rowimage}/>
      </View>
      <View style={styles.viewrow}>
        <Image source={require('../images/m10.jpg')} style={styles.rowimage}/>
        <Image source={require('../images/m11.jpg')} style={styles.rowimage}/>
        <Image source={require('../images/m12.jpg')} style={styles.rowimage}/>
      </View>
      <View style={styles.viewrow}>
        <Image source={require('../images/m1.jpg')} style={styles.rowimage}/>
        <Image source={require('../images/m2.jpg')} style={styles.rowimage}/>
        <Image source={require('../images/m3.jpg')} style={styles.rowimage}/>
      </View>
      <View style={styles.viewrow}>
        <Image source={require('../images/m4.jpg')} style={styles.rowimage}/>
        <Image source={require('../images/m5.jpg')} style={styles.rowimage}/>
        <Image source={require('../images/m6.jpg')} style={styles.rowimage}/>
      </View>
    
    </ScrollView>
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
  searchArea:{
    paddingTop:20,
    backgroundColor:'#fff',
   
   
  },
  searchInput:{
    height:22,
    fontSize:12,
    width:width-20,
    backgroundColor:'#ddd',
    borderRadius:5,
    marginLeft:10,
    textAlign:'center',
    marginBottom:10 

 
  },
  viewrow:{
    flexDirection:'row',
  },
  rowimage:{
    width:width/3,
    height:width/3,
    borderWidth:.5,
    borderColor:'#fff'

  }
});

