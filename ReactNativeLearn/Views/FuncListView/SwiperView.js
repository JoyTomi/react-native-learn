import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Swiper from 'react-native-swiper'
import { ScrollView } from 'react-native-gesture-handler';

const baseStyles = StyleSheet.create({
    wrapper: {},
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB'
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5'
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9'
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
    }
  })




  const numberStyles = {
    wrapper: {
    },
    slide: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'transparent'
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
    },
    image: {
      flex: 1
    },
    paginationStyle: {
      position: 'absolute',
      bottom: 10,
      right: 10
    },
    paginationText: {
      color: 'white',
      fontSize: 20
    }
  }
  
  const renderPagination = (index, total, context) => {
    return (
      <View style={numberStyles.paginationStyle}>
        <Text style={{ color: 'grey' }}>
          <Text style={numberStyles.paginationText}>{index + 1}</Text>/{total}
        </Text>
      </View>
    )
  }
  
class SwiperViews extends React.Component {
    render() {
      return (
        <ScrollView>
            <Swiper style={baseStyles.wrapper} showsButtons={true}>
          <View style={baseStyles.slide1}>
            <Text style={baseStyles.text}>Hello Swiper</Text>
          </View>
          <View style={baseStyles.slide2}>
            <Text style={baseStyles.text}>Beautiful</Text>
          </View>
          <View style={baseStyles.slide3}>
            <Text style={baseStyles.text}>And simple</Text>
          </View>
        </Swiper>
       

        <Swiper
            style={numberStyles.wrapper}
            renderPagination={renderPagination}
            loop={true}>
            <View style={numberStyles.slide} title={<Text numberOfLines={1}>Aussie tourist dies at Bali hotel</Text>}>
              <Image style={numberStyles.image} source={{uri:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565676611489&di=9a1a42dffe4fad358e301c231d866a38&imgtype=0&src=http%3A%2F%2Fpic25.nipic.com%2F20121112%2F9252150_150552938000_2.jpg"}} />
            </View>
            <View style={numberStyles.slide} title={<Text numberOfLines={1}>Big lie behind Nine’s new show</Text>}>
            <Image style={numberStyles.image} source={{uri:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565684713468&di=42f48683e14bd81f86716d32bf025fa3&imgtype=0&src=http%3A%2F%2Fpic32.nipic.com%2F20130902%2F13395269_103525238102_2.jpg"}} />
            </View>
            <View style={numberStyles.slide} title={<Text numberOfLines={1}>Why Stone split from Garfield</Text>}>
            <Image style={numberStyles.image} source={{uri:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565684713467&di=e877d566de9c91157b0753d8b9713201&imgtype=0&src=http%3A%2F%2Fimg.redocn.com%2Fsheying%2F20140731%2Fqinghaihuyuanjing_2820969.jpg"}} />
            </View>
            <View style={numberStyles.slide} title={<Text numberOfLines={1}>Learn from Kim K to land that job</Text>}>
            <Image style={numberStyles.image} source={{uri:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565684713465&di=77d679a974b54b4da3e2c351bc58ee6f&imgtype=0&src=http%3A%2F%2Fpic44.nipic.com%2F20140727%2F18179070_152408117000_2.jpg"}} />
            </View>
          </Swiper>
        </ScrollView>
      )
    }
  }

  export default SwiperViews
  
  
  
