import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';
var w =Dimensions.get("window").width
var h =Dimensions.get("window").height

const FullScreenImage = props => {
  const {dataList} = props;
  let Image_Http_URL = {uri: dataList};

  return (
    <View style={{width: '100%', height: '100%'}}>
      <ImageZoom
        cropWidth={Dimensions.get('window').width}
        cropHeight={Dimensions.get('window').height}
        imageWidth={w}
        imageHeight={h}>
        <View
        style={{width: '100%', height: '100%',alignItems:'center',justifyContent:'center'}}>
      <Image
       style={{width: '100%', height: '70%'}}
          resizeMode="stretch"
          source={Image_Http_URL}
        />
        </View>
       
      </ImageZoom>
    </View>
  );
};

export default FullScreenImage;
