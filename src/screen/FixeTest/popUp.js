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
} from 'react-native';

import Res from '../../Color/color';
import ImagePicker from 'react-native-image-picker';
import Toast from 'react-native-simple-toast';
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
import Dropdown from '../../components/drop';
import {UserData} from '../../model/userData';
let screenWidth = Dimensions.get('window').width;
class PopUp extends React.Component {
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
    isFlagImage:"#000",
    isFlagPlyer:"#000"
  };
  componentDidMount() {
    let {dataPro} = this.props;
    setTimeout(()=>{
      this.setState({
        questionId: dataPro.Id,
      });
    },200)
  
  }
  _requestQuestion = e => {
    if(this.props.isConnected){
    let {
      answerText,
      SumSbjId,
      questionId,
      teacherId,
      SumObjId,
      voiceFileName,
      imageFileName,
    } = this.state;
    // FixAction._onPostSaveReserved( UserData.jsonData.teacherInfo.Rid , questionId);
    if (answerText.length > 0) {
      FixAction._onPostInsertAnswer(
        answerText,
        SumSbjId,
        questionId,
        UserData.jsonData.teacherInfo.Rid,
        SumObjId,
      ).then(data => {
     
        FixAction._onPostAnswerUpload(
          data.answerId,
          DATA.file.image,
          DATA.file.voice,
        ).then(data => {
          FixAction._onPstSetAnswerFilePath2(
            voiceFileName,
            imageFileName,
            questionId,
            UserData.jsonData.teacherInfo.Rid,
          ).then(data => {
            this.props.hidePopUp();
          });
        });
      });
    } else {
      Toast.show('متن خالی است');
    }
  } else {
    Toast.show('اینترنت خود را برسی کنید');
  }
  };
  _openScreen() {
    let {navigation} = this.props;
    navigation.navigate('Home');
  }
  _ShowModalPlyer = e => {
    if (e.length > 10) {
      var voice = [
        {
          title: 'Stressed Out',
          artist: 'Twenty One Pilots',
          albumArtUrl:
            'http://36.media.tumblr.com/14e9a12cd4dca7a3c3c4fe178b607d27/tumblr_nlott6SmIh1ta3rfmo1_1280.jpg',
          audioUrl: e,
        },
      ];
      this.setState({
        voice: voice,
        isModalPlayer: !this.state.isModalPlayer,
      });
    } else {
      Toast.show('فایل برای گوش دادن وجود ندارد');
    }
  };
  _hideModalPlyer = () => {
    this.setState({
      isModalPlayer: !this.state.isModalPlayer,
    });
  };
  _hideModalMenu = () => {
    this.props.changeState(false);
  };
  onShowImage = e => {
    if(this.props.isConnected){
    if (e.length > 10) {
      this.props.openModalImageFull(e);
    } else {
      Toast.show('فایل برای نمایش دادن وجود ندارد');
    }
     } else {
    Toast.show('اینترنت خود را برسی کنید');
  }
  };
  onShowText = e => {
    this.props.openModalTextFull(e);
  };
  onImagePicker = () => {
    const options = {
      title: 'فایل را انخاب کنید',
      takePhotoButtonTitle: 'عکس گرفتن',
      chooseFromLibraryButtonTitle: 'انتخاب از گالری',
      cancelButtonTitle: 'لغو',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.uri};
        console.log('Response = ', source);
        DATA.file.image = response;
          this.setState({
        isFlagImage: Res.Color.primersButton,
      });
      }
    });
  };
  onRecord = e => {
    this.setState({
      isModalVisible: true,
    });
  };
  _hideTabBar = e => {
    if(DATA.file.voice.uri.length>15){
     this.setState({
       isFlagPlyer: Res.Color.primersButton,
     });
     console.log(DATA.file.voice.uri.length+""+DATA.file.voice.uri)
   }
   this.setState({
     isModalVisible: false,
   });
 };
  _filterSort(data, indext) {
    return data.SbjName;
  }
  filterSort(data, indext) {
    return data.SbjName;
  }
  _filterName(data, indext) {
    return data;
  }
  _filterSortCourse(data, indext) {
    return data.ObjName;
  }
  _filterNameCourse(data, indext) {
    return data;
  }
  _selectCourse = (data,index) => {
    if(this.props.isConnect){
    // console.log(data.objectId + '++' + this.state.groupId);
    this.setState({
      SumObjId: this.props.object[index].objectId,
    });
    } else {
      Toast.show('اینترنت خود را برسی کنید');
    }
    return data;
  };
  _selectGroups =  (data,index) => {
   
    if(this.props.isConnected){
      this.props.onFunObject(data.subjectId);
      this.setState({
        SumSbjId: this.props.subject[index].subjectId,
      });
    
    } else {
      Toast.show('اینترنت خود را برسی کنید');
    }
    // console.log(data.subjectId);
   
    


    return data;
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
     var text= "hahsdas\n adsadasdasdasd\n"
    //  console.log( dataPro.ProblemText.split(/\r\n|\r|\n/).length+"")
    
    return (
      <View
        style={{
          height: '100%',
          width: '100%',

          justifyContent: 'flex-end',
          backgroundColor: 'transparent',
          padding: 15,
        }}>
                              <Text style={{height:`100%`,width:`100%`,position:'absolute'}} onPress={()=>this._hideModalMenu()}/>

        <Card
          style={{
            width: '100%',
            borderRadius: 15,
            padding: 8,
          }}>
          <TouchableRipple
            style={{
              width: '100%',
              height: 50,
              alignItems: 'center',

              position: 'absolute',
              top: 0,
              alignSelf: 'center',
            }}
            onPress={() => {
              this._hideModalMenu();
            }}>
            <View
              style={{
                width: 50,
                height: 4,
                borderRadius: 8,
                backgroundColor: Res.Color.grayLight,
              }}
            />
          </TouchableRipple>

          <View style={viewItemRow}>
          <View style={{flexDirection:'row',height:50,width:`100%`,alignItems:'center'}}>
          <Text allowFontScaling={false} style={[textTitlePopUp, {fontSize: 20}]}>
              {dataPro.CrsName}
            </Text>
            <Text allowFontScaling={false} style={[datePopUp,{left:0,position:'absolute',top:12,fontSize:14}]}>{dataPro.questionType}</Text>
          </View>
          <Text allowFontScaling={false} style={[datePopUp,{top:0,position:'absolute',fontSize: 11,    fontFamily: 'BYekan' }]}>
                {dataPro.persianDate.substring(0, 10)}
              </Text>
            {/* <View style={{top:7,height:60}}>
            <Text style={[datePopUp,{top:0,position:'absolute',fontSize: 11,}]}>
                {dataPro.persianDate.substring(0, 10)}
              </Text>
             
            
            </View> */}
          </View>

          <View style={{width: '100%'}}>
           
            {dataPro.ProblemText.split(/\r\n|\r|\n/).length>5||dataPro.ProblemText.length>300?
            <View>
            <Text allowFontScaling={false} style={[datePopUp, {fontSize: 13,}]}  numberOfLines={5}>
              {dataPro.ProblemText}
            </Text>
            <Text  allowFontScaling={false}  onPress={() => this.onShowText(dataPro.ProblemText)}style={[datePopUp, {fontSize: 13,color:Res.Color.primersButton}]} >
              {"نمایش بیشتر"}
            </Text>
            </View>  
            : <Text allowFontScaling={false} style={[datePopUp, {fontSize: 13,}]} >
              {dataPro.ProblemText}
            </Text>}
          </View>
          <View style={[viewItemRow, {paddingLeft: 8}]}>
            <TouchableRipple
              onPress={() => this._ShowModalPlyer(dataPro.ProblemVoicePath)}>
              <Icon name="play" size={30} color={dataPro.ProblemVoicePath.length>15?Res.Color.primersButton:Res.Color.grayLight} />
            </TouchableRipple>
            <TouchableRipple
              onPress={() => this.onShowImage(dataPro.ProblemImagePath)}>
              <Icon name="file-photo-o" size={30} color={dataPro.ProblemImagePath.length>15?Res.Color.primersButton:Res.Color.grayLight}  style={{marginLeft: 15}} />
            </TouchableRipple>
           
          </View>
        </Card>
        <Card
          style={{
            height: 350,
            width: '100%',
            borderRadius: 15,
            padding: 8,
            marginTop: 8,
            alignItems: 'center',
          }}>
          <View style={[viewItem,{ width: '100%',}]}>
            <View
              style={[
                viewItemRow,
                {justifyContent: 'space-between', marginTop: 12, width: '100%',},
              ]}>
              <TouchableRipple
                style={{width: '50%', height: 50}}
                onPress={this._hideTabBar}>
                <View
                  style={[
                    buttonItem,
                    {width: '100%', height: 50, marginTop: 0},
                  ]}>
                  
                    <Dropdown
                      textDefault={'انتخاب مبحث'}
                      data={this.props.object}
                      textStyle={{color: '#fff', paddingRight: 10,fontFamily: 'BYekan',}}
                      iconStyle={{color: '#fff', marginLeft: 8}}
                      onChangeText={this._selectCourse}
                      labelExtractor={this._filterSortCourse}
                      valueExtractor={this._filterName}
                    />
                  
                </View>
              </TouchableRipple>
              <View style={{width: 10}} />
              <TouchableRipple
                style={{width: '50%', height: 50}}
                onPress={this._hideTabBar}>
                <View
                  style={[
                    buttonItem,
                    {width: '100%', height: 50, marginTop: 0},
                  ]}>
                  {/* {this.props.subject != null ? ( */}
                    <Dropdown
                      textDefault={'انتخاب فصل'}
                      data={this.props.subject}
                      textStyle={{color: '#fff', paddingRight: 10,fontFamily: 'BYekan',}}
                      iconStyle={{color: '#fff', marginLeft: 8}}
                      onChangeText={this._selectGroups}
                      labelExtractor={this._filterSort}
                      valueExtractor={this._filterName}
                    />
                  {/* ) : (
                    <Text style={textButton}>{'انتخاب فصل'}</Text>
                  )} */}
                </View>
              </TouchableRipple>
            </View>
            <View
             style={{
                
                height: '50%',
                marginTop:10,
               
                borderRadius: 10,
              
              
              }}>
            <View
              style={{
                width: `100%`,
                height: '100%',
                marginTop:10,
               
                borderRadius: 10,
              
                backgroundColor: Res.Color.grayLight,
              }}>
              <TextInput
              allowFontScaling={false}
                style={{
                  width: '100%',
                  height: '100%',
                  textAlign: 'right',
                  textAlignVertical: 'top',
                  padding: 8,
                }}
                onChangeText={e =>
                  this.setState({
                    answerText: e,
                  })
                }
              />
            </View>
            </View>
           
            <View
              style={[
                viewItemRow,
                {
               
                  marginTop:15,
                  width: '100%',
                 
                
                  
                 
                },
              ]}>
              <View style={[{width: '50%', height: 50}]}>
              <View style={[viewItemRow, {paddingLeft: 8}]}>
                <TouchableRipple style={{width:50,height:50,alignItems:'center',justifyContent:'center'}}onPress={this.onRecord}>
                <View style={{alignItems:'center',justifyContent:'center',width:50,height:50,}}>
                <Icon name="microphone" size={30} color={this.state.isFlagPlyer} />
                </View>
                
                </TouchableRipple>
                <TouchableRipple style={{width:50,height:50,alignItems:'center',justifyContent:'center'}} onPress={this.onImagePicker}>
                  <Icon name="camera" size={30} color={this.state.isFlagImage} />
                </TouchableRipple>
              </View>
            </View>

              <View style={{width: 10}} />

              <TouchableRipple
                style={{width: '50%', height: 50}}
                onPress={this._requestQuestion}>
                <View style={[buttonItem, {width: '100%', height: 50, marginTop: 0}]}>
                  <Text allowFontScaling={false} style={textButton}>{'ثبت پاسخ'}</Text>
                </View>
              </TouchableRipple>
            </View>
          </View>

          <Modal
            style={{position: 'absolute', bottom: 0}}
            visible={this.state.isModalVisible}
            onDismiss={this._hideTabBar}>
            <View style={{width: '100%', height: '100%'}}>
              <Recorder hideRecorded={this._hideTabBar} />
            </View>
          </Modal>

          <Modal
            style={{position: 'absolute', bottom: 0}}
            visible={this.state.isModalPlayer}
            onDismiss={this._hideModalPlyer}>
            <Player tracks={this.state.voice} />
          </Modal>
        </Card>
        <TouchableOpacity
        activeOpacity={0.9}
          style={{
            width: 100,
            height: 260,
          

            position: 'absolute',
            top: 0,
            alignSelf: 'center',
          }}
          onPress={() => {
            this._hideModalMenu();
          }}
        />
      </View>
    );
  }
  static propsType = {
    changeState: PropTypes.func,
    dataPro: PropTypes.any,
    navigation: PropTypes.any,
    hidePopUp: PropTypes.any,
    object: PropTypes.any,
    subject: PropTypes.any,
    onFunObject: PropTypes.func,
    isConnect: PropTypes.func,
  };
}

export default PopUp;
