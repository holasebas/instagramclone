import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  Dimensions
} from 'react-native';
var width = Dimensions.get('window').width;
var feedData = require('./feedData');
export default class stories extends Component {
  constructor(props) {
    super(props);
    const ds1 = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      data:ds1.cloneWithRows(feedData)
    };
  }




   _renderRow(rowData, rowID, sectionID, highlightRow){
     
    return(
 
                <View style={styles.pics}>
              
                  <Image
                    style={styles.pic}
                    source={rowData.picture} 
                   />


                 </View>
    
      )
  }


  render() {
    console.log(this.state.data)
    return (
       <View style={styles.stories}>
             <ListView
                style={styles.listView}  
                initialListSize={5}
                enableEmptySections={true}
                dataSource={this.state.data}
                renderRow={this._renderRow.bind(this)}
                horizontal={true}
                vertical={false}
                automaticallyAdjustContentInsets={false}
                showsHorizontalScrollIndicator={false}
              />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  
   pic:{
    width:60,
    height:60,
    borderRadius:30,
    margin:5
    

     
  },
  listView:{
    width:width,
    
    overflow:"hidden"

 
    
  },
  pics:{   
    flex:1,
    height:60,
    

  },
  stories: {
  borderWidth:1,
  borderTopColor:'#f2f2f2',
  borderLeftColor:'#f2f2f2',
  borderRightColor:'#f2f2f2',
  borderBottomColor:'#CCC',

    width:width,
    height:70,
  
    backgroundColor: '#f2f2f2',
  }
});

