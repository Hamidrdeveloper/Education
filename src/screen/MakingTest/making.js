import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import {Card} from 'react-native-paper';
import Carousel, {getInputRangeFromIndexes} from 'react-native-snap-carousel';
import background from '../../../assets/images/abstract.png';

import backgroundC from '../../../assets/images/abstract2.png';
import back from '../../../assets/images/back.png';

import style from './Style/style';
import ItemTest from './ItemTest';
let screenWidth = Dimensions.get('window').width;
class Making extends React.Component {
  static navigationOptions = ({navigation}) => {
    const {params} = navigation.state;

    return {
      tabBarVisible: false,
    };
  };
  componentDidMount(){
    this.props.navigation.setParams({tabBarVisible: false});

  }

  renderGridItem() {
    let {
      textTitle,
      date,
      viewCircle,
      viewCircleII,
      circleTitle,
      detail,
      buttonItem,
      textButton,
    } = style;
    return (
      <TouchableRipple activeOpacity={1}>
        <Card
          style={{
            width: (screenWidth + 50) / 2,
            flexWrap: 'wrap',
            borderRadius: 15,
            paddingBottom: 30,
          }}>
          <Text style={textTitle}>{'فارسی نهم'}</Text>
          <Text style={date}>{'1398/08/23'}</Text>
          <View style={viewCircle}>
            <View style={viewCircleII}>
              <Text style={circleTitle}>{'نیم سال'}</Text>
            </View>
            <View style={viewCircleII}>
              <Text style={circleTitle}>{'نیم سال'}</Text>
            </View>
            <View style={viewCircleII}>
              <Text style={circleTitle}>{'نیم سال'}</Text>
            </View>
          </View>
          <Text style={detail}>
            {
              'سلام،در واژه نامه ی کتاب معنی سریر رو به صورت «تخت پادشاهی» نوشته،اگر تخت تنها هم بیاد درسته؟'
            }
          </Text>

          <View style={buttonItem}>
            <Text style={textButton}>{'برسی سوال'}</Text>
          </View>
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
      viewButton,
      viewFullButton,
      textInputItem,
      textButton
    } = style;
    return (
      <View style={viewFull}>
        <ImageBackground source={background} style={viewFull}>
          <Image
            style={imageBottom}
            resizeMode="stretch"
            source={backgroundC}
          />
          <View style={viewHeder}>
            <Image source={back} style={buttonBack} />

            <Text style={textHeder}>آزمون ساز</Text>
          </View>
          <View style={space} />
          <ItemTest />
          <ItemTest />
          <ItemTest />
          <ItemTest />
          <ItemTest />
          <ItemTest />
          <ItemTest />
          <View style={viewFullButton}>
            <Card style={viewButton}>
              <Text style={textButton}>دریافت سوالات</Text>
            </Card>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default Making;
