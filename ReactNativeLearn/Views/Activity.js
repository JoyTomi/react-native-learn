import React from "react";
import { createStackNavigator } from "react-navigation";
import RNWebView from "./FuncListView/RNWebView"
import { ListItem } from 'react-native-elements'
import TouchableScale from "react-native-touchable-scale"; 
import LinearGradient from "react-native-linear-gradient"; 
import { ScrollView } from "react-native-gesture-handler";
import SwiperViews from "./FuncListView/SwiperView"

class FuncListView extends React.Component {
  static navigationOptions = {
    title: '活动'
  };
  render() {
    const list = [
      {
        title: 'webView',
        subtitle: 'react-native-webView',
        head_url:"http://b-ssl.duitang.com/uploads/item/201811/04/20181104074412_wcelx.jpg",
        viewName:"WebView"
      },
      {
        title: 'react-native-element',
        subtitle: 'flight-takeoff',
        head_url:"http://b-ssl.duitang.com/uploads/item/201811/04/20181104074412_wcelx.jpg",
        viewName:"SwiperView"
      },
    ]
    
    return (
      <ScrollView>
          {
            list.map((item, i) => (
              <ListItem
                Component={TouchableScale}
                friction={90} //
                tension={100} // These props are passed to the parent component (here TouchableScale)
                activeScale={0.95} //
                linearGradientProps={{
                  colors: ['#FF9800', '#F44336'],
                  start: {x:1,y:0},
                  end: {x:0,y:1}
                }}
                ViewComponent={LinearGradient} 
                badge={{ value: 3, textStyle: { color: 'white' } }}
                key={i}
                title={item.title}
                titleStyle={{color:'white'}}
                subtitle={item.subtitle}
                subtitleStyle={{color:'white'}}
                leftAvatar={{ source: { uri: item.head_url} }}
                onPress={() => this.props.navigation.push(item.viewName)}
                containerStyle = {{borderRadius:10,marginTop:10,marginLeft:10,marginRight:10}}
              />
            ))
          }
      </ScrollView>
    );
  }
}

const Activity = createStackNavigator({
  Home: {
    screen: FuncListView,
  },
  WebView:{
    screen:RNWebView,
  },
  SwiperView:SwiperViews
});

export default Activity