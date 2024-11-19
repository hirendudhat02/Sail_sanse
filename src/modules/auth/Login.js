import {
  Image,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import PhoneInput from 'react-native-phone-input';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const BackImage = require('../../assets/Image/Back.png');
const BottomImage = require('../../assets/Image/Vector.png');
const WomanCar = require('../../assets/Image/woman-car.png');
const Car = require('../../assets/Image/Car.png');

const Login = () => {
  const navigation = useNavigation();
  const phoneInputRef = useRef(null);
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleRequestCode = () => {
    if (phoneNumber.length === 10) {
      console.log('Phone Number:', phoneNumber);
      navigation.navigate('OTPVerification');
    } else {
      ToastAndroid.show(
        'Please enter a valid phone number.',
        ToastAndroid.SHORT,
      );
    }
  };

  return (
    <SafeAreaView style={styles.Container}>
       <StatusBar barStyle={'dark-content'} backgroundColor={'white'}/>
      <KeyboardAwareScrollView contentContainerStyle={{flexGrow: 1}}>
        <StatusBar barStyle="dark-content" />

        <View style={styles.SubContainer}>
          <TouchableOpacity>
            <Image source={BackImage} style={styles.BackImage} />
          </TouchableOpacity>

          <Text style={styles.LoginText}>Login</Text>
          <Text style={styles.DetailslText}>
            Welcome to Sail Sense. By entering a valid phone number, you can
            easily log in.
          </Text>
          <Text style={styles.TextInputTitle}>Please Enter your Mobile</Text>

          {/* Phone Input */}
          <PhoneInput
            ref={ref => {
              this.phone = ref;
            }}
            autoFormat={true}
            onPressFlag={this.onPressFlag}
            initialCountry={'in'}
            textProps={{
              placeholder: 'Enter phone number...',
            }}
            style={styles.PhoneInput}
          />

          <CustomButton
            title={'Request Code'}
            onPress={() => navigation.navigate('OTPVerification')}
            // onPress={handleRequestCode}
            ButtonStyle={styles.ButtonStyle}
            Buttontext={styles.Buttontext}
          />
        </View>

        {/* Bottom Image Container */}
        <View style={styles.bottomImageContainer}>
          <ImageBackground source={BottomImage} style={styles.BottomImage}>
            <ImageBackground
              source={Car}
              style={styles.CarImage}
              imageStyle={{height: 350, width: 300, top: 50, left: 65}}>
              <Image source={WomanCar} style={styles.WomanCar} />
            </ImageBackground>
          </ImageBackground>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'white',
  },
  SubContainer: {
    paddingHorizontal: 20,
    paddingTop: 5,
    flex: 2,
  },
  LoginText: {
    fontFamily: 'Poppins-Bold',
    color: 'black',
    fontSize: 20,
    // marginBottom: 10,
  },
  DetailslText: {
    fontFamily: 'Poppins-Regular',
    color: 'black',
    fontSize: 14,
    marginVertical: 30,
    lineHeight: 20,
  },
  TextInputTitle: {
    fontFamily: 'Poppins-Medium',
    color: 'black',
    fontSize: 14,
    marginBottom: 5,
  },
  BackImage: {
    width: 12,
    height: 20,
    marginBottom: 20,
  },
  PhoneInput: {
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#DBDBDB',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    color: 'black',
  },
  BottomImage: {
    width: '100%',
    height: 400,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  bottomImageContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    // backgroundColor:"green"
  },
  CarImage: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    height: 350,
    resizeMode: 'contain',
  },
  WomanCar: {
    left: 5,
    top: 5,
    height: 300,
    width: '40%',
    resizeMode: 'contain',
  },
  Buttontext:{  fontSize:16  },
  ButtonStyle:{marginTop:5}
});
