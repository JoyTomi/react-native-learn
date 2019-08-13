import React from "react";
import { Button,View, Text,Icon } from "react-native";
import { createBottomTabNavigator,createStackNavigator, createAppContainer } from "react-navigation";
import Activity from "./Views/Activity"
import Discovery from "./Views/Discovery"
import BookShelf from "./Views/BookShelf"
import Mine from "./Views/Mine"
class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Details',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('Details')}
        />
      </View>
    );
  }
}


const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Details: {
    screen: DetailsScreen,
  },
});



const TabNavigator = createBottomTabNavigator(
  {
    活动: Activity,
    发现: Discovery,
    书架: BookShelf,
    我的: Mine,
  },
  //活动的第二页隐藏tabbar
  Activity.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
      tabBarVisible = false;
    }
    return {
      tabBarVisible,
      // tabBarOnPress:(obj) => {
      //   alert('1')
      // },

    };
  }



);
 
export default createAppContainer(TabNavigator);