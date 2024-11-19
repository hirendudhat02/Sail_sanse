import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Right = require('../assets/Image/Right.png');

const RecentworkCart = ({carImage, name, licensePlate, contact}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.infoContainer}>
        <Image source={carImage} style={styles.carImage} />
        <View style={styles.textContainer}>
          <Text style={styles.nameText}>{name}</Text>
          <Text style={styles.infoText}>{licensePlate}</Text>
          <Text style={styles.infoText}>{contact}</Text>
        </View>
      </View>
      <Image source={Right} style={styles.rightImage} />
    </TouchableOpacity>
  );
};

export default RecentworkCart;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 7,
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: '#000',
    shadowRadius: 5,
    elevation: 2,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  carImage: {
    height: 66,
    width: 66,
  },
  textContainer: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  nameText: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'Poppins-SemiBold',
  },
  infoText: {
    fontSize: 12,
    color: '#858585',
    fontFamily: 'Poppins-Regular',
  },
  rightImage: {
    height: 20,
    width: 12,
  },
});
