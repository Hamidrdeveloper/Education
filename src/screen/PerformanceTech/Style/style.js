import {StyleSheet, Dimensions} from 'react-native';
import Res from '../../../Color/color';
let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default StyleSheet.create({
  matchParent: {
    width: 200,
    height: 250,
  },
  textTitle: {
    width: '100%',
    textAlign: 'center',
    fontFamily: 'BYekanBold',
    fontSize: 40,
    color: Res.Color.primers,
  },
  viewItem: {
    width: '100%',
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },
  date: {fontFamily: 'BYekanBold', fontSize: 15, color: Res.Color.primers},
  viewCircle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
    marginTop: 15,
  },
  viewCircleII: {
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: '#d3d3d3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleTitle: {textAlign: 'center', fontFamily: 'Yekan'},
  detail: {
    width: '100%',
    textAlign: 'center',
    fontFamily: 'BYekanBold',
    fontSize: 18,
    color: '#a0a0a0',
  },
  buttonItem: {
    backgroundColor: '#333648',
    borderRadius: 30,
    marginTop: 100,
    width: '100%',
    height: 55,
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
  },

  viewFull: {
    width: '100%',
    height: '100%',
    padding: 30,
  },
  imagePro: {
    width: 60,
    height: 60,
    borderRadius: hp(7),
    alignSelf: 'center',
  },
  viewRank: {
    height: hp(12),
    width: wp(11),
    borderColor: Res.Color.primers,
    borderWidth: 2,
    borderRadius: 15,
    marginLeft: 10,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  viewFullButton: {
    width: '100%',
    height: 55,
    marginTop: 20,
    paddingLeft: 15,
    paddingRight: 15,
    bottom: 0,
    position: 'absolute',
  },
  viewButton: {
    width: '100%',
    height: 55,
    marginRight: 15,
    marginLeft: 15,
    elevation: 5,
    backgroundColor: '#bfbfbf',
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 15,
    position: 'absolute',
    bottom: 0,
    marginBottom: 25,
  },
  // eslint-disable-next-line no-dupe-keys
  textRank: {
    fontSize: 35,
    color: Res.Color.primers,
    fontFamily: 'Yekan',
  },
  textInputItem: {
    width: '100%',
    height: '100%',
  },
  viewFullIem: {
    flex: 1,
    height: 55,
    marginTop: 20,
    paddingLeft: 15,
    paddingRight: 8,
  },
  imageBottom: {width: wp(8), height: hp(8), flex: 1},
  buttonBack: {
    width: 15,
    height: 15,
    tintColor: Res.Color.primers,
  },
  textHeder: {
    fontSize: 35,
    color: Res.Color.primers,
    fontFamily: 'BYekanBold',
    right: 0,
    position: 'absolute',
    paddingRight: 15,
  },
  viewForm: {
    width: '100%',
    height: '100%',
    padding: 25,
    borderRadius: 40,
    elevation: 8,
  },
  space: {
    marginTop: 15,
  },
  viewItemRow: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginTop: 15,
  },
  viewItemRowII: {
    width: '100%',
    flexDirection: 'row',
  },
  viewItemRowIII: {
    flexDirection: 'row',
    width: '100%',
  },
  cardBottom: {
    flex: 1,
    width: '100%',
    height: 100,
    alignItems:'flex-end',
    paddingRight:8,
    backgroundColor: '#f6f6f8',
    borderRadius: 10,
  },
  cardBottomLine: {
    height: 75,
    width: 1.5,
    backgroundColor: '#f6f6f8',
    marginLeft: 8,
    marginRight: 8,
  },
  viewDetail: {
    paddingLeft: 100,
    width: '100%',
    paddingBottom: 10,
  },
  imageCard: {
    alignItems: 'center',
  },
  viewTextRating: {
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewTextShowRank: {
    flexDirection: 'row-reverse',

    alignItems: 'center',
    paddingLeft: 8,
  },
  textShowRank: {
    height: '100%',

    textAlignVertical: 'center',
    right: 0,
    fontFamily: 'BYekanBold',
    paddingLeft: 20,
  },
  viewImageShowRank:{
    position: 'absolute',
    right: 0,
    height: '100%',
    width: 25,
    justifyContent: 'center',
  },
  textNumRankItem:{
  borderWidth:1,
  borderColor:Res.Color.gray,
  borderRadius:100,
  color:Res.Color.gray,
width:20,
height:20,
textAlign:'center',
textAlignVertical:'center'
  },
  viewRankItem:{
    padding:8,
  flexDirection:'row-reverse',
  width:`100%`,
  
  },
  textRating: {
    height: '100%',

    textAlignVertical: 'center',
    right: 0,
    color:Res.Color.gray,
    fontFamily: 'BYekanBold',
  },
  cardButton: {
    width: '100%',
    height: '100%',

    backgroundColor: '#f7f7f9',
    borderRadius: 30,
  },
  cardButtonMore: {
    width: '100%',
    height: '100%',
    backgroundColor: '#e6e6e6',
    borderRadius: 30,
  },
  viewCardButton: {
    width: '100%',
    height: 55,
    flexDirection: 'row',
    padding: 8,
  },
  textCardButton: {
    flex: 1,
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: 30,
    textAlign: 'center',
    marginRight: 8,
    fontSize: 16,
    fontFamily: 'BYekanBold',
    textAlignVertical: 'center',
  },
  viewFullCardButton: {
    width: wp(55),
    height: hp(4),
  },
  viewFullCardButtonmore: {
    height: hp(4),
    marginTop: 10,
  },
  titleRegister: {
    width: '100%',
    textAlign: 'right',
    fontFamily: 'BYekanBold',
    fontSize: 25,
    color: '#a0a0a0',
  },
  buttonLogin: {
    borderRadius: 30,
    marginTop: 18,
    width: '100%',
    height: 55,
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
  },
  textBottomRank: {
    textAlign: 'center',
   
    fontSize: hp(1.5),
    color: Res.Color.primers,
    fontFamily: 'BYekanBold',
  },
  textTopRank: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: hp(1.5),
    color: Res.Color.primers,
    fontFamily: 'BYekanBold',
  },
});
