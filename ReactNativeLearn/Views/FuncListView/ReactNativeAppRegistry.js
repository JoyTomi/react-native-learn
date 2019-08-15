import {AppRegistry} from 'react-native';
import React from 'react';

class Registry extends React.Component {
    componentDidMount(){
        alert(this.props)
    }

    // renderImage(imgURI) {
    //     return (
    //       <Image source={{uri: imgURI}} />
    //     );
    //   }
    //   render() {
    //     return (
    //       <View>
    //         {this.props.images.map(this.renderImage)}
    //       </View>
    //     );
    //   }
}

AppRegistry.registerComponent('Registry', () => Registry);