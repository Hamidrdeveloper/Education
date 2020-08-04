import React from 'react';
import Home from './containers/Home';
import Making from './screen/MakingTest/making';
import Fixed from './containers/Fixe';
import {Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import im_exam from '../assets/images/test.png';
import passed from '../assets/images/passed.png';
import house from '../assets/images/house.png';
import werite from '../assets/images/werite.png';
import {
  createStackNavigator,
  StackViewTransitionConfigs,
} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import RegisterScreen from './screen/Register/RegisterScreen';
import PerformanceScreen from './screen/PerformanceTech/PerformanceScreen';
import PopUp from './screen/Home/popUp';
import FullScreenImage from './components/FullScreenImage';
import Page from './components/recorderPlayer';
import FullScreenText from './components/textFull';
import Res from './Color/color';

const ProfileStack = createStackNavigator(
  {
    //Defination of Navigaton from home screen

    HomeStack: {screen: Home},
  },
  {
    headerMode: 'none',
    initialRouteName: 'HomeStack',
    initialRouteParams: {transition: 'fade'},
    transitionConfig: () => StackViewTransitionConfigs.ModalSlideFromBottomIOS,
    navigationOptions: {
      headerVisible: false,
      mode: 'modal',
      headerMode: null,
      headerLeft: null,
      headerShown: false,
    },
  },
);
const ExmStack = createStackNavigator(
  {
    //Defination of Navigaton from home screen

    CreatExm: {screen: Making},
  },
  {
    headerMode: 'none',
    initialRouteName: 'CreatExm',
    initialRouteParams: {transition: 'fade'},
    transitionConfig: () => StackViewTransitionConfigs.ModalSlideFromBottomIOS,
    navigationOptions: {
      headerVisible: false,
      mode: 'modal',
      headerMode: null,
      headerLeft: null,
      headerShown: false,
    },
  },
);
const TestStack = createStackNavigator(
  {
    //Defination of Navigaton from home screen

    Fixed: {screen: Fixed},
  },
  {
    headerMode: 'none',
    initialRouteName: 'Fixed',
    initialRouteParams: {transition: 'fade'},
    transitionConfig: () => StackViewTransitionConfigs.ModalSlideFromBottomIOS,
    navigationOptions: {
      headerVisible: false,
      mode: 'modal',
      headerMode: null,
      headerLeft: null,
      headerShown: false,
    },
  },
);


// const bottomTab = createBottomTabNavigator(
//   {
//     CreatExm: {
//       screen: ExmStack,
//       navigationOptions: {
//         tabBarLabel: 'آزمون سازی',
//         tabBarIcon: ({tintColor}) => (
//           <Image
//             source={passed}
//             style={{width: 20, height: 20, color: tintColor}}
//             tintColor={tintColor}
//           />
//         ),
//       },
//     },
//     HoDebugging: {
//       screen: Making,
//       navigationOptions: {
//         tabBarLabel: 'محصول ساز',
//         tabBarIcon: ({tintColor}) => (
//           <Image
//             source={werite}
//             style={{width: 20, height: 20, color: tintColor}}
//             tintColor={tintColor}
//           />
//         ),
//       },
//     },
//     CreatProduct: {
//       screen: TestStack,
//       navigationOptions: {
//         tabBarLabel: 'رفع اشکال',
//         tabBarIcon: ({tintColor}) => (
//           <Image
//             source={im_exam}
//             style={{width: 20, height: 20, color: tintColor}}
//             tintColor={tintColor}
//           />
//         ),
//       },
//     },
//     Home: {
//       screen: ProfileStack,
//       navigationOptions: {
//         tabBarLabel: 'خانه',
//         tabBarIcon: ({tintColor}) => (
//           <Image
//             source={house}
//             style={{width: 20, height: 20, color: tintColor}}
//             tintColor={tintColor}
//           />
//         ),
//       },
//     },
//   },
//   {
//     initialRouteName: 'Home',
//     mode: 'modal',
//     headerMode: null,
//     headerLeft: null,
//     headerShown: false,
//     tabBarOptions: {
//       activeTintColor: Res.Color.primersButton,
//       labelStyle: {
//         fontSize: 12,
//       },
//       style: {
//         backgroundColor: Res.Color.tab,
//       },
//     }
//   },
// );

const homeStack = createStackNavigator(
  {
    CreatProduct: {screen: TestStack},
    Register: {screen: RegisterScreen},
    Register2: {screen: RegisterScreen},
    Home: {screen: Home},
    CaptureModal: {
      screen: PopUp,
      navigationOptions: {
        gesturesEnabled: false,
      },
    },
    // Modal: {
    //   screen: bottomTab,
    // },
    Performance: {
      screen: PerformanceScreen,
    },
  },
  {
    initialRouteName: 'Register',

    mode: 'modal',
    headerMode: null,
    headerLeft: null,
    headerShown: false,
  },
);
TestStack.navigationOptions = ({navigation}) => {
  const {state} = navigation;
  const routes = state.routes[state.index];

  /**
   * verify the current state of tabBarVisible from navigation params
   * if isn't avaliable, will set default as true
   */
  const tabBarVisible = state.routes[state.index].params
    ? state.routes[state.index].params.tabBarVisible
    : true;

  return {
    tabBarVisible,
  };
};
ExmStack.navigationOptions = ({navigation}) => {
  const {state} = navigation;
  const routes = state.routes[state.index];

  /**
   * verify the current state of tabBarVisible from navigation params
   * if isn't avaliable, will set default as true
   */
  const tabBarVisible = state.routes[state.index].params
    ? state.routes[state.index].params.tabBarVisible
    : true;

  return {
    tabBarVisible,
  };
};
ProfileStack.navigationOptions = ({navigation}) => {
  const {state} = navigation;
  const routes = state.routes[state.index];

  /**
   * verify the current state of tabBarVisible from navigation params
   * if isn't avaliable, will set default as true
   */
  const tabBarVisible = state.routes[state.index].params
    ? state.routes[state.index].params.tabBarVisible
    : true;

  return {
    tabBarVisible,
  };
};

const AppContainer = createAppContainer(homeStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
