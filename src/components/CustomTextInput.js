import React from 'react';
import {TextInput, View, StyleSheet, Text} from 'react-native';
import {useTheme} from '@react-navigation/native';

const CustomTextInput = ({placeholder, title}) => {
  // const colors = useTheme().colors;
  // const styles = makeStyles(colors);

  return (
    <View style={[styles.container]}>
      <Text style={styles.TitalText}>{title}</Text>
      <TextInput style={[styles.input]} placeholder={placeholder} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 5,
  },
  input: {
    height: 40,
    borderColor: '#DEDEDE',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    // marginVertical:5,
    fontSize: 16,
    marginVertical:5
  },
  TitalText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#4D4D4D',
  },
});

export default CustomTextInput;
