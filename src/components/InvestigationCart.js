import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const Cemera = require('../assets/Image/Cemera.png');
const Photo = require('../assets/Image/Photo.png');

const InvestigationCart = ({title, placeholder, onPress}) => {
  return (
    <View>
      <Text style={styles.titleText}>{title}</Text>
      <View style={styles.TextInputContainer}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={'#3D3D3D'}
          style={styles.TextInput}
        />
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <TouchableOpacity>
            <Image source={Photo} style={styles.PhotoImage} />
          </TouchableOpacity>

          <TouchableOpacity onPress={onPress}>
            <Image source={Cemera} style={styles.CemeraImage} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default InvestigationCart;

const styles = StyleSheet.create({
  titleText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#3D3D3D',
    marginVertical: 10,
  },
  TextInputContainer: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#DEDEDE',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  TextInput: {height: 42,flex: 1,},
  PhotoImage: {
    height: 14,
    width: 14,
    tintColor: '#E9E9E9',
  },
  CemeraImage: {
    height: 12.7,
    width: 15.71,
    tintColor: '#E9E9E9',
    marginHorizontal: 10,
  },
});
