import {Theme,Button,Toast} from 'teaset';
import React from "react";
import {View} from 'react-native'

//设置主题 作用于 引用teaset的组件
Theme.set(Theme.themes.black);
class ThemeView extends React.Component {
    showCustom() {
        Toast.show({
            text: 'Toast custom',
            position: 'center',
            duration: 2000,
        });
    }
    render(){
        return (
            <View>
                <Button title="123" onPress={() => this.showCustom()}  style={{marginTop:10}}>123</Button>
            </View>
        )
    };
}

export default ThemeView