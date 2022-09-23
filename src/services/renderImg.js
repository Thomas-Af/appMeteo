import React from 'react';
import { StyleSheet, Image } from 'react-native';

 const rain = [10, 11, 12, 13, 14, 15, 16, 30, 31, 32, 40, 41, 42, 43, 44, 45, 46, 47, 48, 70, 71, 72, 73, 74, 75, 76, 77, 78, 210, 211, 212];
 const sun = [0];
 const cloud = [1, 2, 3, 4, 5];
 const snow = [20, 21, 22, 30, 31, 32, 60, 61, 62, 63, 64, 65, 66, 67, 68, 220, 221, 222]

function renderImg(weather) {
  if(rain.includes(weather)) {
    return <Image
      source={require('../../assets/icon/wi-rain.png')}
      style={styles.icon}
    />
  } else if(sun.includes(weather)) {
    return <Image
      source={require('../../assets/icon/wi-day-sunny.png')}
      style={styles.icon}
      />
    } else if(cloud.includes(weather)) {
      return <Image
      source={require('../../assets/icon/wi-cloud.png')}
      style={styles.icon}
      />
    } else if(snow.includes(weather)) {
      return <Image
      source={require('../../assets/icon/wi-snow.png')}
      style={styles.icon}
      />
    } else {
      return <Image
    source={require('../../assets/icon/wi-day-cloudy.png')}
    style={styles.icon}
    />
  }
};

const styles = StyleSheet.create({
  icon: {
    width: '20%',
    height: '100%',
  }
});

export default renderImg;