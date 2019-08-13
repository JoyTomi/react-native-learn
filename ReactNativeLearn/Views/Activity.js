import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "react-navigation";
import RNWebView from "./FuncListView/RNWebView"
import { Button } from "react-native-elements";


class FuncListView extends React.Component {
  static navigationOptions = {
    title: '活动'
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>First Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate("webView")}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: '活动详情'
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


const Activity = createStackNavigator({
  Home: {
    screen: FuncListView,
  },
  Details: {
    screen: DetailsScreen,
  },
  webView:{
    screen:RNWebView,
  }
});

export default Activity