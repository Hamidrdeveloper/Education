import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  ImageBackground,
  FlatList
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
import circle from '../../../assets/images/circaleBack.png';


    
  
const val =(75 * viewportWidth) 
const val2 =(2 * viewportWidth) / 100
const slideHeight = viewportHeight * 0.36;
const slideWidth = Math.round(val);
const itemHorizontalMargin =Math.round(val2);
export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;
let screenWidth = Dimensions.get('window').width;
class ListItem extends React.Component {
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

  shouldComponentUpdate(nexProps){
    if(this.props.AQ_data==nexProps.AQ_data){
      return false;

    }
    return true;
  }

  _hideTabBar = e => {
    this.props.hideTabBar(e);
  };

  renderGridItem(item, index) {
    let {
      textTitle,
      date,
      viewItem,
      viewCircleII,
      circleTitle,
      detail,
      buttonItem,
      textButton,
      viewItemRow,
      viewItemRowII,
      viewItemRowIII,
      viewDetail,
      imageCard,
    } = style;
    return (
      <TouchableRipple activeOpacity={1}>
        <Card
          style={{
            width: '100%',
            borderRadius: 30,
            marginTop: 15,
         
            marginBottom: 1,
            minHeight:150,
            paddingTop:10
          }}>
          <Image style={[imageCard,{tintColor:Res.Color.tab, width: 120,
    height: 125,

    bottom: 0,
    left:0,
    
    // borderBottomWidth: 7000,
    position: 'absolute',}]} resizeMode="stretch" source={circle} />
          <View style={[imageCard,{backgroundColor:Res.Color.tab}]} />

          <View style={[{top:0,paddingLeft:10,position:'absolute'}]}>
          <View style={{top:10}}>
                <Text allowFontScaling={false} style={[date,{alignSelf:'flex-start'}]}>{item.questionType}</Text>
                {/* <Text style={date}>{'1398/08/24'}</Text> */}
                
              </View>
              </View>
          <View style={viewItem}>
            <Text allowFontScaling={false} style={[textTitle,{fontSize:20}]}>{item.CrsName}</Text>
            <View style={viewItemRow}>
              <Text allowFontScaling={false} style={[viewItemRowII,{marginRight:0}]}>{'1398/08/23'}</Text>
              <Text allowFontScaling={false} style={[viewItemRowII,{marginRight:0,left:0}]}>{'1398/08/24'}</Text>
            </View>
            <View style={[viewItemRow, {marginTop: 15}]}>
              <View style={viewDetail}>
                <Text allowFontScaling={false} style={detail} numberOfLines={5}>{item.ProblemText}</Text>
              </View>
             
            </View>
           
          </View>
          {this.state.stepOne == 2 ? (
            <TouchableRipple
              style={{position: 'absolute', marginLeft: 15, marginTop: 8}}
              onPress={() => this.deleteReserved(item)}>
              <Icon name="close" size={14} />
            </TouchableRipple>
          ) : null}
          <TouchableRipple
                style={[buttonItem,{position:'absolute',bottom:15,left:10,backgroundColor:Res.Color.primersButton}]}
                onPress={() => this._hideTabBar(item)}>
                <View>
                  <Text style={textButton}>
                    {this.state.stepOne == 3 ? 'بازخورد سوال' : 'برسی سوال'}
                  </Text>
                </View>
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
         <FlatList
              data={this.props.AQ_data}
        
              extraData={this.state}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
              renderItem={({item, index}) => this.renderGridItem(item, index)}
            />
      </View>
    );
  }
  static propTypes = {
    hideTabBar: PropTypes.func,
    AQ_data: PropTypes.any,
  };
}

export default ListItem;
