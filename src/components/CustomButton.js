import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const CustomButton = ({title, onPress, ButtonStyle,Buttontext}) => {
  return (
    <TouchableOpacity style={[styles.button, ButtonStyle]} onPress={onPress}>
      <Text style={[styles.text, Buttontext]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FF5C00',
    paddingVertical: 10,
    borderRadius: 10,
    // marginHorizontal: 10,
    marginVertical: 5,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
});

export default CustomButton;
