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
  Linking,
} from 'react-native';
import Toast from 'react-native-simple-toast';

import {Card, TouchableRipple, Button} from 'react-native-paper';
import Carousel, {getInputRangeFromIndexes} from 'react-native-snap-carousel';
import background from '../../../assets/images/abstract.png';
import NetInfo from '@react-native-community/netinfo';

import backgroundC from '../../../assets/images/abstract2.png';
import back from '../../../assets/images/back.png';
import circle from '../../../assets/images/circaleBack.png';
import style from './Style/style';
import {FlatList} from 'react-native-gesture-handler';
import LoginAction from '../../action/LoginAction';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Res from '../../Color/color';
import {UserData} from '../../model/userData';
import {StackActions} from 'react-navigation';

let screenWidth = Dimensions.get('window').width;
class RegisterScreen extends React.Component {
  state = {
    nationalCode: '',
    isLogin: false,
    success: false,
    isConnected:true,
  };
  componentDidMount() {
    let {navigation} = this.props;
    NetInfo.addEventListener(state => {
      console.log("Connection type", state.type);
      console.log("Is connected?", state.isConnected);
      this.setState({
        isConnected:state.isConnected
      })
    });
    AsyncStorage.multiGet(['userid', 'dataUser']).then((data) => {
      console.log('', JSON.parse(data[1][1]));
      if (data[0][1] != null) {
        UserData.jsonData = JSON.parse(data[1][1]);
        console.log('', UserData.jsonData);
        const pushAction = StackActions.replace({
          routeName: 'Home',
          params: {
            myUserId: 9,
          },
        });

        navigation.dispatch(pushAction);
        this.setState({
          success: true,
        });
      } else {
        this.setState({
          success: true,
        });
      }
    });
  }

  onLogin = (e) => {
   
      if (this.state.isConnected) {
       
        if (this.state.nationalCode.length > 9) {
          this.setState({
            isLogin: true,
          });
          let {navigation} = this.props;

          LoginAction._onLogin(this.state.nationalCode)
            .then((data) => {
              if (data == 1) {
                console.log(data.Rid);

                const pushAction = StackActions.replace({
                  routeName: 'Home',
                  params: {
                    myUserId: 9,
                  },
                });

                navigation.dispatch(pushAction);
                this.setState({
                  isLogin: false,
                  success: true,
                });
              } else {
                this.setState({
                  isLogin: false,
                });
                Toast.show('کد ملی اشتباه است');
              }
            })
            .catch((error) => {
              this.setState({
                isLogin: false,
              });
            });
          setTimeout(() => {
            this.setState({
              isLogin: false,
            });
          }, 6000);
        }
      } else {
        Toast.show('اینترنت خود را برسی کنید');
      }
   
  };
  onChangeTextUser(e) {
    this.setState({
      nationalCode: e,
    });
  }
  render() {
    let {
      imageBottom,
      viewFull,
      textTitle,
      detail,
      viewForm,
      space,
      viewRegister,
      titleRegister,
      buttonItem,
      buttonLogin,
      cardButton,
      textButton,
      textButtonLogin,
      textCardButton,
      viewFullCardButton,
    } = style;
    return (
      <View style={{width: '100%', height: '100%'}}>
        {this.state.success == true ? (
          <View style={{width: '100%', height: '100%'}}>
            <Image
              style={{width: '100%', height: '100%', position: 'absolute'}}
              source={background}
              resizeMode="stretch"
            />

            <KeyboardAwareScrollView
              contentContainerStyle={{flexGrow: 1}}
              keyboardShouldPersistTaps="handled"
              enableOnAndroid={true}
              style={{width: '100%', height: '100%'}}>
              <View style={viewRegister}>
                <View style={viewForm}>
                  <Text allowFontScaling={false} style={textTitle}>
                    کانون فرهنگی آموزش
                  </Text>
                  <Text allowFontScaling={false} style={detail}>
                    اپلیکیشن دبیران
                  </Text>
                  <View style={{width: '85%', marginTop: '18%'}}>
                    <Text allowFontScaling={false} style={titleRegister}>
                      کدملی
                    </Text>
                  </View>

                  <View style={viewFullCardButton}>
                    <Card style={cardButton}>
                      <TextInput
                        allowFontScaling={false}
                        textContentType="telephoneNumber"
                        keyboardType="decimal-pad"
                        style={{
                          textAlign: 'center',
                          textAlignVertical: 'center',
                          width: `100%`,
                          height: 50,
                          fontSize: 16,
                          color: Res.Color.primers,
                        }}
                        maxLength={11}
                        onChangeText={(text) => this.onChangeTextUser(text)}
                      />
                    </Card>
                  </View>
                  <View style={viewFullCardButton}>
                    <Button
                      loading={this.state.isLogin}
                      style={buttonItem}
                      color={'#fff'}
                      labelStyle={[
                        textButton,
                        {alignItems: 'center', justifyContent: 'center'},
                      ]}
                      contentStyle={{width: '100%', height: 50}}
                      onPress={() => this.onLogin()}>
                      <Text
                        allowFontScaling={false}
                        style={[
                          textButton,
                          {
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: `100%`,
                            height: `100%`,
                            fontFamily:"BYekan"
                          },
                        ]}>
                        {'ورود'}
                      </Text>
                    </Button>
                    <View style={buttonLogin}>
                      <TouchableRipple
                        onPress={() => {
                          Linking.openURL(
                            'http://kanoonihaweb.kanoon.ir/poshtibanweb/problemposhtibanreg',
                          );
                        }}>
                        <Text allowFontScaling={false} style={textButtonLogin}>
                          {'ثبت نام'}
                        </Text>
                      </TouchableRipple>
                    </View>
                  </View>
                </View>
              </View>
            </KeyboardAwareScrollView>
          </View>
        ) : null}
      </View>
    );
  }
}

export default RegisterScreen;
