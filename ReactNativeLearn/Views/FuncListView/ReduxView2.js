import React from 'react'
import { View } from 'react-native'
import store from  "../../Redux/store";

class ReduxView extends React.Component {

    constructor(props){
        super(props);
        this.state= store.getState();
        this.handChange =this.handChange.bind(this);
        store.subscribe(this.handChange);
      }

      componentDidMount(){
          this.handChange()
      }


    handChange(){
        this.setState(store.getState());
    }

    render(){
        return(
            <View style={{backgroundColor:this.state.color,height:100}}></View>
        )
    }
}

export default ReduxView