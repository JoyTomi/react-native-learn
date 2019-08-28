import React from "react";
import { View } from 'react-native';
import { Button } from "react-native-elements";
import *as wechat from 'react-native-wechat'
import {Toast} from 'teaset';
class WeChatView extends React.Component {
    checkWechatIsInstalled(){
      wechat.isWXAppInstalled()
      .then( ( isInstalled ) => {
            if ( isInstalled ) {
              Toast.show({
                text: '已安装',
                position: 'center',
                duration: 2000,
              });
            } else {
              Toast.show({
                text: '没有安装微信软件，请您安装微信之后再试',
                position: 'center',
                duration: 2000,
              }); 
            }
        } );
    }

    openWechat(){
      wechat.openWXApp()
    }

    shareToTimeLine(){
      wechat.shareToTimeline({
        type: 'imageUrl',
        title: 'web image',
        description: 'share web image to time line',
        mediaTagName: 'email signature',
        messageAction: undefined,
        messageExt: undefined,
        imageUrl: 'http://www.ncloud.hk/email-signature-262x100.png'
      });
    }
    render() {
      return (
        <View>
          <Button  title="isInstalledWechatApp" onPress={this.checkWechatIsInstalled}></Button>
          <Button  title="openWeChatApp" onPress={this.openWechat}></Button>
          <Button  title="shareToTimeLine" onPress={this.shareToTimeLine}></Button>
        </View>
      );
    }
}

export default WeChatView