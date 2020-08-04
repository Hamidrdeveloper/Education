import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Res from '../../../Color/color';
export default StyleSheet.create({
  matchParent: {
    width: 200,
    height: 250,
  },
  textTitlePopUp: {
    textAlign: 'right',
    fontSize: hp(5),
    color: Res.Color.primers,
    fontFamily: 'BYekanBold',
    right: 0,
    position: 'absolute',
    paddingRight: 15,
    width:`87%`,
 
  },
  textTitlePopUpMenu: {
    width: '100%',
    textAlign: 'center',
    fontSize: hp(4),
    color: Res.Color.primers,
    fontFamily: 'BYekanBold',
    right: 0,
  },
  lineService: {
    width: '100%',
    height: 1,
    backgroundColor: Res.Color.grayLight,
    marginTop: 15,
  },
  viewIconService: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 12.5,
    paddingRight: 20,
  },
  textServicePopUpMenu: {
    textAlign: 'right',
    fontSize: hp(2.3),
    color: Res.Color.primers,
    fontFamily: 'BYekanBold',
  },
  textTitle: {textAlign: 'center', fontFamily: 'BYekan', fontSize: hp(2.6)},
  date: {textAlign: 'center', fontFamily: 'BYekan', fontSize: hp(2)},
  viewCircle: {
    paddingLeft:8,
    paddingRight:8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  datePopUp: {fontFamily: 'BYekanBold', fontSize: 15, color: Res.Color.primers},
  viewItemRow: {
    width: '100%',
    flexDirection: 'row',
    height: 50,
    paddingTop:10,
    alignItems: 'flex-end',
  },
  viewItemRowII: {
    color: Res.Color.primers,
    fontFamily: 'BYekanBold',
    right: 0,
    position: 'absolute',
  },
  viewItem: {
    width: '100%',
    height: '100%',
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },
  viewCircleII: {
    width: 65,
    height: 65,
    borderRadius: 100,
    backgroundColor:"#cce4aa",
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleTitle: {textAlign: 'center', fontFamily: 'Yekan', fontSize: 11},
  detail: {
    textAlign: 'center',
    fontFamily: 'Yekan',
    fontSize: hp(2.3),
    padding: 8,
    color: '#c6c6c6',
  },
  buttonItem: {
    backgroundColor: Res.Color.primersButton,
    borderRadius: 30,
    width: 100,
    height: 40,

    alignSelf: 'center',
  },
  textButton: {
    height: '100%',
    height: '100%',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: 'Yekan',
    color: '#fff',
    fontSize: 15,
  },
  viewFull: {width: '100%', height: '100%'},
  imagePro: {
    width: 60,
    height: 60,
    borderRadius: 100,
    alignSelf: 'center',
  },
  textRating: {
    height: '100%',

    textAlignVertical: 'center',
    right: 0,
    color: Res.Color.gray,
    fontFamily: 'BYekanBold',
  },
  viewTextRating: {
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardButton: {
    width: '100%',
    height: '100%',

    backgroundColor: '#f7f7f9',
    borderRadius: 30,
  },
  viewFullCardButton: {
    width: wp(55),
    height: hp(4),
  },
  viewLine: {
    width: wp(50),
    height: hp(4),
    elevation: 5,
    backgroundColor: "#fff",
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 15,
  },
  cardModelPop: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    
  },
  textPerformance: {
    color: '#000',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: 'BYekan',
    fontSize: 12,
    height: '100%',
  },
  cardModelPerformance: {
    height: '100%',
  },
});
