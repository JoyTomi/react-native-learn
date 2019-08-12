import React from "react";
import { Button,View, Text } from "react-native";
import { createStackNavigator } from "react-navigation";

class FirstScreen extends React.Component {
    static navigationOptions = {
        title: '发现',
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
    title: '发现详情',
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


const Discovery = createStackNavigator({
  Home: {
    screen: FirstScreen,
  },
  Details: {
    screen: DetailsScreen,
  },
});

export default Discovery