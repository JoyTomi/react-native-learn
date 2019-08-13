import React from "react";

import Triangle from 'react-native-triangle';

class TriangleView extends React.Component {
    render() {
      return (
        <Triangle
            width={90}
            height={150}
            color={'#D80016'}
            direction={'right'}
        />      
      );
    }
}
export default TriangleView