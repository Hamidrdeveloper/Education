import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  ImageBackground,

} from 'react-native';
import {Card, Modal, TouchableRipple,Button} from 'react-native-paper';
import Carousel from 'react-native-snap-carousel';
import background from '../../../assets/images/abstract.png';
import alarm from '../../../assets/images/alarm.png';
import menu from '../../../assets/images/menu.png';
import backgroundC from '../../../assets/images/abstract2.png';
import PopUp from './popUp';
import style from './Style/style';
import PerformanceScreen from '../PerformanceTech/PerformanceScreen';
import Res from '../../Color/color';
import NotifyScreen from '../notify/notifyScreen';
import PropTypes from 'prop-types';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');


    
  
const val =(75 * viewportWidth) 
const val2 =(2 * viewportWidth) / 100
const slideHeight = viewportHeight * 0.36;
const slideWidth = Math.round(val);
const itemHorizontalMargin =Math.round(val2);
export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;
let screenWidth = Dimensions.get('window').width;
class ListClass extends React.Component {
  state = {
    isModalVisible: false,
    tabBarVisible: true,
    top: 0,
    isModalPerformance: false,
    isModalNotify: false,
  };
  static navigationOptions = ({navigation}) => {
    const {params} = navigation.state;

    return {
      tabBarVisible: true,
    };
  };
  // _scrollInterpolator(index, carouselProps) {
  //   const range = [3, 2, 1, 0, -1];
  //   const inputRange = getInputRangeFromIndexes(range, index, carouselProps);
  //   const outputRange = range;

  //   return {inputRange, outputRange};
  // }

  // _animatedStyles(index, animatedValue, carouselProps) {
  //   const translateProp = 'translateY';
  //   const translatePropX = 'translateX';

  //   return {
  //     zIndex: carouselProps.data.length - index,
  //     opacity: animatedValue.interpolate({
  //       inputRange: [2, 3],
  //       outputRange: [1, 0],
  //     }),
  //     transform: [
  //       {
  //         rotate: animatedValue.interpolate({
  //           inputRange: [-1, 0, 1, 2, 3],
  //           outputRange: ['0deg', '0deg', '0deg', '0deg', '0deg'],
  //           extrapolate: 'default',
  //         }),
  //       },
  //       {
  //         [translateProp]: animatedValue.interpolate({
  //           inputRange: [-1, 0, 1, 2, 3],
  //           outputRange: [
  //             20,
  //             0,
  //             20, // centered
  //             20, // centered
  //             20, // centered
  //           ],
  //           extrapolate: 'default',
  //         }),
  //       },
  //       {
  //         [translatePropX]: animatedValue.interpolate({
  //           inputRange: [-1, 0, 1, 2, 3],
  //           outputRange: [
  //             -20,
  //             0,
  //             20, // centered
  //             20, // centered
  //             20, // centered
  //           ],
  //           extrapolate: 'default',
  //         }),
  //       },
  //     ],
  //   };
  // }

  _hideTabBar = e => {
    this.props.hideTabBar(false, e);
  };

  renderGridItem({item, index}) {
    let {
      textTitle,
      date,
      viewCircle,
      viewCircleII,
      circleTitle,
      detail,
      buttonItem,
      textButton,
      cardModelPerformance,
    } = style;
    return (
      <TouchableRipple activeOpacity={1}>
        <Card
        elevation={8}
          style={{
            flexWrap: 'wrap',
            width:250,
            borderRadius: 15,
            paddingRight:8,
            paddingLeft:8,
            paddingBottom: 15,
            margin:1,
            height: hp('50%'), // 50% of height device screen

          }}>
          <Text allowFontScaling={false} style={date} maxLength="5">
            {item.persianDate.substring(0, 10)}
          </Text>
          <Text allowFontScaling={false} style={textTitle}>{item.CrsName}</Text>
          <View style={{height:8}}/>
          <View style={[viewCircle,{width:`100%`}]}>
         
            <View style={viewCircleII}>
              <Text allowFontScaling={false} style={circleTitle}>{item.GroupName}</Text>
            </View>
    
            <View style={viewCircleII}>
              <Text allowFontScaling={false} style={circleTitle}>
                {item.questionType + '\n' + item.persianDate.substring(0, 10)}
              </Text>
            </View>
           
            <View style={viewCircleII}>
              <Text allowFontScaling={false} style={circleTitle}>{'نیم سال'}</Text>
            </View>
           
          </View>
          <Text allowFontScaling={false} style={detail} numberOfLines={5}>
            {item.ProblemText}
          </Text>
          <TouchableRipple
            style={[buttonItem,{position:'absolute',bottom:0,alignSelf:'center',alignItems:'center'}]}
            labelStyle={textButton}
            onPress={() => this._hideTabBar(item)}>
          <Text allowFontScaling={false} style={textButton}>{'برسی سوال'}</Text>
             
         
          </TouchableRipple>
         
        </Card>
      </TouchableRipple>
    );
  }

  render() {
    let {
      textButton,
      viewFull,
      imagePro,
      viewLine,
      textPerformance,
      cardModelPop,
      cardModelPerformance,
    } = style;

    return (
      <View style={[viewFull,{alignItems:'center',paddingTop:20}]}>
        <Carousel
          data={this.props.AQ_data}
          sliderWidth={250}
                  itemWidth={250}
                  containerCustomStyle={{
        overflow: 'visible'}}
                  contentContainerCustomStyle={{width: itemWidth,
        height: `100%`,
        
    
        paddingHorizontal: itemHorizontalMargin,
        paddingBottom: 18}}
                 
                 
          renderItem={(item, index) => this.renderGridItem(item, index)}
        />
      </View>
    );
  }
  static propTypes = {
    hideTabBar: PropTypes.func,
    AQ_data: PropTypes.any,
  };
}

export default ListClass;
