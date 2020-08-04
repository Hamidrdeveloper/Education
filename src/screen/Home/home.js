import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  ImageBackground,
  Button,
  AsyncStorage,
  Alert,
  BackHandler,
  ToastAndroid,
} from 'react-native';
import {Card, Modal, TouchableRipple} from 'react-native-paper';
import Toast from 'react-native-simple-toast';

import Carousel, {getInputRangeFromIndexes} from 'react-native-snap-carousel';
import im_exam from '../../../assets/images/test.png';
import passed from '../../../assets/images/passed.png';
import house from '../../../assets/images/house.png';
import werite from '../../../assets/images/werite.png';
import background from '../../../assets/images/abstract3.png';
import alarm from '../../../assets/images/alarm.png';
import menu from '../../../assets/images/menu.png';
import backgroundC from '../../../assets/images/abstract2.png';
import PopUp from './popUp';
import style from './Style/style';
import PerformanceScreen from '../PerformanceTech/PerformanceScreen';
import RankScreen from '../PerformanceTech/rank';
import Res from '../../Color/color';
import NotifyScreen from '../notify/notifyScreen';
import ListClass from './lsitClass';
import PopUpMenu from './popUpMenu';
import Channel from '../../channel/indext';
import HomeAction from '../../action/HomeAction';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import {UserData} from '../../model/userData';
import Recorder from '../../components/recorderPlayer';
import FullScreenText from '../../components/textFull';
import FullScreenImage from '../../components/FullScreenImage';
import FixAction from '../../action/FixAction';
import  NetInfo  from '@react-native-community/netinfo';
import PopUpReserve from './popUpReserve';
let screenWidth = Dimensions.get('window').width;
class HomeScreen extends React.Component {
  state = {
    detail: '',
    imagePro: UserData.jsonData.teacherPicture,
    isModalVisible: false,
    tabBarVisible: true,
    top: 0,
    isModalPerformance: false,
    isModalNotify: false,
    isModalPopUpMenu: false,
    isModalPopUp:false,
    isModalPopTextFull: false,
    dataTextItem: '',
    isModalRank: false,
    isModalPopImageFull: false,
    dataImageItem: '',
    isConnected:true,
  };
  shouldComponentUpdate(nextProps, nextStet) {
    console.log('shouldComponentUpdate', nextStet);
    if (this.props.data !== nextProps.data) {
      return true;
    }
    if (this.props.dataGetSubject !== nextProps.dataGetSubject) {
      return true;
    }
    if (this.props.dataGetObject !== nextProps.dataGetObject) {
      return true;
    }
    if (this.state !== nextStet) {
      return true;
    }
    return false;
  }
  static navigationOptions = ({navigation}) => {
    const {params} = navigation.state;

    return {
      tabBarVisible: true,
    };
  };
  _scrollInterpolator(index, carouselProps) {
    const range = [3, 2, 1, 0, -1];
    const inputRange = getInputRangeFromIndexes(range, index, carouselProps);
    const outputRange = range;

    return {inputRange, outputRange};
  }

  _animatedStyles(index, animatedValue, carouselProps) {
    const translateProp = 'translateY';
    const translatePropX = 'translateX';

    return {
      zIndex: carouselProps.data.length - index,
      opacity: animatedValue.interpolate({
        inputRange: [2, 3],
        outputRange: [1, 0],
      }),
      transform: [
        {
          rotate: animatedValue.interpolate({
            inputRange: [-1, 0, 1, 2, 3],
            outputRange: ['0deg', '0deg', '0deg', '0deg', '0deg'],
            extrapolate: 'default',
          }),
        },
        {
          [translateProp]: animatedValue.interpolate({
            inputRange: [-1, 0, 1, 2, 3],
            outputRange: [
              20,
              0,
              20, // centered
              20, // centered
              20, // centered
            ],
            extrapolate: 'default',
          }),
        },
        {
          [translatePropX]: animatedValue.interpolate({
            inputRange: [-1, 0, 1, 2, 3],
            outputRange: [
              -20,
              0,
              20, // centered
              20, // centered
              20, // centered
            ],
            extrapolate: 'default',
          }),
        },
      ],
    };
  }
  _openPopUp = () => {
    this._hideTabBar();
  };
  _hideTabBarItem = (e, data) => {
    this.props._onGetSubject(data.SumCrsId);
    // FixAction._onPostSaveReserved(UserData.jsonData.teacherInfo.Rid, e.Id).then(
    //   res => {
    //     this.props._onAnsweredQuestion(UserData.jsonData.teacherInfo.Rid);
    //   },
    // );
    this.props.navigation.setParams({tabBarVisible: !this.state.tabBarVisible});

    this.setState({
      tabBarVisible: !this.state.tabBarVisible,
      isModalVisible: !this.state.isModalVisible,
      detail: data,
    });
  };
  _hideTabBar = (e) => {
    this.setState({
      tabBarVisible: !this.state.tabBarVisible,
      isModalVisible: !this.state.isModalVisible,
    });
  };
  _hideModalPerformance = (e) => {
    this.setState({
      isModalPerformance: false,
      tabBarVisible: true,
    });
  };
  _openModalPopUpQ = (e) => {
    this.setState({
      isModalPopUp: true,
      isModalVisible:false,
      tabBarVisible:false
    });
  };
  _hideModalPopUpQ = (e) => {
    this.setState({
      isModalPopUp: false,
       tabBarVisible:true
    });
  };
  _hideModalNotify = (e) => {
    this.setState({
      isModalNotify: false,
    });
  };
  _hideModalMenu = (e) => {
    this.setState({
      isModalPopUpMenu: e,
      tabBarVisible: !e,
    });
  };
  handleBackButton = (e) => {
    if ((e = 1)) {
      return true;
    }

    return true;
  };
  _openTabBar() {
    this._hideTabBar(true);
  }

