import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import CustomHeader from '../components/CustemHeader';
import CustomButton from '../components/CustomButton';

const CopyIcon = require('../assets/Image/copy.png');
const ShareIcon = require('../assets/Image/Shere.png');

const Submission = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      {/* Custom Header */}
      <CustomHeader
        title="After Submission"
        onBackPress={() => navigation.goBack()}
      />

      {/* Input for Number Plate */}
      <Text style={styles.enterText}>Please Enter Number Plate No.</Text>
      <View style={styles.getDetailsContainer}>
        <TextInput style={styles.textInput} placeholder="AB4* 195" />
        <TouchableOpacity style={styles.getDetailsButton}>
          <Text style={styles.getDetailsText}>Get Details</Text>
        </TouchableOpacity>
      </View>

      {/* Fetched Details */}
      <Text style={styles.fetchedText}>Fetched Owner Details</Text>
      <View style={styles.detailsContainer}>
        <DetailItem label="Owner Name" value="Mithun Sharma" />
        <DetailItem label="Owner Mobile No." value="9310520930" />
        <DetailItem label="Owner Vehicle No." value="593938558933044" />
        <DetailItemWithActions
          label="URL Initial"
          value="https://www.Sailsense.com/XXHFJS"
        />
        <DetailItemWithActions
          label="URL Mechanic"
          value="https://www.Sailsense.com/XXHFJS"
        />
      </View>

      {/* Submit Button */}
      <View style={styles.buttonContainer}>
        <CustomButton
          title="Submit"
          MainStyle={styles.MainStyle}
          onPress={() => navigation.navigate('CustomerResponse')}
        />
      </View>
    </SafeAreaView>
  );
};

const DetailItem = ({label, value}) => (
  <View style={styles.detailItem}>
    <Text style={styles.labelText}>{label}</Text>
    <Text style={styles.valueText}>{value}</Text>
  </View>
);

const DetailItemWithActions = ({label, value}) => (
  <View style={styles.detailItem}>
    <Text style={styles.labelText}>{label}</Text>
    <View style={styles.detailRow}>
      <Text style={styles.valueText} numberOfLines={1} ellipsizeMode="tail">
        {value}
      </Text>
      <View style={styles.actionIcons}>
        <TouchableOpacity>
          <Image source={CopyIcon} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={ShareIcon} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

export default Submission;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  enterText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#333',
    marginTop: 10,
    marginHorizontal: 15,
  },
  getDetailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginHorizontal: 15,
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#DEDEDE',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 10,
    fontSize: 11,
    fontFamily: 'Poppins-Regular',
    marginRight: 10,
    height: 35,
    color: '#000000',
  },
  getDetailsButton: {
    backgroundColor: '#FF5C00',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  getDetailsText: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  fetchedText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#333',
    marginHorizontal: 15,
    // marginBottom: 10,
  },
  detailsContainer: {
    marginHorizontal: 15,
  },
  detailItem: {
    marginVertical: 5,
  },
  labelText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 9,
    color: '#959595CC',
  },
  valueText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 11,
    color: '#000000',
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  actionIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    height: 14,
    width: 14,
    marginHorizontal: 5,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 15,
    left: 15,
    right: 15,
  },
  MainStyle: {
    width: '100%',
    backgroundColor: '#FF5C00',
    paddingVertical: 12,
    borderRadius: 8,
  },
});
