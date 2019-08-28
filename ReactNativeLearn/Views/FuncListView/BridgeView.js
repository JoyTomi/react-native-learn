import React from "react";
import { View } from 'react-native';
import { Button } from "react-native-elements";
import *as wechat from 'react-native-wechat'
import {NativeModules,NativeEventEmitter} from 'react-native';

var CalendarManager = NativeModules.CalendarManager;
var RNBridge = NativeModules.RNBridge;
const calendarManagerEmitter = new NativeEventEmitter(CalendarManager);

//RN监听‘EventReminder’接口，让原生调用RN
const subscription = calendarManagerEmitter.addListener(
  'EventReminder',
  (reminder) => alert(reminder.name)
);


class WeChatView extends React.Component {
    componentWillUnmount(){
      // Don't forget to unsubscribe, typically in componentWillUnmount
      if (subscription !== null){
        // subscription.remove(); 
      }
    }


    useIOSMethod(){
      CalendarManager.addEvent('Birthday Party', '33a');
      CalendarManager.passInt('Birthday Party', 11);
    }

    useIOSMethodAndGetBack(){
      CalendarManager.findEvents((error, events) => {
        if (error) {
          console.error(error);
        } else {
          alert(events)
        }
      });
    }

    letIOSuseRNMethod(){
      CalendarManager.useRNMethod()
    }

    swiftMethod(){
      RNBridge.addEvent('Birthday Party', '23121',123333);
    }
    swiftMethodCallBack(){
      RNBridge.constantsToExport((obj) => {
        alert(obj)
      });
    }


    render() {
      return (
        <View>
          <Button  title="useIOSMethod" onPress={this.useIOSMethod}></Button>
          <Button  title="useIOSMethodAndGetBack" onPress={this.useIOSMethodAndGetBack}></Button>
          <Button  title="letIOSuseRNMethod" onPress={this.letIOSuseRNMethod}></Button>
          <Button  title="swiftMethod" onPress={this.swiftMethod}></Button>
          <Button  title="swiftMethodCallBack" onPress={this.swiftMethodCallBack}></Button>
        </View>
      );
    }
}

export default WeChatView