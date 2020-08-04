/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
  TextInput,
  PermissionsAndroid,
  ToastAndroid,
} from 'react-native';

import Res from '../../Color/color';
import ImagePicker from 'react-native-image-picker';
import NetInfo from '@react-native-community/netinfo';
import {Card, Modal, TouchableRipple} from 'react-native-paper';
import Carousel, {getInputRangeFromIndexes} from 'react-native-snap-carousel';
import background from '../../../assets/images/abstract.png';
import PropTypes from 'prop-types';

import backgroundC from '../../../assets/images/abstract2.png';
import back from '../../../assets/images/back.png';
import circle from '../../../assets/images/circaleBack.png';
import style from '../Home/Style/style';
import {FlatList} from 'react-native-gesture-handler';
import Fixed from '../FixeTest/FixeScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import Recorder from '../../components/recorderPlayer';
import Player from '../../components/Player';
import FixAction from '../../action/FixAction';
import DATA from '../../model/Data';
import Toast from 'react-native-simple-toast';
import Dropdown from '../../components/drop';
import {UserData} from '../../model/userData';
import { AirbnbRating } from '../../react_native_ratings_example';
let screenWidth = Dimensions.get('window').width;
class RankQuTeacher extends React.Component {
  state = {
    isModalVisible: false,
    isModalPlayer: false,
    voice: '',
    answerText: '',
    SumSbjId: 0,
    questionId: '',
    teacherId: '',
    SumObjId: 0,
    voiceFileName: 'test',
    imageFileName: 'test',
    textButton:'رزرو کردن',
    flagButton:0
  };
  
  render() {
    let {
      textTitlePopUp,
      datePopUp,
      viewItem,
      viewCircleII,
      circleTitle,
      detail,
      buttonItem,
      textButton,
      viewItemRow,
      viewItemRowIcon,
      viewItemRowIII,
      viewDetail,
      imageCard,
    } = style;
    let {dataPro} = this.props;
    
    return (
      <View
      style={{
        height: '100%',
        width: '100%',

        justifyContent: 'center',
        backgroundColor: 'transparent',
        padding: 15,
      }}>
      <Card
        style={{
          width: '100%',
          borderRadius: 15,
          padding: 8,
          alignItems:'center',
        }}>
       <Text style={[datePopUp,{width:`100%`,height:30,textAlign:'center',alignSelf:'center'}]}>بازخورد شما </Text>
       <View>
                    <AirbnbRating
                      starContainerStyle={{
                        alignSelf: 'flex-start',
                      }}
                      size={23}
                      isDisabled={true}
                      showRating={false}
                      defaultRating={this.props.dataPro}
                    />
                  </View>

                  <TouchableRipple
            style={[buttonItem,{marginTop:10,alignSelf:'center',alignItems:'center'}]}
            labelStyle={textButton}
            onPress={() => this.props.hidePopUp()}>
          <Text allowFontScaling={false} style={textButton}>{'باشه'}</Text>
             
         
          </TouchableRipple>
      </Card>
     
    </View>
    );
  }
  static propsType = {
    dataPro: PropTypes.any,
    hidePopUp: PropTypes.any,
    
  };
}

export default RankQuTeacher;
