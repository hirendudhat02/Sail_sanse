// import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
// import React from 'react';
// import CustomHeader from '../components/CustemHeader';
// import {useNavigation} from '@react-navigation/native';
// import InvestigationCart from '../components/InvestigationCart';
// import CustomButton from '../components/CustomButton';

// const InitialInvestigation = () => {
//   const navigation = useNavigation();
//   return (
//     <SafeAreaView style={styles.Container}>
//       <CustomHeader
//         title="Initial Investigation"
//         onBackPress={() => navigation.goBack()}
//       />
//       <View style={styles.SubContainer}>
//         <InvestigationCart
//           title={'Car Front view (45 )'}
//           placeholder={'Descriptions'}
//         />
//         <InvestigationCart
//           title={'Car Rear view (45 )'}
//           placeholder={'Descriptions'}
//         />
//         <InvestigationCart
//           title={'Car Driver Right view'}
//           placeholder={'Descriptions'}
//         />
//         <InvestigationCart
//           title={'Car Passanger Left view'}
//           placeholder={'Descriptions'}
//         />
//         <InvestigationCart
//           title={'Car (360 )Video'}
//           placeholder={'Descriptions'}
//         />

//         <CustomButton title={'Process'} MainStyle={styles.Button}/>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default InitialInvestigation;

// const styles = StyleSheet.create({
//   Container: {
//     flex: 1,
//     backgroundColor: '#ffffff',
//   },
//   SubContainer: {
//     paddingHorizontal: 15,
//   },
// });

import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CustomHeader from '../components/CustemHeader';
import CustomButton from '../components/CustomButton';
import InvestigationCart from '../components/InvestigationCart';

const InitialInvestigation = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <CustomHeader
        title="Initial Investigation"
        onBackPress={() => navigation.goBack()}
      />

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <InvestigationCart
          title={'Car Front View (45°)'}
          placeholder={'Descriptions'}
        />
        <InvestigationCart
          title={'Car Rear View (45°)'}
          placeholder={'Descriptions'}
        />
        <InvestigationCart
          title={'Car Driver Right View'}
          placeholder={'Descriptions'}
        />
        <InvestigationCart
          title={'Car Passenger Left View'}
          placeholder={'Descriptions'}
        />
        <InvestigationCart
          title={'Car (360°) Video'}
          placeholder={'Descriptions'}
        />
      </ScrollView>

      {/* Bottom Button */}
      <View style={styles.buttonContainer}>
        <CustomButton
          title="Process"
          MainStyle={styles.button}
          onPress={() => navigation.navigate('MechanicInvestigation')}
        />
      </View>
    </SafeAreaView>
  );
};

export default InitialInvestigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  contentContainer: {
    paddingHorizontal: 15,
    paddingBottom: 80,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 15,
    right: 15,
  },
  button: {
    width: '100%',
    backgroundColor: '#FF5C00',
    paddingVertical: 12,
    borderRadius: 8,
  },
});
