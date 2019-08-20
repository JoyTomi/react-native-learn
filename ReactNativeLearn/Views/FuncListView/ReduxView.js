import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import store from  "../../Redux/store";
import {changeColorAction} from '../../Redux/actionCreators';
import {CHANGE_COLOR} from '../../Redux/ActionTypes';


class ReduxView extends React.Component {
    
    changeColor(color){
        let type = CHANGE_COLOR;
        const action = changeColorAction(type,color)
        store.dispatch(action);
    }

    render(){
        return(
            <View>
            <Button title="ChangeAnotherViewColorRed" onPress={()=>this.changeColor('red')}></Button>
            <Button title="ChangeAnotherViewColorYellow" onPress={()=>this.changeColor('yellow')}></Button>
            <Button title="ChangeAnotherViewColorBlue" onPress={()=>this.changeColor('blue')}></Button>
            </View>
        )
    }
}

export default ReduxView