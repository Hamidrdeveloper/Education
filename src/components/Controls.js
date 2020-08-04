import React, {Component} from 'react';

import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { TouchableRipple } from 'react-native-paper';

const Controls = ({
  paused,
  shuffleOn,
  repeatOn,
  onPressPlay,
  onPressPause,
  onBack,
  onForward,
  onPressShuffle,
  onPressRepeat,
  forwardDisabled,
}) => (
  <View style={styles.container}>
    <TouchableRipple activeOpacity={0.0} onPress={onPressShuffle}>
      <Image
        style={{tintColor: '#000'}}
        style={[styles.secondaryControl, shuffleOn ? [] : styles.off]}
        source={require('../../assets/images/ic_shuffle_white.png')}
      />
    </TouchableRipple>
    <View style={{width: 40}} />
    <TouchableRipple onPress={onBack}>
      <Image
        style={{tintColor: '#000'}}
        source={require('../../assets/images/ic_skip_previous_white_36pt.png')}
      />
    </TouchableRipple>
    <View style={{width: 20}} />
    {!paused ? (
      <TouchableRipple onPress={onPressPause}>
        <View style={styles.playButton}>
          <Image
            style={{tintColor: '#000'}}
            source={require('../../assets/images/ic_pause_white_48pt.png')}
          />
        </View>
      </TouchableRipple>
    ) : (
      <TouchableRipple onPress={onPressPlay}>
        <View style={styles.playButton}>
          <Image
            style={{tintColor: '#000'}}
            source={require('../../assets/images/ic_play_arrow_white_48pt.png')}
          />
        </View>
      </TouchableRipple>
    )}
    <View style={{width: 20}} />
    <TouchableRipple onPress={onForward} disabled={forwardDisabled}>
      <Image
        style={{tintColor: '#000',}}
        source={require('../../assets/images/ic_skip_next_white_36pt.png')}
      />
    </TouchableRipple>
    <View style={{width: 40}} />
    <TouchableRipple activeOpacity={0.0} onPress={onPressRepeat}>
      <Image
        style={[styles.secondaryControl, repeatOn ? [] : styles.off]}
        source={require('../../assets/images/ic_repeat_white.png')}
      />
    </TouchableRipple>
  </View>
);

export default Controls;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  playButton: {
    height: 45,
    width: 45,
    tintColor: '#000',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 72 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryControl: {
    height: 18,
    width: 18,
    tintColor: '#000'
  },
  off: {
    opacity: 0.3,
  },
});
