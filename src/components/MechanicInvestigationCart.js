import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React from 'react';

const Cemera = require('../assets/Image/Cemera2.png');
const Pencil = require('../assets/Image/pencil.png');

const MechanicInvestigationCart = ({
  placeholder,
  placeholderTextColor,
  source,
  mainstyle,
}) => {
  return (
    <View>
      <View style={[styles.InputContainer, mainstyle]}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          style={styles.InputText}
        />
        <View style={{alignSelf: 'center', flexDirection: 'row'}}>
          <TouchableOpacity>
            <Image source={Pencil} style={styles.PencilImage} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image source={Cemera} style={styles.CemeraImage} />
          </TouchableOpacity>
        </View>
      </View>

      <Image source={source} style={styles.Image} />
    </View>
  );
};

export default MechanicInvestigationCart;

const styles = StyleSheet.create({
  InputContainer: {
    borderWidth: 1,
    borderColor: '#DEDEDE',
    borderRadius: 3,
    marginHorizontal: 15,
    marginVertical: 12,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // paddingHorizontal: 5,
  },
  InputText: {
    fontSize: 11,
    fontFamily: 'Poppins-Regular',
    color:"#0A0A0A",
    flex: 1,
    paddingHorizontal: 10
  },
  PencilImage: {
    height: 12,
    width: 12,
    marginTop:4
  },
  CemeraImage: {
    height: 20.53,
    width: 20.53,
    marginHorizontal: 10,
  },
  Image: {
    height: 139,
    width: 330,
    marginHorizontal: 15,
    borderRadius: 8,
  },
 
});
