import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "react-navigation";
import RNWebView from "./FuncListView/RNWebView"
import { Button } from "react-native-elements";
import { ListItem } from 'react-native-elements'
import TouchableScale from "react-native-touchable-scale"; 
import LinearGradient from "react-native-linear-gradient"; 

class FuncListView extends React.Component {
  static navigationOptions = {
    title: '活动'
  };
  render() {
    const list = [
      {
        title: 'webView',
        subtitle: 'av-timer',
        head_url:"http://b-ssl.duitang.com/uploads/item/201811/04/20181104074412_wcelx.jpg"
      },
      {
        title: 'react-native-element',
        subtitle: 'flight-takeoff',
        head_url:"http://b-ssl.duitang.com/uploads/item/201811/04/20181104074412_wcelx.jpg"
      },
    ]

    return (
      <View>
          {
            list.map((item, i) => (
              <ListItem
              Component={TouchableScale}
              friction={90} //
              tension={100} // These props are passed to the parent component (here TouchableScale)
              activeScale={0.95} //
              linearGradientProps={{
                colors: ['#FF9800', '#F44336'],
                start: 1,
                end: 0.2,
              }}
              ViewComponent={LinearGradient} // Only if no expo
              // title="Chris Jackson"
              // titleStyle={{ color: 'white', fontWeight: 'bold' }}
              // subtitleStyle={{ color: 'white' }}
              // subtitle="Vice Chairman"
              // chevronColor="white"
              // chevron



                key={i}
                title={item.title}
                subtitle={item.subtitle}
                leftAvatar={{ source: { uri: item.head_url} }}
                onPress={() => this.props.navigation.push('webView')}
              />
            ))
          }
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