import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import CustomHeader from '../components/CustemHeader';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../components/CustomButton';

const CameraIcon = require('../assets/Image/Cemera2.png');

const CustomerResponse = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      {/* Custom Header */}
      <CustomHeader
        title="Customer Response"
        onBackPress={() => navigation.goBack()}
      />
      <ScrollView>
        {/* Owner Details */}
        <View style={styles.detailsContainer}>
          {[
            {label: 'Owner Plate No.', value: 'AB4* 195'},
            {label: 'Owner Name', value: 'Mithun Sharma'},
            {label: 'Owner Mobile No.', value: '9310520930'},
            {label: 'Owner Vehicle No.', value: '593938558933044'},
          ].map((item, index) => (
            <View key={index} style={styles.detailItem}>
              <Text style={styles.detailLabel}>{item.label}</Text>
              <Text style={styles.detailValue}>{item.value}</Text>
            </View>
          ))}
        </View>

        {/* Responses */}
        {[
          {
            title: 'Respond 1*',
            placeholder:
              'Yes, You are right. The left side rear door has one scratch. Please proceed with further investigations.',
          },
          {
            title: 'Respond 2*',
            placeholder:
              'I see now the AC filter is dirty and I would like to change the filter but the price is little high. Can you give me a better price?',
          },
        ].map((response, index) => (
          <View key={index} style={styles.responseContainer}>
            <Text style={styles.responseTitle}>{response.title}</Text>
            <TextInput
              style={[styles.textInput, styles.readOnlyInput]}
              placeholder={response.placeholder}
              placeholderTextColor="#000000"
              editable={false}
              multiline={true}
            />
            <View style={styles.replyContainer}>
              <TextInput
                style={styles.replyInput}
                placeholder="Reply..."
                placeholderTextColor="#DEDEDE"
                multiline={true}
              />
              <Image source={CameraIcon} style={styles.cameraIcon} />
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.buttonContainer}>
        <CustomButton
          title={'Submit'}
          ButtonStyle={styles.ButtonStyle}
          onPress={() => navigation.navigate('InventoryInvoice')}
        />
      </View>
    </SafeAreaView>
  );
};

export default CustomerResponse;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  detailsContainer: {
    marginHorizontal: 15,
    marginVertical: 10,
  },
  detailItem: {
    marginVertical: 5,
  },
  detailLabel: {
    fontSize: 9,
    color: '#959595CC',
    fontFamily: 'Poppins-Medium',
  },
  detailValue: {
    fontSize: 11,
    color: '#000000',
    fontFamily: 'Poppins-Medium',
  },
  responseContainer: {
    marginHorizontal: 15,
    marginVertical: 15,
  },
  responseTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 11,
    color: '#000000',
    marginBottom: 5,
  },
  textInput: {
    backgroundColor: '#FFE8DA',
    borderRadius: 4,
    padding: 10,
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#000000',
    textAlignVertical: 'top',
  },
  readOnlyInput: {
    marginBottom: 10,
    minHeight: 100,
  },
  replyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DEDEDE',
    borderRadius: 4,
    marginTop: 10,
  },
  replyInput: {
    flex: 1,
    padding: 10,
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#000000',
    height: 40,
    textAlignVertical: 'center',
  },
  cameraIcon: {
    height: 20.53,
    width: 20.53,
    marginHorizontal: 10,
  },
  ButtonStyle: {
    width: '100%',
    backgroundColor: '#FF5C00',
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 15,
    right: 15,
  },
});
