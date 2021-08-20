
import 'react-native-gesture-handler';
import React from 'react';
import { Image } from 'react-native';

export default function LogoTitle() {
  return (
    <Image
      style={{ width: 170, height: 50 }}
      source={require('../src/ruspool.png')}
    />
  );
}








/*
const tintColor = '#fdfebf';
const backgroundColor = '#2b2826';
const buttonDark = '#464646';

export default {
  tint: tintColor,
  background: backgroundColor,
  button: buttonDark,
  dark: "#002222",
};
*/
