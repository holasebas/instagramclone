import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  ListView

} from 'react-native'; 
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import FollowButtom from './followButtom';

var width = Dimensions.get('window').width;
var feedData = require('./feedData');
export default class Noti extends Component {

   constructor(props) {
    super(props);
    const ds1 = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      data:ds1.cloneWithRows(feedData)
    };
  }

   _renderRow(rowData, rowID, sectionID, highlightRow){
     if(sectionID != 0){
        return(
     
                    <View style={styles.notifications}>
                      <Image
                        style={styles.pic}
                        source={rowData.media.picture} 
                       />
                       <Text style={styles.username}>{rowData.media.username} 
                        <Text style={styles.noti}> liked your  photo.</Text> 
                        <Text style={styles.time}> 3min ago</Text> 
                      </Text>
                       <Image
                        style={styles.media}
                        source={rowData.media.media} 
                       />
                      </View>
        
          )
      }else{
        return false
      }
  }
   _renderRowYou(rowData, rowID, sectionID, highlightRow){
     if(sectionID != 0){
        return(
     
                    <View style={styles.notifications}>
                      <Image
                        style={styles.pic}
                        source={rowData.media.picture} 
                       />
                       <Text style={styles.username}>{rowData.media.username} 
                        <Text style={styles.noti}> Started following you</Text> 
                        <Text style={styles.time}> 2min ago</Text> 
                      </Text>
                       <FollowButtom />
                     </View>
        
          )
      }else{
        return false
      }
  }

  render() {
    return (
      <View style={styles.container}>
              <ScrollableTabView
                style={{marginTop: 20}}
                initialPage={0}
                renderTabBar={() => <ScrollableTabBar 
                                      tabStyle={{backgroundColor:'#FFF', width:width/2}} 
                                      textStyle={{color:'#000'}} 
                                      underlineStyle={{backgroundColor:'#000', height:1}} />}
                  >

              <View tabLabel='Followed'>
                   <ListView
                    style={styles.listView}  
                    initialListSize={5}
                    enableEmptySections={true}
                    dataSource={this.state.data}
                    renderRow={this._renderRow.bind(this)}
                    horizontal={false}
                    vertical={true}
                    automaticallyAdjustContentInsets={false}
                    showsHorizontalScrollIndicator={false}
                  />
              </View>

               <View tabLabel='You'>
                <ListView
                    style={styles.listView}  
                    initialListSize={5}
                    enableEmptySections={true}
                    dataSource={this.state.data}
                    renderRow={this._renderRowYou.bind(this)}
                    horizontal={false}
                    vertical={true}
                    automaticallyAdjustContentInsets={false}
                    showsHorizontalScrollIndicator={false}
                  />
              </View>
              
               
                
              </ScrollableTabView>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  pic:{
  
    width:40,
    height:40,
    borderRadius:20
  },
   media:{
 
    width:40,
    height:40,
    alignSelf: 'flex-end',
  
  },
  notifications:{
    alignItems: 'flex-end',
    width:width,
    flexDirection:'row',
    padding:10,
    borderWidth:1,
    borderTopColor:'#FFF',
    borderBottomColor:'#F2F2F2',
    borderLeftColor:'#FFF',
    borderRightColor:'#FFF',
    alignItems:'center'

  },
  username:{
    flex:1,
    fontWeight:'bold',
    marginLeft:10,
    fontSize:12
  },
  noti:{
    fontWeight:'normal'
  },
  time:{
    fontSize:8,
    color:'#777'
  },
  listView:{
    marginBottom:50
  }

});


