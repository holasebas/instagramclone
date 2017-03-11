import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Linking,
  Image,
  AsyncStorage,
  Navigator,
  TabBarIOS,


  
} from 'react-native';



  


import Feed from './feed';
import Search from './search';
import Noti from './noti';
import Profile from './profile';


var rateicon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAEnUlEQVR4Xu2bf6hURRTHP08l06xEhYxC+mHlLwiKTElMifBHgqnljwTF+sfATCoEK9ICxagsIolAU0lETVCQzAQl6w+LjEgxMzAK6S+LNEnTSuULs/Hedu/O3DN379237x1Y3j52zpxzPjs7M+fM3BY6uLR08PjpBNA5Ajo4gbJ+ArI7G3gY+AN4CzhUxndRFoDlwPOtAv4TuAc4WjSEMgD0B34GrqgKdgswsyMAWAEsSQj0InAb8GOREIoeAVcDJ4BrU4J8B3iqmQE8A7xRI8BzwADg16IgFDkC9Js/DtzoCW4Z8HIzApgDbAgI7Dc3Cs4GtI1uUtQIkJ3DwNBAjxcAqwPbRjUrCsBE4KMMnmoluAP4J4OOqWlRAD4F7s/o4Qxga0adzM2LAHAv8EVmz+Brtzu8ZNANVikCwDZgWrBHbRs+AOwz6gap1RvAQOAHMNcdPgHGB0VibFRvAO8C842+VdTurGemWE8AN7ns7spIAJuBWZF9pKrnCaCr28Bo+RoCPO3+z8P399wWWjtJJU25iQWAEhkFWXkNcu+VyXXPzbPkjv5yc8ox4Hug8lfzzBmL7VoArgJGA4Orgr3OYqgAnV9aAWkNSNln6qhJA3AL8BlwQwGO19vE324XOteV39rYSwOgpEXJSzOJCjEvVAeUBuAAMKKZogcSS25pAN4uujJTAOzHgXWhI6CvmwO0nDWDrAeeSJoMa60Cqt7uB25v5wQ2ufns36Q4fPsArQKCcGs7hfAh8FituoIPgOJWkVIQtLVtT7IDmA5oGUyVEABSvtnNCb6CZqMAUvVJKfh5n0OhANSPUlttjq73dVry53uAyYC2zV7JAkCdad+v8lajbodVPJkE6HwhSLICUKeq7ApCvyALxTX6HJgA6KA1WCwA1LmKFKLdJ9hSfRtq5zrOkhFaASicu4C9QO/6xubt/SvgQeC0t2VCgxgA6m64g9DLYjwHnW+BscDv1r5iAcjuIuBNqwOReiONJff/zOYBQPnCkchALOqa6TXyokpkeQBQ2fpjSwSROjo26+nb6fls5AHAd+bv8yHmc42+qHtFeQBYCyjXLkMeBXTyZJY8AOjcT+d/ZUj0ZYpYANLX+qu7P2WI0l1lfGaJBaBUWVfeypLvMly6SPQxFkBZK0AlmOiVIBbAs8DrZX39zq6SM40Ek8QCeB+YZ7Kcn5LmAM0FJokF8KXLB0zGc1LSlTqtBiaJASBd3fS2JEIX3A1x3QxVXeEVV8iwBKF9gPYDJokBYF0BVKbWEdVPVR6PcfPJ3RkjiVoJYgCo+rIrg7OqJ2rSPFhDp4u7DKFzPAEOEa0EOsnWqMosMQCeA14LsKij6sXATiD0xlcPYKF7puCaABvDrBlpDADfCnASWAqsicjYND+8BDwJdKsBYiqwPQDU/5rEANjoHnup7lTl6FXAq0nn8RYn3fHcSmBKir6qQirUZpYYACpC7m5lUcP7A+BF90xAZmcCFEa5u0IqxVVES/F9QOLZn6/PGADq+yG3EdL9HB2pf+MzmMPn8vkR99KdYo20U9Z+YwFY7TaMXieAhvkqSnKkcwSUBL5hzF4G7sCwQYn1s08AAAAASUVORK5CYII='
var followsicon = 'data:image/png;base64,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'
var infoicon = 'data:image/png;base64,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'
var profileicon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAEiklEQVR4XuWbWchVVRTHf2qamSah5YNgghpBNIgoZqIgPVQiTgiFLxqEIZY4GwaZIA5YkU3ig76I8Ik4fChGKSg4DygShpVSZOI8UWHaxD/2/The7/Wcfc7a517P3XDhwl177bV+Z++z11573VY0eGvV4P5TCwDtgeeBPsCj7gFcAX4AjgF/5vlQ8gLQBhgDTASGAQ9WcfImsB1YBWwG/gkNIw8ArwCfuCfu4893wFTgG59OvrIhAbQDlgOTfI0qk/8UmAHczqinYvdQADq4KfySkdFfAaMBLRHTFgJAa6AZGG5qKWxy75F/LfWGADAfeN/SyIiud4HFlrqtATzttrIHLI2M6NIW+YzbMk2GsAawwa1VE+OqKGkCXrMawBJAT+A0BA+uFBv0AH61gGAJYC6wyMKoBDq0LX6UQC5WxBKAAharbS/O8G3Aq3FCSX63BHAR6JpkUAOZs0B3Az1m6/Uh4A8Lgzx0tAX+8pAPGgk+BlzIaoxnf50kr3n2uUvcagl0Am5kNcazv2Zd5tDYCoBs/w142NOJtOJ68qVcQlod//ezBHAAGJDJmuSd9wCDk4tXl7QEsBSYZWFUAh0LgfcSyMWKWALQ09csyKP1dWeOzGNZApAxh4F+ma26t4J9wCCrMawBKDrbamVcFT2KNndYjWENQHatB8ZaGVimZy0w3lJ3CADang4BvSwNBb4H+lvHGyEAyG85v8sqXgd+AYYAPxlDNY0Dym17wuUGn81o9BFgFHAmo56K3UPNgNJgugVaAEwDfNNkt4BlwAeAvgdpoQGUjNaSmAm8DnSO8eQqoJednDef8uVj5wWgNK6uxBTCDozcDSrNLad1N6g9XmFusCdeawBBpnEWpXnPgCy2BumbFwClyrQb9HZb5ONAR/eRYzpK63MeOAX8CBwHLgfxOqI0FAC9/V9212Na80+ldOQEsBvYAnwdonbAEoB06eU2GRgJKEtk2ZRx2gh8ARy0UmwBQDpU/DA7x4TIXkD5B13CZroszQrgRbdf68nXoml5KL5InYdIC0DT+0PgzVp4XWHMz4E5wO++9qQBoJfaGkCxfj013UvqqLzfxyhfACp3+SxFXO9jUxZZRZBvAauTKkkKQFUfHwPvJFVcYzktTyVoY1+QSQCoxG0l8EaNnfId/ktgSlypXRwA/a6avQm+o9eJ/AoXl1SdCXEAQtb75MVIdQtLqg12LwA6u+tcXoSmJK3Kd+5q1QDo0HI0cli53yFcB54Dfi53pBIA3bsrKaEMbJGafBoK/B11qhIA5e9M6m/qkJ4OatodWlo5gG4u//5IHRpvYZJSb08Cl0rKygFo28ha3GxhaEgdKr5uCeiiAFR0pHhaVd5FbqoqUU2jsk93XIwofJxeZM8jvqneWHXHLQCUwjqXIGdfFD56B2jG3yotgXHAuqJ4l9APpe2aSwCUWhqRsGNRxHSNP04AdFujf23pXx6N1JRk7SIAio52NpLnEV9fEIAinPjSPr95ApDHnxzSGhi6X5MAnHThYejB6lH/twLwNqC0VyO223EZocJDaXgA/wHo1p/d2A4xpgAAAABJRU5ErkJggg==';










 var globalProps = {navigator}
