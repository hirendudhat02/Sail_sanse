// import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import React from 'react';

// const Back = require('../assets/Image/Back.png');
// const Bell = require('../assets/Image/bell-dot.png');

// const CustemHeader = () => {
//   return (
//     <View style={styles.container}>
//       <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
//         <TouchableOpacity style={{alignSelf: 'center'}}>
//           <Image source={Back} style={styles.BackImage} />
//         </TouchableOpacity>

//         <Text style={styles.text}>Create Work</Text>
//       </View>
//       <Image source={Bell} style={styles.bellImage} />
//     </View>
//   );
// };

// export default CustemHeader;

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   bellImage: {
//     height: 24,
//     width: 24,
//     alignSelf: 'center',
//   },
//   BackImage: {
//     height: 20,
//     width: 12,
//     alignSelf: 'center',
//   },
//   text: {
//     fontFamily: 'Poppins-Regular',
//     fontSize: 18,
//     color: 'black',
//     marginLeft: 15,
//   },
// });

import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Back = require('../assets/Image/Back.png');
const Bell = require('../assets/Image/bell-dot.png');

const CustomHeader = ({title = '', showBell = true, onBackPress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
          <Image source={Back} style={styles.backImage} />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
      </View>
      {showBell && <Image source={Bell} style={styles.bellImage} />}
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    paddingVertical: 10,
    paddingHorizontal:15
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    padding: 5,
  },
  backImage: {
    height: 20,
    width: 12,
  },
  title: {
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    color: 'black',
    marginLeft: 10,
  },
  bellImage: {
    height: 24,
    width: 24,
  },
});
