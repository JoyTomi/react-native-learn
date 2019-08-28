import React from "react";
import { createStackNavigator } from "react-navigation";
import RNWebView from "./FuncListView/RNWebView";
import { ListItem, Button } from 'react-native-elements';
import TouchableScale from "react-native-touchable-scale"; 
import LinearGradient from "react-native-linear-gradient"; 
import { ScrollView } from "react-native-gesture-handler";
import SwiperViews from "./FuncListView/SwiperView";
import ImagePickerView from "./FuncListView/ImagePickerView";
import TeasetUIView from "./FuncListView/TeasetUI";
import TriangleView from "./FuncListView/TriangleView";
import BaseAnimateView from "./FuncListView/BaseAnimateView";
import CalculatorView from "./FuncListView/CalculatorView";
import ReduxView from "./FuncListView/ReduxView";
import ReduxView2 from "./FuncListView/ReduxView2";
//建议在应用启动时初始化，初始化之前无法使用此模块的其他方法。WeChat模块只需要初始化一次。
//const wechat = require('react-native-wechat')
import *as wechat from 'react-native-wechat';
import WechatView from './FuncListView/WechatView';
import CalendarsView from './FuncListView/CalendarsView';
import BridgeView from './FuncListView/BridgeView';

class FuncListView extends React.Component {

 // If you register here
componentDidMount (){
  wechat.registerApp('wxe3bad9733a77379e')
}

  static navigationOptions = {
    title: '活动',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: 'black',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerLeft: <Button title="LeftBar"/>,
    headerRight: <Button title="RightBar"/>,
    headerBar:<Button title="RightBar"/>,
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
        title: '轮播图',
        subtitle: 'react-native-swiper',
        head_url:"http://b-ssl.duitang.com/uploads/item/201811/04/20181104074412_wcelx.jpg",
        viewName:"SwiperView"
      },
      {
        title: '相机相册',
        subtitle: 'react-native-image-picker',
        head_url:"http://b-ssl.duitang.com/uploads/item/201811/04/20181104074412_wcelx.jpg",
        viewName:"ImagePicker"
      },
      {
        title: 'TeasetUI',
        subtitle: 'teaset',
        head_url:"http://b-ssl.duitang.com/uploads/item/201811/04/20181104074412_wcelx.jpg",
        viewName:"TeasetUI"
      },
      {
        title: '三角形',
        subtitle: 'react-native-triangle',
        head_url:"http://b-ssl.duitang.com/uploads/item/201811/04/20181104074412_wcelx.jpg",
        viewName:"Triangle"
      },
      {
        title: '基础动画',
        subtitle: 'Animated',
        head_url:"http://b-ssl.duitang.com/uploads/item/201811/04/20181104074412_wcelx.jpg",
        viewName:"BaseAnimate"
      },
      {
        title: '计算器',
        subtitle: 'Calculator',
        head_url:"http://b-ssl.duitang.com/uploads/item/201811/04/20181104074412_wcelx.jpg",
        viewName:"Calculator"
      },
      {
        title: 'Redux',
        subtitle: 'redux',
        head_url:"http://b-ssl.duitang.com/uploads/item/201811/04/20181104074412_wcelx.jpg",
        viewName:"Redux"
      },
      {
        title: 'Redux2',
        subtitle: 'redux2',
        head_url:"http://b-ssl.duitang.com/uploads/item/201811/04/20181104074412_wcelx.jpg",
        viewName:"Redux2"
      },
      {
        title: 'Wechat',
        subtitle: 'wechat',
        head_url:"http://b-ssl.duitang.com/uploads/item/201811/04/20181104074412_wcelx.jpg",
        viewName:"Wechat"
      },
      {
        title: 'CalendarsView',
        subtitle: 'CalendarsView',
        head_url:"http://b-ssl.duitang.com/uploads/item/201811/04/20181104074412_wcelx.jpg",
        viewName:"Calendars"
      },
      {
        title: 'Bridge',
        subtitle: 'BridgeView',
        head_url:"http://b-ssl.duitang.com/uploads/item/201811/04/20181104074412_wcelx.jpg",
        viewName:"Bridge"
      }
    ]
    
    return (
      <ScrollView style={{backgroundColor:"#F8F8F8"}}>
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
                badge={{ value: i + 1, textStyle: { color: 'white' },width:40}}
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
  SwiperView:{
    screen:SwiperViews
  },
  ImagePicker:{
    screen:ImagePickerView
  },
  TeasetUI:{
    screen:TeasetUIView
  },
  Triangle:{
    screen:TriangleView
  },
  BaseAnimate:{
    screen:BaseAnimateView
  },
  Calculator:{
    screen:CalculatorView
  },
  Redux:{
    screen:ReduxView
  },
  Redux2:{
    screen:ReduxView2
  },
  Wechat:{
    screen:WechatView
  },
  Calendars:{
    screen:CalendarsView
  },
  Bridge:{
    screen:BridgeView
  }
},
{
  /* The header config from HomeScreen is now here */
  initialRouteName: 'Home',
  /* 设置默认导航啦 */
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
    fontWeight: 'bold',
    }, 
  }
}
);

export default Activity