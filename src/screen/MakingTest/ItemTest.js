/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  ImageBackground,
  TextInput,
} from 'react-native';
import {Card} from 'react-native-paper';
import Carousel, {getInputRangeFromIndexes} from 'react-native-snap-carousel';
import background from '../../../assets/images/abstract.png';

import backgroundC from '../../../assets/images/abstract2.png';

import style from './Style/style';
import Dropdown from '../../components/drop';
let screenWidth = Dimensions.get('window').width;
class ItemTest extends React.Component {
  render() {
    let {textInputItem, viewFullIem, imagePro, viewLine} = style;
    return (
      <View style={viewFullIem}>
        <Card style={viewLine}>
          <View style={{width: '100%'}}>
            <Dropdown
              containerStyle={{width: '100%'}}
              textDefault="رفع اشکال"
            />
          </View>
        </Card>
      </View>
    );
  }
}

export default ItemTest;