export default class Tabs extends Component{


constructor(props) {
  super(props);

  this.state = {
    selectedTab: 'Feed',
    self:false
  };
}

  render() {

  

  
    return (
  

      <TabBarIOS   translucent={false} style={styles.tabBar}>
           
      
            <TabBarIOS.Item

             
                 icon={{uri: rateicon, scale: 3}}
                selected={this.state.selectedTab === 'Feed'}
                onPress={() => {
                  if(this.state.selectedTab == 'Feed'){
                     this.setState({self:true})   
                  }else{
                    this.setState({self:false})   
                  }
                  this.setState({
                    selectedTab:'Feed'
                  })
                }}
                >

            <Feed self={this.state.self}/>
            </TabBarIOS.Item>


             <TabBarIOS.Item
          
            tintColor='red'
            icon={{uri: profileicon, scale: 3}}
            selected={this.state.selectedTab === 'Search'}
            onPress={() => {

              this.setState({
                selectedTab:'Search'
              })
            }}
            >
            <Search />
            </TabBarIOS.Item>



          <TabBarIOS.Item
            
             icon={{uri: followsicon, scale: 3}}
              selected={this.state.selectedTab === 'Noti'}
              onPress={() => {

                this.setState({
                  selectedTab:'Noti'
                })
              }}
              >

            <Noti />
         </TabBarIOS.Item>


            <TabBarIOS.Item
                style={{backgroundColor:'red'}}
            
                icon={{uri: infoicon, scale: 3}}
                selected={this.state.selectedTab === 'Profile'}
                onPress={() => {

                this.setState({
                  selectedTab:'Profile'
                })
              }}
              >

              <Profile/>
           </TabBarIOS.Item>


      </TabBarIOS>
       

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
  }
});


