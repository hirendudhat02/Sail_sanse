// import {
//   Image,
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
//   ScrollView,
// } from 'react-native';
// import React from 'react';
// import {useNavigation} from '@react-navigation/native';
// import CustomHeader from '../components/CustemHeader';
// import CustomTextInput from '../components/CustomTextInput';

// const HomeMain = require('../assets/Image/HomeMain.png');

// const CreateWork = () => {
//   const navigation = useNavigation();

//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView style={styles.subContainer}>
//         <CustomHeader
//           title="Create Work"
//           onBackPress={() => navigation.goBack()}
//         />

//         <Image source={HomeMain} style={styles.mainImage} />

//         <Text style={styles.enterText}>Please Enter Number Plate No.</Text>

//         <View style={styles.getDetailsContainer}>
//           <TextInput style={styles.textInput} />

//           <TouchableOpacity style={styles.getDetailsButton}>
//             <Text style={styles.getDetailsText}>Get Details</Text>
//           </TouchableOpacity>
//         </View>

//         <Text style={styles.FetchedText}>Fetched Owner Details</Text>
//         <CustomTextInput tital={'Enter Your Name'} />
//         <CustomTextInput tital={'Enter your Mobile No...'} />
//         <CustomTextInput tital={'Enter your Vehicle No..'} />
//         <CustomTextInput tital={'Url initial'} />
//         <CustomTextInput tital={'Url Mechanic'} />

//         <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
//           <TouchableOpacity style={{borderColor: '#FF5C00', borderRadius: 8, padding:5}}>
//             <Text style={{color: '#242424', textAlign:'center'}}> Initial Investigation</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={{backgroundColor: '#FF5C00', borderRadius: 8}}>
//             <Text style={{color: '#ffffff'}}>Mechanic Investigation</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default CreateWork;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//   },
//   subContainer: {
//     marginHorizontal: 15,
//     marginVertical: 20,
//   },
//   mainImage: {
//     height: 185,
//     width: '100%',
//     borderRadius: 10,
//     marginVertical: 20,
//   },
//   enterText: {
//     fontFamily: 'Poppins-Regular',
//     fontSize: 14,
//     color: 'black',
//     // marginBottom: 10,
//     fontWeight: '500',
//   },
//   getDetailsContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     // marginTop: 10,
//     // backgroundColor:"green"
//   },
//   textInput: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: '#dcdcdc',
//     borderRadius: 6,
//     paddingVertical: 3,
//     paddingHorizontal: 15,
//     fontSize: 14,
//     fontFamily: 'Poppins-Regular',
//     color: '#000',
//     marginRight: 10,
//   },
//   getDetailsButton: {
//     backgroundColor: '#FF5C00',
//     borderRadius: 6,
//     paddingVertical: 8,
//     paddingHorizontal: 15,
//   },
//   getDetailsText: {
//     fontSize: 12,
//     fontFamily: 'Poppins-Regular',
//     color: 'white',
//     textAlign: 'center',
//   },
//   FetchedText: {
//     fontFamily: 'Poppins-Regular',
//     fontSize: 14,
//     color: 'black',
//     marginTop: 20,
//     fontWeight: '500',
//   },
// });

import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CustomHeader from '../components/CustemHeader';
import CustomTextInput from '../components/CustomTextInput';

const HomeMain = require('../assets/Image/HomeMain.png');

const CreateWork = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <CustomHeader
        title="Create Work"
        onBackPress={() => navigation.goBack()}
      />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Main Image */}
        <Image source={HomeMain} style={styles.mainImage} />

        {/* Input for Number Plate */}
        <Text style={styles.enterText}>Please Enter Number Plate No.</Text>
        <View style={styles.getDetailsContainer}>
          <TextInput style={styles.textInput} />
          <TouchableOpacity style={styles.getDetailsButton}>
            <Text style={styles.getDetailsText}>Get Details</Text>
          </TouchableOpacity>
        </View>

        {/* Fetched Details */}
        <Text style={styles.fetchedText}>Fetched Owner Details</Text>
        <CustomTextInput title="Enter Your Name" />
        <CustomTextInput title="Enter Your Mobile No." />
        <CustomTextInput title="Enter Your Vehicle No." />
        <CustomTextInput title="URL Initial" />
        <CustomTextInput title="URL Mechanic" />

        {/* Action Buttons */}
        <View style={styles.actionButtonsContainer}>
          <TouchableOpacity
            style={styles.initialButton}
            onPress={() => navigation.navigate('InitialInvestigation')}>
            <Text style={styles.initialButtonText}>Initial Investigation</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mechanicButton}>
            <Text style={styles.mechanicButtonText}>
              Mechanic Investigation
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateWork;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  contentContainer: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  mainImage: {
    height: 185,
    width: '100%',
    borderRadius: 10,
    marginBottom: 20,
    // marginHorizontal: 15,
  },
  enterText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#333',
    // marginBottom: 10,
  },
  getDetailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    // backgroundColor:"green"
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 10,
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#333',
    marginRight: 10,
  },
  getDetailsButton: {
    backgroundColor: '#FF5C00',
    borderRadius: 8,
    paddingVertical: 10,
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
    // marginBottom: 10,
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  initialButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#FF5C00',
    borderRadius: 8,
    paddingVertical: 12,
    marginRight: 10,
  },
  initialButtonText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,
    color: '#242424',
    textAlign: 'center',
  },
  mechanicButton: {
    flex: 1,
    backgroundColor: '#FF5C00',
    borderRadius: 8,
    paddingVertical: 12,
    marginLeft: 10,
  },
  mechanicButtonText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
