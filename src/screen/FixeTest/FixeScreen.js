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
  FlatList,
  ActivityIndicator,
  BackHandler,
} from 'react-native';
import {Card, Modal, TouchableRipple} from 'react-native-paper';
import Carousel, {getInputRangeFromIndexes} from 'react-native-snap-carousel';
import background from '../../../assets/images/abstract.png';
import PropTypes from 'prop-types';
import NetInfo from '@react-native-community/netinfo';

import backgroundC from '../../../assets/images/abstract2.png';
import back from '../../../assets/images/back.png';
import circle from '../../../assets/images/circaleBack.png';
import style from './Style/style';

import Dropdown from '../../components/drop';
import FixAction from '../../action/FixAction';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import PopUp from './popUp';
import FullScreenText from '../../components/textFull';
import FullScreenImage from '../../components/FullScreenImage';
import {UserData} from '../../model/userData';
import Res from '../../Color/color';
import OptimizedFlatList from '../../components/Optimize/OptimizedFlatList';
import RankQuTeacher from './RankQuTeacher';
import Toast from 'react-native-simple-toast';

let screenWidth = Dimensions.get('window').width;
class FixeScreen extends React.Component {
  state = {
    stepOne: 1,
    groupId: 0,
    isModalVisible: false,
    detail: '',
    isModalPopTextFull: false,
    dataTextItem: '',
    isModalPopImageFull: false,
    dataImageItem: '',
    CrsId: 0,
    isModalRankQuTeacher: false,
    rank: 0,
    isConnected:true,
  };
  constructor(props) {
    super(props);
    this._hideTabBar = this._hideTabBar.bind();
  }
  _filterSort(data, indext) {
    return data.groupName;
  }
  _filterName(data, indext) {
    return data;
  }
  _filterSortCourse(data, indext) {
    return data.CrsName;
  }
  _filterNameCourse(data, indext) {
    return data;
  }
  _selectGroups = (data, index) => {
    setTimeout(()=>{
      if(this.state.isConnected){
        this.setState({
          groupId: this.props.dataGroups[index].groupCode,
          CrsId:0
        });
        this.props._onCourse(this.props.dataGroups[index].groupCode);
        setTimeout(() => {
          this._onGetData();
        }, 100);
      } else {
        Toast.show('اینترنت خود را برسی کنید');
      }
    },1000)
   
  
  };
  _selectCourse = (data, index) => {
    if(this.state.isConnected){
    console.log(this.props.dataCourse[index].CrsId);

    this.setState({
      CrsId: this.props.dataCourse[index].CrsId,
    });
    setTimeout(() => {
      this._onGetData();
    }, 100);
  } else {
    Toast.show('اینترنت خود را برسی کنید');
  }
    return data;
  };
  handleBackButton = (e) => {
    this.props.navigation.goBack(null);
  };
  componentDidMount() {
    NetInfo.addEventListener(state => {
      console.log("Connection type", state.type);
      console.log("Is connected?", state.isConnected);
      this.setState({
        isConnected:state.isConnected
      })
        setTimeout(() => {
          this.props._onGroups();
          this._onGetData();
        }, 1000);
      });
    // this.props._onNoAnsweredQuestionCourseBase( UserData.jsonData.teacherInfo.Rid , 27, 3273);
    // this.props._onReservedQuestionCourseBase( UserData.jsonData.teacherInfo.Rid , 27, 3273);
  }
  _openModalRankQuTeacher = (e) => {
    if(this.state.isConnected){
    this.setState({
      rank: e.Rate,
      isModalRankQuTeacher: true,
    });
  } else {
    Toast.show('اینترنت خود را برسی کنید');
  }
  };
  _hideModalRankQuTeacher = () => {
    this.setState({
      isModalRankQuTeacher: false,
    });
  };
  shouldComponentUpdate(nextProps, nextStet) {
    if (this.props.dataGroups !== nextProps.dataGroups) {
      console.log(nextProps);
      console.log('nextProps.dataGroups', nextProps);
      return true;
    }
    if (this.props.dataCourse !== nextProps.dataCourse) {
      console.log('nextProps.dataCourse', nextProps);
      return true;
    }
    if (this.props.dataCourseBase !== nextProps.dataCourseBase) {
      console.log('nextProps.dataCourseBase', nextProps);
      return true;
    }

    if (this.props.dataGetSubject !== nextProps.dataGetSubject) {
      console.log('nextProps.dataGetSubject', nextProps);
      return true;
    }
    if (this.props.dataGetObject !== nextProps.dataGetObject) {
      console.log('nextProps.dataGetObject', nextProps);
      return true;
    }
    if (this.state !== nextStet) {
      console.log('nextProps.state', nextStet);
      return true;
    }
    return false;
  }
  _onGetData = (e) => {
    if(this.state.isConnected){
        console.log(this.state.CrsId);
        if (this.state.groupId === 0) {
          this.setState({
            groupId: 0,
          });

          if (this.state.stepOne == 1) {
            this.props._onAllNoAnswered();
          }
          if (this.state.stepOne == 2) {
            this.props._onAllAnsweredReserved(
              UserData.jsonData.teacherInfo.Rid,
            );
          }
          if (this.state.stepOne == 3) {
            this.props._onAllAnsweredQuestion(
              UserData.jsonData.teacherInfo.Rid,
            );
          }
        } else {
          if (this.state.CrsId === 0) {
            // this.props._onCourse(this.state.groupId);
            this.setState({
              CrsId: 0,
            });
            if (this.state.stepOne == 1) {
              this.props._onNoAnsweredQuestionCourseBase(
                UserData.jsonData.teacherInfo.Rid,
                this.state.groupId,
                null,
              );
            }
            if (this.state.stepOne == 2) {
              this.props._onReservedQuestionCourseBase(
                UserData.jsonData.teacherInfo.Rid,
                this.state.groupId,
                null,
              );
            }

            if (this.state.stepOne == 3) {
              this.props._onAnsweredQuestionCourseBase(
                UserData.jsonData.teacherInfo.Rid,
                this.state.groupId,
                null,
              );
            }
          } else {
            this.setState({
              CrsId: this.state.CrsId,
            });
            if (this.state.stepOne === 1) {
              this.props._onNoAnsweredQuestionCourseBase(
                UserData.jsonData.teacherInfo.Rid,
                this.state.groupId,
                this.state.CrsId,
              );
            }
            if (this.state.stepOne == 2) {
              this.props._onReservedQuestionCourseBase(
                UserData.jsonData.teacherInfo.Rid,
                this.state.groupId,
                this.state.CrsId,
              );
            }
            if (this.state.stepOne === 3) {
              this.props._onAnsweredQuestionCourseBase(
                UserData.jsonData.teacherInfo.Rid,
                this.state.groupId,
                this.state.CrsId,
              );
            }
          }
        }
      } else {
        Toast.show('اینترنت خود را برسی کنید');
      }
  };
  _onStepList = (e) => {
    if(this.state.isConnected){
        this.setState({
          stepOne: e,
        });

        if (e == 1) {
          this.props._onAllNoAnswered();
        }
        if (e == 2) {
          this.props._onAllAnsweredReserved(UserData.jsonData.teacherInfo.Rid);
        }
        if (e == 3) {
          this.props._onAllAnsweredQuestion(UserData.jsonData.teacherInfo.Rid);
        }
      } else {
        Toast.show('اینترنت خود را برسی کنید');
      }
     
  };

