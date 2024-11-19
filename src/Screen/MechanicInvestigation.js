import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomHeader from '../components/CustemHeader';
import MechanicInvestigationCart from '../components/MechanicInvestigationCart';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../components/CustomButton';

const GairboxIssue = require('../assets/Image/GairboxIssue.png');
const AcIssue = require('../assets/Image/acIssue.png');

const MechanicInvestigation = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      {/* Custom Header */}
      <CustomHeader
        title="Mechanic Investigation"
        onBackPress={() => navigation.goBack()}
      />
 <ScrollView>
      {/* Welcome Section */}
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeTextSmall}>Welcome User</Text>
        <Text style={styles.welcomeTextLarge}>Pohanka Of Salisbury</Text>
      </View>

      {/* Add Issue Section */}
      <View style={styles.addIssueContainer}>
        <Text style={styles.addIssueText}>Add Issue</Text>
        <Text style={styles.addOtherIssueText}>Add Other Issue</Text>
      </View>

      <MechanicInvestigationCart
        placeholder={'Ac Filter Issue     '}
        placeholderTextColor={'#000000'}
        source={GairboxIssue}
      />

      <MechanicInvestigationCart
       placeholder={'Please Enter Gairbox Issue'}
        // placeholderTextColor={'#000000'}
        source={AcIssue}
        mainstyle={styles.mainstyle}
      />
       </ScrollView>
      <View style={styles.buttonContainer}>
        <CustomButton
          title={'Submit'}
          ButtonStyle={styles.ButtonStyle}
          onPress={() => navigation.navigate('Submission')}
        />
      </View>
    </SafeAreaView>
  );
};

export default MechanicInvestigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  welcomeContainer: {
    backgroundColor: '#FFE8DA',
    paddingVertical: 2,
    paddingHorizontal: 15,
    marginTop:2
  },
  welcomeTextSmall: {
    fontSize: 11,
    color: '#3D3D3D',
    fontFamily: 'Poppins-Medium',
  },
  welcomeTextLarge: {
    fontSize: 14,
    color: '#3D3D3D',
    fontFamily: 'Poppins-SemiBold',
  },
  addIssueContainer: {
    marginHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
  addIssueText: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: '#3D3D3D',
  },
  addOtherIssueText: {
    backgroundColor: '#FFE8DA',
    borderRadius: 4,
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 10,
    fontFamily: 'Poppins-SemiBold',
    color: '#000000',
  },
  mainstyle: {
    marginTop: 35,
  },
  ButtonStyle: {
    // marginHorizontal: 15,
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
