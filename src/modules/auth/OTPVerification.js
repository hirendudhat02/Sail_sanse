import {
  Image,
  ImageBackground,
  Keyboard,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {OtpInput} from 'react-native-otp-entry';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const BackImage = require('../../assets/Image/Back.png');
const BottomImage = require('../../assets/Image/Bottom.png');
const CheckCar = require('../../assets/Image/uniform-checks-car.png');

const OTPVerification = () => {
  const navigation = useNavigation();

  // Handler to submit OTP and close the keyboard automatically
  const handleOTPComplete = otp => {
    console.log(`OTP is ${otp}`);
    Keyboard.dismiss();
  };

  return (
    <SafeAreaView style={styles.Container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'}/>
      <KeyboardAwareScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.SubContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={BackImage} style={styles.BackImage} />
          </TouchableOpacity>

          <Text style={styles.OTPText}> OTP Verification </Text>
          <Text style={styles.DetailslText}>
            Enter the code from the SMS we sent to +9310520930
          </Text>
          <Text style={styles.TextInputTitle}>Please Enter your OTP</Text>

          <OtpInput
            numberOfDigits={5}
            focusColor={'#FF5C00'}
            focusStickBlinkingDuration={500}
            // onTextChange={text => console.log(text)}
            onFilled={handleOTPComplete}
            textInputProps={{
              accessibilityLabel: 'One-Time Password',
            }}
            theme={{
              containerStyle: styles.containerStyle,
              pinCodeContainerStyle: styles.pinCodeContainerStyle,
              pinCodeTextStyle: styles.pinCodeText,
              focusStickStyle: styles.focusStick,
              focusedPinCodeContainerStyle: styles.activePinCodeContainer,
            }}
          />

          <CustomButton
            title={'Submit'}
            onPress={() => navigation.navigate('HomeScreen')}
            ButtonStyle={styles.ButtonStyle}
          />
        </View>

        {/* Bottom Image */}
        <View style={styles.bottomImageContainer}>
          <Image
            source={BottomImage}
            style={styles.BottomImage}
            resizeMode="stretch"
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default OTPVerification;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'white',
  },
  SubContainer: {paddingHorizontal: 15},
  OTPText: {
    fontFamily: 'Poppins-Bold',
    color: 'black',
    fontSize: 20,
    marginTop: 20,
  },
  DetailslText: {
    fontFamily: 'Poppins-Regular',
    color: 'black',
    fontSize: 14,
    width: '70%',
    marginVertical: 20,
  },
  TextInputTitle: {
    fontFamily: 'Poppins-Medium',
    color: 'black',
    fontSize: 14,
    // marginTop: 20,
  },
  BackImage: {
    width: 12,
    height: 20,
    marginTop: 20,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  otpInput: {
    width: 50,
    height: 50,
    textAlign: 'center',
    fontSize: 24,
    borderWidth: 1,
    borderColor: '#DBDBDB',
    borderRadius: 8,
    marginHorizontal: 5,
    marginVertical: 15,
  },
  BottomImage: {
    height: 300,
    width: '100%',
    resizeMode: 'contain',
    top: 30,
  },
  bottomImageContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    // backgroundColor:"green"
  },
  containerStyle: {
    marginVertical: 5,
  },
  pinCodeContainerStyle: {
    borderRadius: 5,
    height: 45,
    width: 45,
    borderWidth: 1.5,
  },
  ButtonStyle:{marginTop:15}
});