  _openPerformance() {
    if(this.state.isConnected){
    this.setState({
      isModalPerformance: true,
      tabBarVisible: false,
    });
     } else {
      Toast.show('اینترنت خود را برسی کنید');
    }
  }
  _openModalNotify() {
    this.setState({
      isModalNotify: true,
    });
  }
  _openModalMenu() {
    if(this.state.isConnected){
      this._hideModalMenu(true);

    } else {
      Toast.show('اینترنت خود را برسی کنید');
    }
  }
  _openModalTextFull = (e) => {
    this.setState({
      isModalPopTextFull: !this.state.isModalPopTextFull,
      dataTextItem: e,
    });
  };
  _hideModalTextFull = (e) => {
    this.setState({
      isModalPopTextFull: !this.state.isModalPopTextFull,
    });
  };
  _openModalImageFull = (e) => {
    this.setState({
      isModalPopImageFull: !this.state.isModalPopTextFull,
      dataImageItem: e,
    });
  };
  _hideModalImageFull = (e) => {
    this.setState({
      isModalPopImageFull: !this.state.isModalPopImageFull,
    });
  };
  componentDidMount() {
   
    NetInfo.addEventListener(state => {
      console.log("Connection type", state.type);
      console.log("Is connected?", state.isConnected);
      this.setState({
        isConnected:state.isConnected
      })
      if(state.isConnected){
        AsyncStorage.getItem('userid').then((data) => {
          console.log(data);
          var userId = data;
          this.props._onAnsweredQuestion(userId);
          console.log('=====>', this.props.data);
          setTimeout(() => {
            this.props._onGetTeacherPayload(userId);
            this.props._onGetTeacherRate(userId);
          }, 2000);
          
        });
      }
     
    });
  
  }
  componentWillUpdate() {
    console.log('=====>', this.props.data);
  }
  _hideTabBarQus = (e) => {
    this.props.navigation.setParams({tabBarVisible: true});

    this.setState({
      tabBarVisible: true,
      isModalVisible: false,
    });
  };
  _hideModalPopUpMenu = () => {
    this.setState({
      isModalPopUpMenu: false,
      tabBarVisible:true
    });
  };
  _OpenModalisModalRank = () => {
    if (this.props.dataGetTeacherPayload[0].PayPersianDate != null) {
      this.setState({
        isModalRank: true,
        tabBarVisible: false,
      });
    } else {
      Toast.show('تاکنون پرداختی نداشته‌اید!');
    }
  };
  _hideModalisModalRank = () => {
    this.setState({
      isModalRank: false,
    });
  };
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
      <View style={[viewFull]}>
        <View style={[viewFull, {paddingBottom: this.state.top}]}>
          <ImageBackground
            source={background}
            style={[viewFull]}
            resizeMode="cover">
            {/* <Image style={{width:`100%`,height:`50%`,position:'absolute',bottom:0}} resizeMode="stretch" source={backgroundC}/> */}
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
              }}>
              <TouchableRipple
                activeOpacity={10}
                style={{
                  width: 55,
                  height: 55,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => this._openModalNotify()}>
                <Image
                  source={alarm}
                  style={{width: 25, height: 25, tintColor: '#ffff'}}
                />
              </TouchableRipple>
              <TouchableRipple
                activeOpacity={10}
                style={{
                  width: 55,
                  height: 55,
                  position: 'absolute',
                  right: 0,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => this._openModalMenu()}>
                <Image
                  source={menu}
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: '#ffff',
                  }}
                />
              </TouchableRipple>
            </View>
            <Image
              source={{
                uri:
                  this.state.imagePro != null
                    ? `http://kanoonihaweb.kanoon.ir/${this.state.imagePro}`
                    : 'https://cdn01.zoomit.ir/2018/10/e3d98770-8164-49cc-a419-6f0bd80c3b2c.jpg',
              }}
              style={imagePro}
            />
            <Text
              allowFontScaling={false}
              style={{
                textAlign: 'center',
                color: '#000',
                fontSize: 22,
                marginTop: 8,
                fontFamily: 'BYekan',
              }}>
              {UserData.jsonData.teacherInfo.FirstName +
                '' +
                UserData.jsonData.teacherInfo.LastName}
            </Text>

            <TouchableRipple
              activeOpacity={10}
              onPress={() => {
                this._openPerformance();
              }}>
              <Card style={viewLine}>
                <Text allowFontScaling={false} style={textPerformance}>
                  مشاهده ی گزارش عملکرد 5/5
                </Text>
              </Card>
            </TouchableRipple>
            <ListClass
              hideTabBar={this._hideTabBarItem}
              AQ_data={this.props.data}
            />
            <Modal
              visible={this.state.isModalVisible}
              onDismiss={this._hideTabBar}>
                              <Text style={{height:`100%`,width:`100%`,position:'absolute'}} onPress={()=>this._hideTabBar()}/>
              <View style={{height: '100%', justifyContent: 'flex-end'}}>
              <Text style={{height:`100%`,width:`100%`,position:'absolute'}} onPress={()=>this._hideTabBar()}/>
                <View style={cardModelPop}>
                  <PopUpReserve
                    changeState={this._hideTabBarQus}
                    dataPro={this.state.detail}
                    navigation={this.props.navigation}
                    hidePopUp={this._hideTabBar}
                    openModalTextFull={this._openModalTextFull}
                    openModalImageFull={this._openModalImageFull}
                     openModalPopUpQ={this._openModalPopUpQ}
                    subject={this.props.dataGetSubject}
                    object={this.props.dataGetObject}
                    onFunObject={this.props._onGetObject}
                    isConnected={this.state.isConnected}
                  />
                </View>
              </View>
            </Modal>
            <Modal
              visible={this.state.isModalPopUp}
              onDismiss={this._hideModalPopUpQ}>
                              <Text style={{height:`100%`,width:`100%`,position:'absolute'}} onPress={()=>this._hideModalPopUpQ()}/>
              <View style={{height: '100%', justifyContent: 'flex-end'}}>
              <Text style={{height:`100%`,width:`100%`,position:'absolute'}} onPress={()=>this._hideModalPopUpQ()}/>
                <View style={cardModelPop}>
                  <PopUp
                    changeState={this._hideModalPopUpQ}
                    dataPro={this.state.detail}
                    navigation={this.props.navigation}
                    hidePopUp={this._hideModalPopUpQ}
                    openModalTextFull={this._openModalTextFull}
                    openModalImageFull={this._openModalImageFull}
                    subject={this.props.dataGetSubject}
                    object={this.props.dataGetObject}
                    onFunObject={this.props._onGetObject}
                    isConnected={this.state.isConnected}
                  />
                </View>
              </View>
            </Modal>
            <Modal
              transparent={true}
              animationType={'none'}
              visible={this.state.isModalPerformance}
              onDismiss={this._hideModalPerformance}>
                <Text style={{height:`100%`,width:`100%`,position:'absolute'}} onPress={()=>this._hideModalPerformance()}/>

              <View
                style={{
                  height: '100%',
                  justifyContent: 'center',
                  paddingLeft: 20,
                  paddingRight: 20,
                }}>
                
                <PerformanceScreen
                  ModalRank={this._OpenModalisModalRank}
                  changeState={this._hideModalPerformance}
                  dataPro={this.props.dataGetTeacherRate}
                />
              </View>
            </Modal>
            <Modal
              visible={this.state.isModalNotify}
              onDismiss={this._hideModalNotify}>
                <Text style={{height:`100%`,width:`100%`,position:'absolute'}} onPress={()=>this._hideModalNotify()}/>

              <View
                style={{
                  height: '94%',
                  justifyContent: 'center',
                  padding: 20,
                  paddingBottom: 30,
                }}>
                            
                <NotifyScreen changeState={this._hideModalNotify} />
              </View>
            </Modal>
            <Modal
              visible={this.state.isModalPopUpMenu}
              onDismiss={this._hideModalPopUpMenu}>
              
              <View style={{height: '100%', justifyContent: 'flex-end'}}>
              <Text style={{height:`100%`,width:`100%`,position:'absolute'}} onPress={()=>this._hideModalPopUpMenu()}/>

                <TouchableRipple
                  activeOpacity={10}
                  style={{
                    width: 50,
                    height: `30%`,
                    alignSelf: 'center',
                    position: 'absolute',
                    top: 90,
                  }}
                  onPress={() => {
                    this._hideModalPopUpMenu();
                  }}>
                  <View
                    style={{
                      width: 50,
                      height: 4,
                      borderRadius: 8,
                    }}
                  />
                </TouchableRipple>
                <Card style={[cardModelPop, {height: `70%`}]}>
                  <PopUpMenu
                    changeState={this._hideModalPopUpMenu}
                    navigation={this.props.navigation}
                    dataPro={this.props.dataGetTeacherRate}
                  />
                </Card>
              </View>
            </Modal>

            <Modal
              transparent={true}
              animationType={'none'}
              visible={this.state.isModalRank}
              onDismiss={this._hideModalisModalRank}>
              <View
                style={{
                  height: '100%',
                  justifyContent: 'center',
                  paddingLeft: 20,
                  paddingRight: 20,
                  paddingBottom: 60,
                }}>
                <Text style={{height:`100%`,width:`100%`,position:'absolute'}} onPress={()=>this._hideModalisModalRank()}/>

                <RankScreen
                  dataPro={this.props.dataGetTeacherPayload}
                  changeState={this._hideModalisModalRank}
                />
              </View>
            </Modal>
          </ImageBackground>

          <Modal
            visible={this.state.isModalPopTextFull}
            onDismiss={this._hideModalTextFull}>
            <View style={{height: '100%', justifyContent: 'flex-end'}}>
              <Card style={{cardModelPop}}>
                <FullScreenText dataList={this.state.dataTextItem} />
              </Card>
            </View>
          </Modal>
          <Modal
            visible={this.state.isModalPopImageFull}
            onDismiss={this._hideModalImageFull}>
            <View
              style={{
                height: '100%',
                justifyContent: 'flex-end',
                backgroundColor: '#fff',
                width: '100%',
              }}>
              <FullScreenImage dataList={this.state.dataImageItem} />
            </View>
          </Modal>
        </View>

        {this.state.tabBarVisible == true ? (
          <View
            elevation={8}
            style={{
              width: `100%`,
              height: 55,
              position: 'absolute',
              bottom: 0,
              backgroundColor: '#ecf5df',
              margin: 0.1,
              paddingTop: 10,
            }}>
            <View style={{flexDirection: 'row', width: `100%`, height: `100%`}}>
              <View style={{flex: 1, alignItems: 'center'}}>
                <Image
                  source={passed}
                  style={{
                    width: 20,
                    height: 20,
                    color: Res.Color.primersButton,
                  }}
                  tintColor={Res.Color.gray}
                />
                <Text
                  allowFontScaling={false}
                  style={{color: Res.Color.gray, fontFamily: 'BYekan'}}>
                  {'آزمون سازی'}
                </Text>
              </View>
              <View style={{flex: 1, alignItems: 'center'}}>
                <Image
                  source={werite}
                  style={{
                    width: 20,
                    height: 20,
                    color: Res.Color.primersButton,
                  }}
                  tintColor={Res.Color.gray}
                />
                <Text style={{color: Res.Color.gray, fontFamily: 'BYekan'}}>
                  {'محصول ساز'}
                </Text>
              </View>
              <TouchableRipple
                style={{flex: 1, alignItems: 'center'}}
                onPress={() => this.props.navigation.navigate('CreatProduct')}>
                <View style={{flex: 1, alignItems: 'center'}}>
                  <Image
                    source={im_exam}
                    style={{
                      width: 20,
                      height: 20,
                      color: Res.Color.primersButton,
                    }}
                    tintColor={Res.Color.gray}
                  />
                  <Text
                    allowFontScaling={false}
                    style={{color: Res.Color.gray, fontFamily: 'BYekan'}}>
                    {'رفع اشکال'}
                  </Text>
                </View>
              </TouchableRipple>
              <View style={{flex: 1, alignItems: 'center'}}>
                <Image
                  source={house}
                  style={{
                    width: 20,
                    height: 20,
                    color: Res.Color.primersButton,
                  }}
                  tintColor={Res.Color.primersButton}
                />
                <Text
                  allowFontScaling={false}
                  style={{
                    color: Res.Color.primersButton,
                    fontFamily: 'BYekan',
                  }}>
                  {'خانه'}
                </Text>
              </View>
            </View>
          </View>
        ) : null}
      </View>
    );
  }
  static propTypes = {
    navigation: PropTypes.any,
  };
}
function mapStateTop(state) {
  return {
    data: state.Home.data,
    isLoaded: state.Home.isLoaded,
    dataGetSubject: state.Home.dataGetSubject,
    dataGetObject: state.Home.dataGetObject,
    dataGetTeacherPayload: state.Home.dataGetTeacherPayload,
    dataGetTeacherRate: state.Home.dataGetTeacherRate,
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(HomeAction, dispatch);
}
export default connect(mapStateTop, mapDispatchToProps)(HomeScreen);
