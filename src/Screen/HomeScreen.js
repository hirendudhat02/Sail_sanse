// import {
//   Image,
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import React from 'react';
// import HomeHeader from '../components/HomeHeader';
// import RecentworkCart from '../components/RecentworkCart';
// import {useNavigation} from '@react-navigation/native';

// const HomeMain = require('../assets/Image/HomeMain.png');
// const Car = require('../assets/Image/Car1.png');

// const HomeScreen = () => {
//   const navigation = useNavigation();

//   return (
//     <SafeAreaView style={styles.Container}>
//       <View style={styles.SubContainer}>
//         <HomeHeader />
//         <Image source={HomeMain} style={styles.MainImage} />
//         <TouchableOpacity
//           style={styles.Button}
//           onPress={() => navigation.navigate('CreateWork')}>
//           <Text style={styles.Buttontext}>Create Work Item</Text>
//         </TouchableOpacity>

//         <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
//           <Text style={{fontSize: 18, color: 'black'}}>Recent work</Text>
//           <Text style={{fontSize: 12, color: 'black'}}>See all</Text>
//         </View>

//         <RecentworkCart
//           carImage={Car}
//           licensePlate={'Ka 05 Kc 7965'}
//           contact={'9310520930'}
//           name={'Adarshan Nayak V'}
//         />
//       </View>
//     </SafeAreaView>
//   );
// };

// export default HomeScreen;

// const styles = StyleSheet.create({
//   Container: {
//     flex: 1,
//     backgroundColor: 'white',
//   },
//   SubContainer: {
//     marginHorizontal: 15,
//   },
//   MainImage: {
//     height: 185,
//     width: '100%',
//     borderRadius: 10,
//     marginTop: 20,
//   },
//   Button: {
//     backgroundColor: '#FF5C00',
//     // paddingHorizontal: 15,
//     paddingVertical: 10,
//     borderRadius: 6,
//     width: 111,
//     alignSelf: 'flex-end',
//     marginVertical: 15,
//   },
//   Buttontext: {
//     fontFamily: 'Poppins-Regular',
//     fontSize: 10,
//     color: '#FFFFFF',
//     textAlign: 'center',
//     // fontWeight:500
//   },
// });

import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import HomeHeader from '../components/HomeHeader';
import RecentworkCart from '../components/RecentworkCart';
import {useNavigation} from '@react-navigation/native';

const HomeMain = require('../assets/Image/HomeMain.png');
const Car1 = require('../assets/Image/Car1.png');
const Car2 = require('../assets/Image/Car2.png');
const Car3 = require('../assets/Image/Car3.png');
const Car4 = require('../assets/Image/Car4.png');

const HomeScreen = () => {
  const navigation = useNavigation();

  const recentWorks = [
    {
      id: '1',
      carImage: Car1,
      name: 'Adarshan Nayak V',
      licensePlate: 'Ka 05 Kc 7965',
      contact: '9310520930',
    },
    {
      id: '2',
      carImage: Car2,
      name: 'James Nayak V',
      licensePlate: 'Ka 08 Ab 1234',
      contact: '9876543210',
    },
    {
      id: '3',
      carImage: Car3,
      name: 'Noah Nayak V',
      licensePlate: 'Ka 03 Cd 5678',
      contact: '1234567890',
    },
    {
      id: '4',
      carImage: Car4,
      name: 'Henry Nayak V',
      licensePlate: 'Ka 05 Kc 7965',
      contact: '9310520930',
    },
    {
      id: '5',
      carImage: Car1,
      name: 'John Doe',
      licensePlate: 'Ka 08 Ab 1234',
      contact: '9876543210',
    },
    {
      id: '6',
      carImage: Car2,
      name: 'Jane Smith',
      licensePlate: 'Ka 03 Cd 5678',
      contact: '1234567890',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader />
      <ScrollView>
        <View style={styles.subContainer}>
          <Image source={HomeMain} style={styles.mainImage} />
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('CreateWork')}>
            <Text style={styles.buttonText}>Create Work Item</Text>
          </TouchableOpacity>

          <View style={styles.recentWorkHeader}>
            <Text style={styles.recentWorkTitle}>Recent work</Text>
            <Text style={styles.seeAllText}>See all</Text>
          </View>

          <FlatList
            data={recentWorks}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <RecentworkCart
                carImage={item.carImage}
                name={item.name}
                licensePlate={item.licensePlate}
                contact={item.contact}
              />
            )}
            showsVerticalScrollIndicator={true}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  subContainer: {
    marginHorizontal: 15,
  },
  mainImage: {
    height: 185,
    width: '100%',
    borderRadius: 10,
    marginTop: 10,
  },
  button: {
    backgroundColor: '#FF5C00',
    paddingVertical: 8,
    borderRadius: 6,
    alignSelf: 'flex-end',
    marginVertical: 15,
    paddingHorizontal: 15,
  },
  buttonText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  recentWorkHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginBottom: 10,
  },
  recentWorkTitle: {
    fontSize: 18,
    color: '#040415',
    fontFamily: 'Poppins-SemiBold',
  },
  seeAllText: {
    fontSize: 12,
    color: '#858585',
    fontFamily: 'Poppins-Regular',
  },
});
