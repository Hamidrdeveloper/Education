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
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import PropTypes from 'prop-types';
import {Card, TouchableRipple} from 'react-native-paper';
import Carousel, {getInputRangeFromIndexes} from 'react-native-snap-carousel';
import background from '../../../assets/images/abstract.png';

import Medal from '../../../assets/images/medal.png';
import Time from '../../../assets/images/time.png';
import number from '../../../assets/images/number.png';
import style from './Style/style';
import {FlatList} from 'react-native-gesture-handler';
import Res from '../../Color/color';
import {Rating, AirbnbRating} from '../../react_native_ratings_example/index';
import Icon from 'react-native-vector-icons/FontAwesome';
import back from '../../../assets/images/left_arrow.png';
import { UserData } from '../../model/userData';
import NumberFormat from 'react-number-format';

let screenWidth = Dimensions.get('window').width;
class RankScreen extends React.Component {
  ratingCompleted(rating) {
    console.log('Rating is: ' + rating);
  }
  _hideModalPerformance = () => {
    this.props.changeState(false);
  };
  ListHeaderComponent(){
    return(
      <View style={{flexDirection:'column',height:50}}>
      <View style={[style.viewRankItem]}>
      
      <Text style={{paddingRight:10,color:"#000"}}>{"تاریخ پرداخت"}</Text>
      <Text style={{position:'absolute', right:0, paddingLeft:15,alignSelf:'center',color:"#000",}}>{"مبلغ پرداختی"}</Text>
      </View>
      <View style={{width:`100%`,height:1,backgroundColor:"#000"}}/>
      </View>
    )
  }
  renderItem({item,index}) {
 
    var validColor= (index % 2)
    console.log(validColor)
    return(
      <View style={[style.viewRankItem,{backgroundColor:validColor==1?Res.Color.grayLight:"#fff",alignItems:'center'}]}>
      <Text style={style.textNumRankItem}>{index}</Text>
      {/* <Text style={{paddingRight:10,color:Res.Color.gray}}>{item.FullName}</Text> */}
      <NumberFormat
              value={item.PayPersianDate}
              displayType={'text'}
              thousandSeparator={true}
              format={"####/##/##"}
              renderText={value => (
                <Text
                  allowFontScaling={false}
                  style={{
                    color:Res.Color.gray,
                    fontSize: 15,
                    paddingRight:10,
                    fontFamily:"BYekan"
                  
                  }}>
                  {value}
                </Text>
              )}
            />
      <NumberFormat
              value={item.Amount}
              displayType={'text'}
              thousandSeparator={true}
             
              prefix={"ریال"}
              renderText={value => (
                <Text
                  allowFontScaling={false}
                  style={{
                    color:Res.Color.gray,
                    fontSize: 15,
                    position:'absolute', right:6,
                    fontFamily:"BYekan"
                  
                  }}>
                  {value}
                </Text>
              )}
            />
      </View>
    )
  }
  render() {
    let {
      imageBottom,
      viewFull,
      textTitle,
      imagePro,
      detail,
      viewForm,
      imageCard,
      viewItemRow,
      space,
      buttonBack,
      viewRank,
      cardBottom,
      buttonItem,
      buttonLogin,
      cardButton,
      textRank,
      textTopRank,
      cardButtonMore,
      textBottomRank,
      textCardButton,
      viewFullCardButton,
      viewFullCardButtonmore,
      viewImageShowRank,
      viewTextShowRank,
      viewItemRowII,
      textShowRank,
      textRating,
      viewTextRating,
      cardBottomLine,
    } = style;
    return (
      <View style={{width: '100%', height: '93%'}}>
        <Card style={[viewForm]}>
          <TouchableRipple
            activeOpacity={10}
            style={{
              position: 'absolute',
              width: 25,
              height: 25,
            }}
            onPress={() => {
              this._hideModalPerformance();
            }}>
            <View
              style={{
                position: 'absolute',
                backgroundColor: Res.Color.grayLight,
                borderRadius: 100,
                padding: 5,
                width: 25,
                height: 25,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon name="remove" size={20} color="#000" />
            </View>
          </TouchableRipple>

          <View style={imageCard}>
          <Card.Cover
              style={imagePro}
              source={{
                uri:
                UserData.jsonData.teacherPicture != null
                    ? `http://kanoonihaweb.kanoon.ir/${UserData.jsonData.teacherPicture}`
                    : 'https://cdn01.zoomit.ir/2018/10/e3d98770-8164-49cc-a419-6f0bd80c3b2c.jpg',
              }}
             
            />
            <Text allowFontScaling={false} style={detail} fon>
            {UserData.jsonData.teacherInfo.FirstName +
                '' +
                UserData.jsonData.teacherInfo.LastName}
            </Text>
          
            <View style={viewFullCardButtonmore}>
              <Card style={cardButtonMore}>
                <View style={[viewTextShowRank,{width:150}]}>
                  <Text allowFontScaling={false} style={textShowRank}>
                  {`پرداخت:`}
                  </Text>

                  <Text allowFontScaling={false} style={[textShowRank,{position:'absolute', left:0,fontFamily:'BYekan'}]}>
                  {`${this.props.dataPro[0].Amount}`}
                  </Text>
                </View>
              </Card>
            </View>
           
            
           <View style={{borderColor:"#000", borderWidth:0, width:`100%`,height:`68%`,top:10,borderRadius:20,alignItems:'center'}}>
           <View style={{width:`96%`,height:`96%`,top:3,position:'absolute'}}>
          { this.ListHeaderComponent()}
           <FlatList 
           
             showsVerticalScrollIndicator={false}
             data={this.props.dataPro}
             renderItem={(item,index)=>this.renderItem(item,index)}
             head
           />
           </View>
         
            <Image style={{borderColor:"#fff", borderWidth:8, width:`100%`,height:`100%`,position:'absolute',borderRadius:24,bottom:0}}/>
                      <Image style={{borderColor:"#000", borderWidth:1,width:`96%`,height:`96%`,borderRadius:20,position:'absolute',alignSelf:'center',top:3}}/>
                     
           </View>
          </View>
        </Card>
      </View>
    );
  }
  static propsType = {
    changeState: PropTypes.func,
    dataPro:PropTypes.any,
  };
}

export default RankScreen;
