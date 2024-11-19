import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../utils/Colors';

const ProfileImage = require('../assets/Image/Header_Man.png');
const Bell = require('../assets/Image/bell-dot.png');

const HomeHeader = () => {
  return (
    <View style={styles.Container}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <View style={styles.profileContainer}>
        <Image source={ProfileImage} style={styles.profileImage} />
        <View style={styles.textContainer}>
          <Text style={styles.pohankaText}>Pohanka</Text>
          <Text style={styles.dealershipText}>Dealership</Text>
        </View>
      </View>
      <Image source={Bell} style={styles.bellImage} />
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    backgroundColor:"#F9FAFB",
    paddingVertical:5,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    height: 40,
    width: 40,
    alignSelf: 'center',
  },
  textContainer: {
    marginLeft: 10,
    alignSelf:"center",
  },
  pohankaText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#000',
    
  },
  dealershipText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 9,
    color: '#FF5C00',
  },
  bellImage: {
    height: 24,
    width: 24,
    alignSelf: 'center',
  },
});
