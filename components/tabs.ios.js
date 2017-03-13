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

var feedicon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAADBElEQVR4Xu2aOaxOQRTHf49QiMJS4ZUSnV1CFAqdNbGFBIlQ2SIKtBQaxKMgQjRiS1BYColWhELE0lsKUZDYFbacZO7z3HeXWe6de3O/M+135sz5/74z58zM9/XR46Ovx/WjADQDepyAboEeTwAtgk1ugZHAAPAH2AP8biIbmwIwFrgCLDWibwEbgK+xITQBYAoggmelxD4GlgFvY0KIDWAmcBsQCFnjjcmKZ7EgxAQg6S5pL+lfND4Da4G7MSDEArDTFDwpfDbjJyBzztgYh9jUDWAEcMxUeZ84jwL7TKfwmV86p04AY4BLwMrSKIoNrgObgO+BfjKn1wVgkqn0cyoK+hGwAnhXkb9BN3UAmA7cAforDvalaZMvqvRbNYAlwFWLSu+r4SOwBrjn6yA9r0oAu4DjgG2l99UgHWI7cNbXwdB5VQBIzvTStmKOI8D+0A4RCiB9po8JQNa6AWwM6RAhAKTIybF2RmzVqfWCOoQvAGlvN4HJDYtPln9lOsRz13h8AKwCLgBy0GnT+ASsc71DuAI4AByG1r4k/QJ2A6dsvxlbAKPMxWSLreOG7U4CewEBUjhsAEwE5Dy+qMxZyz6X0+h64EtRXGUApplKP7Vl4mzDeQosB17nTSgCsBi4BoyzXa2ldnKBkhvpw6z48gDMA+4Dsve7ML4B84FhT215AM4BW7ugfIiG0+YO8Z+sPABy0djWMQDSGnekNeUBmGu2wOiOQPgBLACe2AIQu9kmCyZkQFhYw4NHKGup9A8ynLw3V+dh4sW2rA3mBSXdYXVoxBXPl4cY6ftOQwE44fpnrBmgW0BrgBZB7QKOBTSvT2e58TlntL4NugTo02Vc/A9Cj3kOcAlQAXi0WRfAmgEJAd0CjpU8Ma97j9btX7eAbgFDQGuA1gA/Apc9Xl/kB9XNlsvV7T+4CMpvhOctxSRm8keGi5Zz6vYfDEBqx0Hzb87xJaI+ACeAQ5bik7fKOv0HA3DQ0m5T3y7QblUO0SkAB1idNNUM6OTX6iBKM8ABVidN/wLTeplBH4GUJgAAAABJRU5ErkJggg=='
var rateicon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAEnUlEQVR4Xu2bf6hURRTHP08l06xEhYxC+mHlLwiKTElMifBHgqnljwTF+sfATCoEK9ICxagsIolAU0lETVCQzAQl6w+LjEgxMzAK6S+LNEnTSuULs/Hedu/O3DN379237x1Y3j52zpxzPjs7M+fM3BY6uLR08PjpBNA5Ajo4gbJ+ArI7G3gY+AN4CzhUxndRFoDlwPOtAv4TuAc4WjSEMgD0B34GrqgKdgswsyMAWAEsSQj0InAb8GOREIoeAVcDJ4BrU4J8B3iqmQE8A7xRI8BzwADg16IgFDkC9Js/DtzoCW4Z8HIzApgDbAgI7Dc3Cs4GtI1uUtQIkJ3DwNBAjxcAqwPbRjUrCsBE4KMMnmoluAP4J4OOqWlRAD4F7s/o4Qxga0adzM2LAHAv8EVmz+Brtzu8ZNANVikCwDZgWrBHbRs+AOwz6gap1RvAQOAHMNcdPgHGB0VibFRvAO8C842+VdTurGemWE8AN7ns7spIAJuBWZF9pKrnCaCr28Bo+RoCPO3+z8P399wWWjtJJU25iQWAEhkFWXkNcu+VyXXPzbPkjv5yc8ox4Hug8lfzzBmL7VoArgJGA4Orgr3OYqgAnV9aAWkNSNln6qhJA3AL8BlwQwGO19vE324XOteV39rYSwOgpEXJSzOJCjEvVAeUBuAAMKKZogcSS25pAN4uujJTAOzHgXWhI6CvmwO0nDWDrAeeSJoMa60Cqt7uB25v5wQ2ufns36Q4fPsArQKCcGs7hfAh8FituoIPgOJWkVIQtLVtT7IDmA5oGUyVEABSvtnNCb6CZqMAUvVJKfh5n0OhANSPUlttjq73dVry53uAyYC2zV7JAkCdad+v8lajbodVPJkE6HwhSLICUKeq7ApCvyALxTX6HJgA6KA1WCwA1LmKFKLdJ9hSfRtq5zrOkhFaASicu4C9QO/6xubt/SvgQeC0t2VCgxgA6m64g9DLYjwHnW+BscDv1r5iAcjuIuBNqwOReiONJff/zOYBQPnCkchALOqa6TXyokpkeQBQ2fpjSwSROjo26+nb6fls5AHAd+bv8yHmc42+qHtFeQBYCyjXLkMeBXTyZJY8AOjcT+d/ZUj0ZYpYANLX+qu7P2WI0l1lfGaJBaBUWVfeypLvMly6SPQxFkBZK0AlmOiVIBbAs8DrZX39zq6SM40Ek8QCeB+YZ7Kcn5LmAM0FJokF8KXLB0zGc1LSlTqtBiaJASBd3fS2JEIX3A1x3QxVXeEVV8iwBKF9gPYDJokBYF0BVKbWEdVPVR6PcfPJ3RkjiVoJYgCo+rIrg7OqJ2rSPFhDp4u7DKFzPAEOEa0EOsnWqMosMQCeA14LsKij6sXATiD0xlcPYKF7puCaABvDrBlpDADfCnASWAqsicjYND+8BDwJdKsBYiqwPQDU/5rEANjoHnup7lTl6FXAq0nn8RYn3fHcSmBKir6qQirUZpYYACpC7m5lUcP7A+BF90xAZmcCFEa5u0IqxVVES/F9QOLZn6/PGADq+yG3EdL9HB2pf+MzmMPn8vkR99KdYo20U9Z+YwFY7TaMXieAhvkqSnKkcwSUBL5hzF4G7sCwQYn1s08AAAAASUVORK5CYII='
var followsicon = 'data:image/png;base64,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'
var profileicon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAEiklEQVR4XuWbWchVVRTHf2qamSah5YNgghpBNIgoZqIgPVQiTgiFLxqEIZY4GwaZIA5YkU3ig76I8Ik4fChGKSg4DygShpVSZOI8UWHaxD/2/The7/Wcfc7a517P3XDhwl177bV+Z++z11573VY0eGvV4P5TCwDtgeeBPsCj7gFcAX4AjgF/5vlQ8gLQBhgDTASGAQ9WcfImsB1YBWwG/gkNIw8ArwCfuCfu4893wFTgG59OvrIhAbQDlgOTfI0qk/8UmAHczqinYvdQADq4KfySkdFfAaMBLRHTFgJAa6AZGG5qKWxy75F/LfWGADAfeN/SyIiud4HFlrqtATzttrIHLI2M6NIW+YzbMk2GsAawwa1VE+OqKGkCXrMawBJAT+A0BA+uFBv0AH61gGAJYC6wyMKoBDq0LX6UQC5WxBKAAharbS/O8G3Aq3FCSX63BHAR6JpkUAOZs0B3Az1m6/Uh4A8Lgzx0tAX+8pAPGgk+BlzIaoxnf50kr3n2uUvcagl0Am5kNcazv2Zd5tDYCoBs/w142NOJtOJ68qVcQlod//ezBHAAGJDJmuSd9wCDk4tXl7QEsBSYZWFUAh0LgfcSyMWKWALQ09csyKP1dWeOzGNZApAxh4F+ma26t4J9wCCrMawBKDrbamVcFT2KNndYjWENQHatB8ZaGVimZy0w3lJ3CADang4BvSwNBb4H+lvHGyEAyG85v8sqXgd+AYYAPxlDNY0Dym17wuUGn81o9BFgFHAmo56K3UPNgNJgugVaAEwDfNNkt4BlwAeAvgdpoQGUjNaSmAm8DnSO8eQqoJednDef8uVj5wWgNK6uxBTCDozcDSrNLad1N6g9XmFusCdeawBBpnEWpXnPgCy2BumbFwClyrQb9HZb5ONAR/eRYzpK63MeOAX8CBwHLgfxOqI0FAC9/V9212Na80+ldOQEsBvYAnwdonbAEoB06eU2GRgJKEtk2ZRx2gh8ARy0UmwBQDpU/DA7x4TIXkD5B13CZroszQrgRbdf68nXoml5KL5InYdIC0DT+0PgzVp4XWHMz4E5wO++9qQBoJfaGkCxfj013UvqqLzfxyhfACp3+SxFXO9jUxZZRZBvAauTKkkKQFUfHwPvJFVcYzktTyVoY1+QSQCoxG0l8EaNnfId/ktgSlypXRwA/a6avQm+o9eJ/AoXl1SdCXEAQtb75MVIdQtLqg12LwA6u+tcXoSmJK3Kd+5q1QDo0HI0cli53yFcB54Dfi53pBIA3bsrKaEMbJGafBoK/B11qhIA5e9M6m/qkJ4OatodWlo5gG4u//5IHRpvYZJSb08Cl0rKygFo28ha3GxhaEgdKr5uCeiiAFR0pHhaVd5FbqoqUU2jsk93XIwofJxeZM8jvqneWHXHLQCUwjqXIGdfFD56B2jG3yotgXHAuqJ4l9APpe2aSwCUWhqRsGNRxHSNP04AdFujf23pXx6N1JRk7SIAio52NpLnEV9fEIAinPjSPr95ApDHnxzSGhi6X5MAnHThYejB6lH/twLwNqC0VyO223EZocJDaXgA/wHo1p/d2A4xpgAAAABJRU5ErkJggg==';
var searchicon = 'data:image/png;base64,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'
var plusicon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAADcklEQVR4Xu2bWahOURTHfxeZKUSIDKV4UaZIpoQiD95EXihSMpeSF15IESGJlCfDm0KRMj6QMaVIMo/Fg0wZQv86V+du+/vO2ec73z1Hd63Xs9d/rf3fe+1h7XUaaOHS0ML7jxFgMyA7A/2AUUBfoF12mJo0fwAvgZvA8yxIoSHQCpgHrI46n8VmvXREwg7gCPArrZEQAjTih4GJacELancZmA+8SGM/LQFDgHOASPgfRGExFXiQ5GwaAnoAN4CBSWAl+/4EGA28r+ZXGgKOAnM9IFeBfcBt4CvwuwACOgIjgaXAWI99rQcKh4qSRMAY4JpHex2wraBO+zqjxVk+bfF81E51qxIDSQQcBBY5ypuBDQWMdhqTWyMi4m0PAEuyEvAK6BNTfg0MAr6l8aaANh2Ap0DPmO1nwIAsBHT3LCB7gWU5dUwx2+joW+B6Trj7gcUOVlfgow+/Wgho63O3kTXRYaNWX9V5LaJxqRqrAQa1FigU4jIYeBxKwFDgnqO0HNgT4EylprOBE87HmcDpHLBXeQZJg/nQCPAwUC0EbAZYCNgaYIug7QK2DTZlwM4BdhCyk6Adhd27gDIu4wPP8LpSz3J0TkZX2RAoJUCPOQrNfhf4CbQO8TrHtnoXaFs0AUXkAuN9du8zzT4DWjwB54EpOU7rEKizwIyiQyDE4ca2lhCxjJClxCwnaElRywo3ZcDS4vYuYA8j9jJkT2NZztXNeRdYAezOwUklQ045OLrU6HJTq+gFe7sDkulxtD+g4oK4bAI21uoh0BnYBfSKsN4AIvdLDtiqYFnv4KjIQzb+kWqPo22AT04V6CVgcg5O1hPiCjAuZuAzoAIJb/FkUo3QBU+HJwHKxZVRpnnCyJcz+Ot7EgEqNVHJSVxUhCgSHpWMAcW5Zmhvx6+FwKFKviYR0B647ykyegesBVRD+L1gIpQUXRCV7XVzfNEgDavmYxIBwpsOnAHvvwUfgLuA4qy5c4PyvRMwHOjiGQT5o5BQiW9FSUOAlFcCOwse6VDz8lk7TVVJS4BAVI6qM4B2hzKL3gpUyqcCyUQJIUBgIyJWJyQiF9PgYjRb76Q1H0qAcKWjKuw5sT9G3NeZtPZrbaeKVVWzqpr9ePTnSBBmFgKCDJS9sRFQ9hGqt382A+rNcNnxbQaUfYTq7Z/NgHozXHb8P3v2FlCuSu/lAAAAAElFTkSuQmCC'




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

  


      <TabBarIOS   translucent={false} style={styles.tabBar} tintColor='#000'  unselectedItemTintColor="#777">
           
      
            <TabBarIOS.Item

             
                 icon={{uri: feedicon, scale: 3}}
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
            icon={{uri: searchicon, scale: 4}}
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
          
            tintColor='red'
            icon={{uri: plusicon, scale: 3}}
            selected={this.state.selectedTab === 'Searcsh'}
            onPress={() => {

              this.setState({
                selectedTab:'Seasrch'
              })
            }}
            >
           <Search />
            </TabBarIOS.Item>



          <TabBarIOS.Item
            
             icon={{uri: followsicon, scale: 4}}
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
                  
            
                icon={{uri: profileicon, scale: 4}}
                selected={this.state.selectedTab === 'Profile'}
                onPress={() => {

                this.setState({
                  selectedTab:'Profile'
                })
              }}
              >

              <Profile navigator={this.props.navigator}/>
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


