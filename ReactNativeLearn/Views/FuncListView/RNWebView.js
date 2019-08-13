import React from "react";
import {WebView} from "react-native-webview";

class RNWebView extends React.Component {
    render() {
      return (
        <WebView
          source={{uri: 'https://www.baidu.com'}}
          style={{marginTop: 0}}
        />
      );
    }
}

export default RNWebView