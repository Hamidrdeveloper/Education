// import Alertfunction from ‘./CustomAlert’;
// import React, {Component,PropTypes } from 'react';
// import{View,StyleSheet,YellowBox,TouchableOpacity,ToastAndroid,Text,Platform ,StatusBar,Dimensions,BackHandler,FlatList,ScrollView,TextInput,UIManager,findNodeHandle} from 'react-native';
// const Screenwidth = Dimensions.get("window").width;
// const Screenheight = Dimensions.get("window").height;
// class App extends Component {
//     constructor(props){
//         super(props);
// this.state={AlertBox:[{alertVisiblity : false
//     ,Title:"Default Name",
//     Body:"Default Body",
// btnCancelEvent:null,
// btnOnDismissEvent:null,
// btnOkEvent:this.OkClick,
// headerClass:Screenwidth > Screenheight ?styles.landscapAlertheaderClass:styles.AlertheaderClass,
// bodyClass:Screenwidth > Screenheight ?styles.LandscapAlertbodyClass:styles.AlertbodyClass,btnClass:styles.AlertbtnClass,
// }],}}

// render() {
// return (
// <View>

// <Alertfunction 
// Title={this.state.AlertBox.Title} 
// Body={this.state.AlertBox.Body} 
// Visible = {this.state.AlertBox.alertVisiblity} 
// OkButtonAction = {this.state.AlertBox.btnOkEvent} 
// CancelButtonAction = {this.state.AlertBox.btnCancelEvent} 
// headerClass={this.state.AlertBox.headerClass}
// bodyClass={this.state.AlertBox.bodyClass}
// btnClass={this.state.AlertBox.btnClass} 
// onDismissAction={this.state.AlertBox.btnOnDismissEvent}/>
// </View>
// )}
// }
// const styles= StyleSheet.create({
//     container:{flex:1,},
//     TextContainer:{alignItems:"flex-start",paddingTop:10,color:"rgb(0,142,234)",paddingLeft:10,}
//     ,container1:{margin: 8,marginTop: 24,}
//     ,SuccessAlertheaderClass:{paddingTop:10,fontSize:parseInt(ResponsiveFontSize(18)),height:parseInt(ResponsiveFontSize(12)),backgroundColor:"#90ee90",}
//     ,SuccesslandscapAlertheaderClass:{paddingTop:10,fontSize:parseInt(ResponsiveFontSize(18)),height:parseInt(ResponsiveFontSize(22)),backgroundColor:"#90ee90",}
//     ,AlertheaderClass:{paddingTop:10,fontSize:parseInt(ResponsiveFontSize(18)),height:parseInt(ResponsiveFontSize(12)),backgroundColor:"red",}
//     ,landscapAlertheaderClass:{fontSize:parseInt(ResponsiveFontSize(18)),height:parseInt(ResponsiveFontSize(22)),backgroundColor:"red",}
//     ,AlertbodyClass:{fontSize:parseInt(ResponsiveFontSize(14)),paddingTop:parseInt(ResponsiveFontSize(18))}
//     ,LandscapAlertbodyClass:{fontSize:parseInt(ResponsiveFontSize(10)),paddingTop:parseInt(ResponsiveFontSize(18))}
//     ,AlertbtnClass:{fontSize:parseInt(ResponsiveFontSize(14)),}
//     ,FPA_AlertheaderClass:{paddingTop:10,fontSize:parseInt(ResponsiveFontSize(18)),height:parseInt(ResponsiveFontSize(12)),backgroundColor:"#90ee90",}
//     ,FPA_landscapAlertheaderClass:{paddingTop:10,fontSize:parseInt(ResponsiveFontSize(18)),height:parseInt(ResponsiveFontSize(22)),backgroundColor:"#90ee90",}
//     ,WarnAlertheaderClass:{paddingTop:10,fontSize:parseInt(ResponsiveFontSize(18)),height:parseInt(ResponsiveFontSize(12)),backgroundColor:"#FFCC00",}
//     ,WarnlandscapAlertheaderClass:{paddingTop:10,fontSize:parseInt(ResponsiveFontSize(18)),height:parseInt(ResponsiveFontSize(22)),backgroundColor:"#FFCC00",},
// });
// export default App;