  onBack = (e) => {
    const {state, goBack} = this.props.navigation;

    goBack(null);
  };
  deleteReserved(e) {
    if(this.state.isConnected){
        FixAction._onDeleteReserveQuestion(
          UserData.jsonData.teacherInfo.Rid,
          e.Id,
        ).then((res) => {
          this._onGetData();
        });
      } else {
        Toast.show('اینترنت خود را برسی کنید');
      }
  }
  _hideTabBar = (e) => {
    if (this.state.stepOne === 1 || this.state.stepOne === 2) {
      // if (this.state.stepOne != 2) {
      // FixAction._onPostSaveReserved(
      //   UserData.jsonData.teacherInfo.Rid,
      //   e.Id,
      // ).then(res => {
      //   this._onGetData();
      // });
      // this._onGetData();
      // }

      this.setState({
        isModalVisible: true,
        detail: e,
      });
      this.props._onGetSubject(e.SumCrsId);
    } else {
      this._openModalRankQuTeacher(e);
    }
  };
  _hideTabBarMode = (e) => {
    this.setState({
      isModalVisible: false,
    });
  };
  _openModalMenu() {
    this._hideModalMenu(true);
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
            minHeight: 150,
            paddingTop: 10,
          }}>
          <Image
            style={[
              imageCard,
              {
                tintColor: '#e3f0d1',
                width: 120,
                height: 125,

                bottom: 0,
                left: 0,
                tintColor: '#e3f0d1',
                // borderBottomWidth: 7000,
                position: 'absolute',
              },
            ]}
            resizeMode="stretch"
            source={circle}
          />
          <View style={[imageCard, {backgroundColor: Res.Color.tab}]} />

          <View style={[{top: 0, paddingLeft: 10, position: 'absolute'}]}>
            <View style={{top: 10}}>
              <Text style={[date, {alignSelf: 'flex-start'}]}>
                {item.questionType}
              </Text>
              {/* <Text style={date}>{'1398/08/24'}</Text> */}
            </View>
          </View>
          <View style={viewItem}>
            <Text style={[textTitle, {fontSize: 20}]}>{item.CrsName}</Text>
            <View style={viewItemRow}>
              <Text style={[viewItemRowII, {marginRight: 0}]}>
                {' '}
                {item.persianDate.substring(0, 10)}
              </Text>
              <Text style={[viewItemRowII, {marginRight: 0, left: 0}]}>
                {item.persianDate.substring(0, 10)}
              </Text>
            </View>
            <View style={[viewItemRow, {marginTop: 15}]}>
              <View style={viewDetail}>
                <Text style={detail} numberOfLines={5}>
                  {item.ProblemText}
                </Text>
              </View>
            </View>
          </View>
          {this.state.stepOne == 2 ? (
            <TouchableRipple
              style={{
                position: 'absolute',
                marginLeft: 15,
                width: 50,
                height: 50,
              }}
              onPress={() => this.deleteReserved(item)}>
              <Icon name="close" size={14} />
            </TouchableRipple>
          ) : null}
          <TouchableRipple
            style={[
              buttonItem,
              {
                position: 'absolute',
                bottom: 15,
                left: 10,
                backgroundColor: Res.Color.primersButton,
              },
            ]}
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
      imageBottom,
      viewFull,
      buttonBack,
      textHeder,
      viewHeder,
      space,
      viewLine,
      flatListStyle,
      textInputItem,
      viewFullIem,
      cardButton,
      viewCardButton,
      textCardButton,
      viewFullCardButton,
      textCardButtonGray,
      cardModelPop,
      viewActivityIndicator,
    } = style;

    return (
      <View style={viewFull}>
        <ImageBackground source={background} style={viewFull}>
          <Image
            style={{
              width: `100%`,
              height: `50%`,
              position: 'absolute',
              bottom: 0,
            }}
            resizeMode="stretch"
            source={backgroundC}
          />

          <ScrollView style={{paddingRight: 15, paddingLeft: 15}}>
            <View style={viewHeder}>
              <TouchableRipple onPress={this.onBack} style={buttonBack}>
                <Image source={back} style={buttonBack} />
              </TouchableRipple>

              <Text style={textHeder}>رفع اشکال</Text>
            </View>
            <View style={[viewHeder, {marginTop: 8}]}>
              <View style={viewFullIem}>
                <Card style={viewLine}>
                  <Dropdown
                    textDefault="همه دروس"
                    data={this.props.dataCourse}
                                          textStyle={{color: '#000', paddingRight: 10,fontFamily: 'BYekan',}}

                    onChangeText={this._selectCourse}
                    labelExtractor={this._filterSortCourse}
                    valueExtractor={this._filterName}
                  />
                </Card>
              </View>
              <View style={{width: 10}} />
              <View style={viewFullIem}>
                <Card style={[viewLine]}>
                  <Dropdown
                    textDefault="همه مقاطع"
                    data={this.props.dataGroups}
                                          textStyle={{color: '#000', paddingRight: 10,fontFamily: 'BYekan',}}

                    onChangeText={this._selectGroups}
                    labelExtractor={this._filterSort}
                    valueExtractor={this._filterName}
                  />
                </Card>
              </View>
            </View>

            <FlatList
              data={this.props.dataCourseBase}
              extraData={this.state}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              renderItem={({item, index}) => this.renderGridItem(item, index)}
            />
          </ScrollView>
          {/* {this.state.isCardStep==true? */}
          <View style={viewFullCardButton}>
            <View style={[cardButton, {backgroundColor: Res.Color.tabProb}]}>
              <View style={viewCardButton}>
                <TouchableRipple
                  activeOpacity={0.9}
                  style={{position: 'absolute', left: 8}}
                  onPress={() => {
                    this._onStepList(1);
                  }}>
                  <Text
                    allowFontScaling={false}
                    style={
                      this.state.stepOne === 1
                        ? textCardButton
                        : textCardButtonGray
                    }>
                    پاسخ داده نشده
                  </Text>
                </TouchableRipple>
                <View style={{width: 15}} />
                <TouchableRipple
                  activeOpacity={0.9}
                  onPress={() => {
                    this._onStepList(2);
                  }}>
                  <Text
                    allowFontScaling={false}
                    style={
                      this.state.stepOne === 2
                        ? textCardButton
                        : textCardButtonGray
                    }>
                    سوالات رزرو شده
                  </Text>
                </TouchableRipple>
                <View style={{width: 15}} />
                <TouchableRipple
                  activeOpacity={0.9}
                  style={{position: 'absolute', right: 8}}
                  onPress={() => {
                    this._onStepList(3);
                  }}>
                  <Text
                    allowFontScaling={false}
                    style={
                      this.state.stepOne === 3
                        ? textCardButton
                        : textCardButtonGray
                    }>
                    پاسخ داده شده
                  </Text>
                </TouchableRipple>
              </View>
            </View>
          </View>
          {/* :null } */}
        </ImageBackground>
        <Modal
          visible={this.state.isModalVisible}
          onDismiss={this._hideTabBarMode}>
                          <Text style={{height:`100%`,width:`100%`,position:'absolute'}} onPress={()=>this._hideTabBarMode()}/>

          <View style={{height: '100%', justifyContent: 'flex-end'}}>
            <View style={cardModelPop}>
              <PopUp
                dataPro={this.state.detail}
                navigation={this.props.navigation}
                hidePopUp={this._hideTabBarMode}
                openModalTextFull={this._openModalTextFull}
                openModalImageFull={this._openModalImageFull}
                subject={this.props.dataGetSubject}
                object={this.props.dataGetObject}
                onFunObject={this.props._onGetObject}
                changeState={this._hideTabBarMode}
                isConnected={this.state.isConnected}
              />
            </View>
          </View>
        </Modal>
        <View style={viewActivityIndicator}>
          <ActivityIndicator
            animating={this.props.isLoadedCourse}
            color={'#000'}
          />
        </View>
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

        <Modal
          dismissable={false}
          visible={this.state.isModalRankQuTeacher}
          onDismiss={this._hideModalRankQuTeacher}>
            <Text style={{height:`100%`,width:`100%`,position:'absolute'}} onPress={()=>this._hideModalRankQuTeacher()}/>

          <View
            style={{
              height: '100%',
              justifyContent: 'center',
              backgroundColor: 'transparent',
              width: '100%',
            }}>
            <RankQuTeacher
              hidePopUp={this._hideModalRankQuTeacher}
              dataPro={this.state.rank}
            />
          </View>
        </Modal>
      </View>
    );
  }

  static propTypes = {
    navigation: PropTypes.any,
  };
}
function mapStateTop(state) {
  return {
    dataGroups: state.Fixe.dataGroups,
    dataCourse: state.Fixe.dataCourse,
    dataCourseBase: state.Fixe.dataCourseBase,
    isLoadedCourse: state.Fixe.isLoadedCourse,
    dataGetSubject: state.Home.dataGetSubject,
    dataGetObject: state.Home.dataGetObject,
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(FixAction, dispatch);
}
export default connect(mapStateTop, mapDispatchToProps)(FixeScreen);
