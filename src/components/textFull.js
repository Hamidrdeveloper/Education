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
import Res from '../Color/color';
import {Card} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';

const FullScreenText = props => {
  const {dataList} = props;

  return (
    <View style={{width: '100%', height: '100%', padding: 15}}>
      <Card
        elevation={5}
        style={{width: '100%', height: '100%', borderRadius: 15}}>
        <ScrollView>
          <Text
            style={{
              width: '100%',
              height: '100%',
              fontFamily: 'BYekanBold',
              fontSize: 18,
              padding: 8,
              color: Res.Color.primers,
            }}>
            {dataList}
          </Text>
        </ScrollView>
      </Card>
    </View>
  );
};
export default FullScreenText;