import React from "react";
import { Button,View, Text } from "react-native";
import { createStackNavigator } from "react-navigation";
import {WebView} from "react-native-webview";


class MyWeb extends React.Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://www.baidu.com'}}
        style={{marginTop: 0}}
      />
    );
  }
}

class FirstScreen extends React.Component {
  static navigationOptions = {
    title: '活动'
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>First Screen</Text>
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
    screen: MyWeb,
  },
  Details: {
    screen: DetailsScreen,
  },
});

export default Activity