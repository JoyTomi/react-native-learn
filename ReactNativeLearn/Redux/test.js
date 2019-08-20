import React, { Component } from 'react';
import { View,Text, Button, TextInput } from 'react-native';
import store from './store';
import { getInputChangeAction} from './actionCreators';
import { CHANGE_VALUE} from './ActionTypes';


class test extends Component{

      constructor(props){
        super(props);
        this.state= store.getState();
        this.handChange =this.handChange.bind(this);
        store.subscribe(this.handChange);
      }


    changes(e){
        let type = CHANGE_VALUE;
        let values = e;
        const action = getInputChangeAction(type, values);
        store.dispatch(action);
    }

    handChange(){
        this.setState(store.getState());
    }

    //immutable: state 不允许我们做任何的改变 不能直接改state  做性能优化使用的
    // 父 -> 子  属性传值 this.props去接收  
    // 子 -> 父  属性传函数名并且改变this的指向 this.props去调用父组件的方法 this.props.zzz(this.props.dddd)  
    render(){
        return (
            <View style={{flex:1, backgroundColor:'white',height:1000}}>
                <View style={{flex:1,top:100}}>
                    <TextInput 
                    placeholder= 'todo list' 
                    onChangeText ={this.changes}
                    style={{ backgroundColor:'blue', width: 200, height: 30}} />
                    <Button
                    onPress ={this.submit}
                    type="primary"
                    title= "提交"
                    >
                  </Button>
                  <Text style={{top:100,fontSize:12,height:100,width:200,backgroundColor:'gray'}}>{this.state.values}</Text>
                </View>
            </View>
        )
    }
}

export default test;