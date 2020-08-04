/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {Card, TouchableRipple} from 'react-native-paper';

import style from './Style/style';
import Icon from 'react-native-vector-icons/FontAwesome';

class NotifyScreen extends React.Component {
  ratingCompleted(rating) {
    console.log('Rating is: ' + rating);
  }
  _hideModalNotify = () => {
    this.props.changeState(false);
  };
  render() {
    let {detail, viewForm, cardBottom, closeButton} = style;
    return (
      <View style={{width: '100%', height: '100%'}}>
        <Card style={viewForm}>
        
          <View>
            <Text allowFontScaling={false} style={detail}>موضوع نوتیفیکیشن :</Text>
            <View style={cardBottom} />
          </View>
          <TouchableRipple
            activeOpacity={10}
            style={{
              width: 30,
              height: 30,
              position:'absolute'
              
            }}
            onPress={this._hideModalNotify}>
            <View style={[closeButton,{ position:'absolute'}]}>
              <Icon name="remove" size={12} color="#000" />
            </View>
          </TouchableRipple>
        </Card>
      </View>
    );
  }
  static propsType = {
    changeState: PropTypes.func,
  };
}

export default NotifyScreen;
