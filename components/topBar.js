import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';
var width = Dimensions.get('window').width;
export default class topBar extends Component {
  render() {
    return (
      <View style={styles.topBar}>
      <Text>Feed</Text>
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
  topBar:{
    marginTop:170,
    height:50,
    width:width,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#fff',
    borderWidth:1,
    borderTopColor:'#FFF',
    borderBottomColor:'#FFF',
    borderLeftColor:'#FFF',
    borderRightColor:'#FFF',
  }
});


