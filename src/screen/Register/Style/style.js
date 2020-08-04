import {StyleSheet, Dimensions} from 'react-native';
import Res from '../../../Color/color';
let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  matchParent: {
    width: 200,
    height: 100,
  },
  textTitle: {
    width: '100%',
    textAlign: 'center',
    fontFamily: 'BYekanBold',
    fontSize: 30,
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
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleTitle: {textAlign: 'center', fontFamily: 'Yekan'},
  detail: {
    width: '100%',
    textAlign: 'center',
    fontFamily: 'BYekanBold',
    fontSize: 23,
    color: '#eee',
  },
  buttonItem: {
    backgroundColor: Res.Color.primersButton,
    borderRadius: 30,
    marginTop:100,
    width: '85%',
    height: 50,
    
  },

  viewFull: {
    width: '100%',
    height: '100%',
   
  },
  imagePro: {
    width: 80,
    height: 80,
    borderRadius: 100,
    alignSelf: 'center',
    marginTop: 45,
  },
  viewRegister: {
    width: '100%',
    height: `100%`,
    paddingRight:15,
    paddingLeft:15
   
  },
  viewFullButton: {
    width: '100%',
    height: 50,
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
    backgroundColor: '#fff',
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 15,
    position: 'absolute',
    bottom: 0,
    marginBottom: 25,
  },
  // eslint-disable-next-line no-dupe-keys
  textButton: {
    fontSize: 25,
    color: '#fff',
    fontFamily: 'BYekanBold',
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
  imageBottom: {
    width: '100%',
    height: '50%',
    position: 'absolute',
    bottom: 0,
  },
  buttonBack: {
    width: 25,
    height: 25,
    marginLeft: 10,
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
    marginTop: `35%`,
    width: '100%',
    height: '100%',
  },
  space: {
    marginTop: 15,
  },
  viewItemRow: {
    flexDirection: 'row',
    width: '100%',
  },
  viewItemRowII: {
    color: Res.Color.primers,
    fontFamily: 'BYekanBold',
    right: 0,
    position: 'absolute',
    paddingRight: 15,
  },
  viewItemRowIII: {
    flexDirection: 'row',
    width: '100%',
  },
  flatListStyle: {marginRight: 15, marginLeft: 15},
  viewDetail: {
    paddingLeft: 100,
    width: '100%',
    paddingBottom: 10,
  },
  imageCard: {
    width: 120,
    height: '100%',
    marginTop: 5,
    tintColor: '#f8f7f9',
    borderBottomLeftRadius: 20,

    // borderBottomWidth: 7000,
    position: 'absolute',
  },
  cardButton: {
    width: '80%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 30,
  },
  
  viewCardButton: {
    width: '100%',
    height: 50,
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
    width: '100%',
    height: 50,
    alignItems:'center'
  },
  titleRegister: {
    width: '100%',
    textAlign: 'right',
    fontFamily: 'BYekanBold',
    fontSize: 22,

    color: '#ffff',
  },
  buttonLogin:{
    borderRadius: 30,
    marginTop:18,
    width: '100%',
    height: 50,
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
  },
  textButtonLogin:{
    width: '100%',
    height: '100%',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 25,
    color: Res.Color.primers,
    fontFamily: 'BYekanBold',
  }
});
