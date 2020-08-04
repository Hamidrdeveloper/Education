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
  AsyncStorage,
  BackHandler,
  NativeModules,
} from 'react-native';
import Res from '../../Color/color';
import PropTypes from 'prop-types';

import {Card, TouchableRipple} from 'react-native-paper';
import Carousel, {getInputRangeFromIndexes} from 'react-native-snap-carousel';
import background from '../../../assets/images/abstract.png';
import Toast from 'react-native-simple-toast';
import NetInfo from '@react-native-community/netinfo';
import backgroundC from '../../../assets/images/abstract2.png';
import back from '../../../assets/images/back.png';
import circle from '../../../assets/images/circaleBack.png';
import style from './Style/style';
import {FlatList} from 'react-native-gesture-handler';
import Fixed from '../FixeTest/FixeScreen';
import {AirbnbRating} from '../../react_native_ratings_example';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StackActions } from 'react-navigation';
let screenWidth = Dimensions.get('window').width;
import RNRestart from 'react-native-restart'; // Import package from node modules
import { UserData } from '../../model/userData';
class PopUpMenu extends React.Component {
  _openScreen() {
    let {navigation} = this.props;
    navigation.navigate('Home');
  }
  _hideModalMenu = () => {
    this.props.changeState(false);
  };
  state = {
    flag: true,
  };
  signOut = e => {
    console.log('Register');
 
    let keys = ['userid', 'dataUser'];
    AsyncStorage.multiRemove(keys, err => {
      // keys k1 & k2 removed, if they existed
      // do most stuff after removal (if you want)
      console.log('AsyncStorage', err);
    });
    RNRestart.Restart();
  };
  render() {
    let{dataPro}= this.props;
    let {
      textTitlePopUpMenu,
      datePopUp,
      viewItem,
      viewCircleII,
      circleTitle,
      detail,
      viewIconService,
      lineService,
      textServicePopUpMenu,
      textRating,
      viewFullCardButton,
      cardButton,
      viewTextRating,
    } = style;
    return (
      <View
        style={{height: '100%', width: '100%', backgroundColor: 'transparent'}}>
        <View
          style={[
            viewItem,
            {
              flexDirection: 'column',
              height: '100%',
              alignItems: 'center',
              paddingLeft: 30,
              paddingRight: 30,
              top:15,
            },
          ]}>
          <Text allowFontScaling={false} style={textTitlePopUpMenu}>{UserData.jsonData.teacherInfo.FirstName +
                '' +
                UserData.jsonData.teacherInfo.LastName}</Text>
          <View style={viewFullCardButton}>
            <View style={cardButton}>
              <View style={viewTextRating}>
                <Text allowFontScaling={false} style={textRating}>
                  {'امتیاز:'}
                </Text>

                <View>
                  <AirbnbRating
                    starContainerStyle={{
                      alignSelf: 'flex-start',
                    }}
                    size={23}
                    isDisabled={true}
                    showRating={false}
                    defaultRating={dataPro.AverageScore}
                    />
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              width: '100%',
              height: 1,
              backgroundColor: Res.Color.grayLight,
              marginTop: 15,
            }}
          />
          <View style={viewIconService}>
            <Text allowFontScaling={false} style={textServicePopUpMenu}>ارتباط با ما</Text>
            <View style={{width: 8}} />
            <Icon name="phone" size={15} />
          </View>
          <View style={lineService} />
          <TouchableRipple onPress={() => this.signOut()}>
            <View style={viewIconService}>
              <Text allowFontScaling={false} style={textServicePopUpMenu}>خروج از حساب</Text>
              <View style={{width: 8}} />
              <Icon allowFontScaling={false} name="sign-out" size={15} />
            </View>
          </TouchableRipple>

          <View style={lineService} />
          <View style={viewIconService}>
            <Text allowFontScaling={false} style={textServicePopUpMenu}>درباره ما</Text>
            <View style={{width: 8}} />
            <Icon name="info-circle" size={15} />
          </View>
          <View style={lineService} />
         
        </View>
        <TouchableRipple
            activeOpacity={10}
            style={{
              width: 50,
              height: 50,
              position: 'absolute',
              alignSelf:'center',
              top: 0,
           
            }}
            onPress={() => {
              this._hideModalMenu();
            }}>
            <View
              style={{
                width: 50,
                height: 4,
                top:10,
                borderRadius: 8,
                backgroundColor: Res.Color.grayLight,
              }}
            />
          </TouchableRipple>
      </View>
    );
  }
  static propsType = {
    changeState: PropTypes.func,
    navigation: PropTypes.any,
    dataPro:PropTypes.any,
  };
}

export default PopUpMenu;
