// import {
//   FlatList,
//   Image,
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import React from 'react';
// import CustomHeader from '../components/CustemHeader';
// import {useNavigation} from '@react-navigation/native';
// import SelectDropdown from 'react-native-select-dropdown';
// import CustomButton from '../components/CustomButton';

// const SearchImage = require('../assets/Image/search.png');

// const DroupDownItem = [
//   {title: 'Outer Door Handle'},
//   {title: 'Inner Door Handle'},
//   {title: 'Outer Door Handle1'},
//   {title: 'Inner Door Handle1'},
// ];

// const tableData = [
//   {No: 1, Item: 'Inner Door Handle', Price: '$3.5', QTY: 2, TotalPrice: '$7'},
//   {No: 2, Item: 'Window Motor', Price: '$1.5', QTY: 3, TotalPrice: '$4.5'},
//   {No: 3, Item: 'Sunroof Motor', Price: '$2.5', QTY: 1, TotalPrice: '$2.5'},
//   {No: 4, Item: 'Backup camera', Price: '$6.0', QTY: 2, TotalPrice: '$12'},
//   {No: 5, Item: 'Batery Change', Price: '$4.5', QTY: 2, TotalPrice: '$9.0'},
//   {No: 6, Item: 'Interior Cleanup', Price: '$3.5', QTY: 1, TotalPrice: '$3.5'},
//   {
//     No: 7,
//     Item: 'Inner roof light change',
//     Price: '$6.5',
//     QTY: 3,
//     TotalPrice: '$19.5',
//   },
// ];

// const InventoryInvoice = () => {
//   const navigation = useNavigation();

//   const renderTableHeader = () => (
//     <View style={styles.tableHeader}>
//       <Text style={styles.headerText}>No</Text>
//       <Text style={styles.headerText}>Item</Text>
//       <Text style={styles.headerText}>Price</Text>
//       <Text style={styles.headerText}>QTY</Text>
//       <Text style={styles.headerText}>Total Price</Text>
//     </View>
//   );

//   const renderTableRow = ({item}) => (
//     <View style={styles.tableRow}>
//       <Text style={styles.rowText}>{item.No}</Text>
//       <Text style={styles.rowText}>{item.Item}</Text>
//       <Text style={styles.rowText}>${item.Price}</Text>
//       <Text style={styles.rowText}>{item.QTY}</Text>
//       <Text style={styles.rowText}>${item.TotalPrice}</Text>
//     </View>
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       {/* Custom Header */}
//       <CustomHeader
//         title="Inventory & Invoice"
//         showBell={false}
//         onBackPress={() => navigation.goBack()}
//       />

//       {/* Search Bar */}
//       <View style={styles.searchBar}>
//         <TextInput
//           style={styles.searchInput}
//           placeholder="Search for Part Name/Part Types/Description"
//           placeholderTextColor="#959595CC"
//         />
//         <Image source={SearchImage} style={styles.searchIcon} />
//       </View>

//       {/* Dropdown */}
//       <SelectDropdown
//         data={DroupDownItem}
//         onSelect={(selectedItem, index) => {
//           console.log(selectedItem, index);
//         }}
//         renderButton={(selectedItem, isOpened) => {
//           return (
//             <View style={styles.dropdownButtonStyle}>
//               <Text style={styles.dropdownButtonTxtStyle}>
//                 {(selectedItem && selectedItem.title) || 'Please Select'}
//               </Text>
//             </View>
//           );
//         }}
//         renderItem={(item, index, isSelected) => {
//           return (
//             <View
//               style={{
//                 ...styles.dropdownItemStyle,
//                 ...(isSelected && {backgroundColor: '#D9D9D96E'}),
//               }}>
//               <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
//             </View>
//           );
//         }}
//         showsVerticalScrollIndicator={false}
//         dropdownStyle={styles.dropdownMenuStyle}
//       />

     
//       <View>
//         {/* Table */}
//         <FlatList
//           data={tableData}
//           ListHeaderComponent={renderTableHeader}
//           renderItem={renderTableRow}
//           keyExtractor={item => item.No.toString()}
//           contentContainerStyle={styles.tableContainer}
//         />

//         {/* Coupon Section */}
//         <View style={styles.CouponContainer}>
//           <Text style={styles.CouponHeader}>Promo Code/Coupon</Text>
//           <View style={styles.promoCodeRow}>
//             <View style={styles.promoInputContainer}>
//               <TextInput
//                 style={styles.promoTextInput}
//                 placeholderTextColor={'#000000'}
//                 placeholder="4ii04902ede"
//               />
//               <TouchableOpacity style={styles.removeButton}>
//                 <Text style={styles.removeButtonText}>Remove</Text>
//               </TouchableOpacity>
//             </View>

//             <TouchableOpacity style={styles.applyButton}>
//               <Text style={styles.applyButtonText}>Apply</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>

//       {/* Bottom Button */}
//       <View style={styles.buttonContainer}>
//         <CustomButton
//           title={'Submit'}
//           ButtonStyle={styles.ButtonStyle}
//           onPress={() => navigation.navigate('InventoryInvoice')}
//         />
//       </View>
//     </SafeAreaView>
//   );
// };

// export default InventoryInvoice;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//   },
//   searchBar: {
//     marginHorizontal: 15,
//     backgroundColor: '#D9D9D96E',
//     borderRadius: 5,
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 10,
//     marginTop: 15,
//   },
//   searchInput: {
//     flex: 1,
//     fontSize: 9,
//     fontFamily: 'Poppins-Regular',
//     color: '#000000',
//     height: 40,
//   },
//   searchIcon: {
//     height: 20,
//     width: 20,
//   },
//   dropdownButtonStyle: {
//     marginVertical: 15,
//     marginHorizontal: 15,
//     backgroundColor: '#FFF6F0',
//     borderRadius: 5,
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 12,
//     paddingVertical: 10,
//   },
//   dropdownButtonTxtStyle: {
//     fontSize: 9,
//     color: '#0F0F0F',
//   },
//   dropdownMenuStyle: {borderRadius: 5},
//   dropdownItemStyle: {
//     flexDirection: 'row',
//     paddingHorizontal: 12,
//     paddingVertical: 5,
//   },
//   dropdownItemTxtStyle: {
//     fontSize: 10,
//     fontFamily: 'Poppins-Medium',
//     color: '#0F0F0F',
//   },
//   tableContainer: {marginHorizontal: 15},
//   tableHeader: {
//     flexDirection: 'row',
//     backgroundColor: '#FFE3D1',
//     padding: 10,
//     borderTopLeftRadius: 2,
//     borderTopRightRadius: 2,
//   },
//   tableRow: {
//     flexDirection: 'row',
//     backgroundColor: '#FFF6F0',
//     paddingVertical: 8,
//     paddingHorizontal: 10,
//   },
//   headerText: {
//     flex: 1,
//     fontSize: 12,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     color: '#000',
//   },
//   rowText: {
//     flex: 1,
//     fontSize: 9,
//     textAlign: 'center',
//     color: '#000',
//   },

//   CouponContainer: {
//     marginHorizontal: 15,
//     marginTop: 5,
//     paddingVertical: 15,
//     borderRadius: 5,
    
//   },

//   CouponHeader: {
//     fontFamily: 'Poppins-Medium',
//     fontSize: 12,
//     color: '#0F0F0F',
//     marginBottom: 2,
//   },

//   promoCodeRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
    
//   },

//   promoInputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderRadius: 5,
//     borderColor: '#E5E5E5',
//     flex: 1,
//     paddingVertical: 5,
//     paddingHorizontal: 10,
   
//   },

//   promoTextInput: {
//     flex: 1,
//     fontSize: 10,
//     color: '#000000',
//     paddingVertical: 0,
//     fontFamily:'Poppins-Medium'
//   },

//   removeButton: {marginLeft: 10},

//   removeButtonText: {
//     color: '#FF5C00',
//     fontSize: 10,
//     fontFamily:'Poppins-Medium'
//   },

//   applyButton: {
//     backgroundColor: '#FF5C00',
//     padding: 9,
//     borderRadius: 8,
//     marginLeft: 10,
//     paddingHorizontal: 30,
//   },

//   applyButtonText: {
//     fontSize: 14,
//     color: '#ffffff',
//     textAlign: 'center',
//     fontFamily:'Poppins-Medium'
//   },
//   ButtonStyle: {
//     width: '100%',
//     backgroundColor: '#FF5C00',
//     paddingVertical: 12,
//     borderRadius: 8,
//   },
//   buttonContainer: {
//     position: 'absolute',
//     bottom: 0,
//     left: 15,
//     right: 15,
//   },
//   mainContent: {
//     // flex: 1,
//     // paddingBottom: 100
//   },
// });




import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import CustomHeader from '../components/CustemHeader';
import {useNavigation} from '@react-navigation/native';
import SelectDropdown from 'react-native-select-dropdown';
import CustomButton from '../components/CustomButton';

const SearchImage = require('../assets/Image/search.png');

const DroupDownItem = [
  {title: 'Outer Door Handle'},
  {title: 'Inner Door Handle'},
  {title: 'Outer Door Handle1'},
  {title: 'Inner Door Handle1'},
];

const tableData = [
  {No: 1, Item: 'Inner Door Handle', Price: '3.5', QTY: 2, TotalPrice: '7'},
  {No: 2, Item: 'Window Motor', Price: '1.5', QTY: 3, TotalPrice: '4.5'},
  {No: 3, Item: 'Sunroof Motor', Price: '2.5', QTY: 1, TotalPrice: '2.5'},
  {No: 4, Item: 'Backup camera', Price: '6.0', QTY: 2, TotalPrice: '12'},
  {No: 5, Item: 'Batery Change', Price: '4.5', QTY: 2, TotalPrice: '9.0'},
  {No: 6, Item: 'Interior Cleanup', Price: '3.5', QTY: 1, TotalPrice: '3.5'},
  {
    No: 7,
    Item: 'Inner roof light change',
    Price: '6.5',
    QTY: 3,
    TotalPrice: '19.5',
  },
];

const InventoryInvoice = () => {
  const navigation = useNavigation();

  const renderTableHeader = () => (
    <View style={styles.tableHeader}>
      <Text style={styles.headerText}>No</Text>
      <Text style={styles.headerText}>Item</Text>
      <Text style={styles.headerText}>Price</Text>
      <Text style={styles.headerText}>QTY</Text>
      <Text style={styles.headerText}>Total.Price</Text>
    </View>
  );

  const renderTableRow = ({item}) => (
    <View style={styles.tableRow}>
      <Text style={styles.rowText}>{item.No}</Text>
      <Text style={styles.rowText}>{item.Item}</Text>
      <Text style={styles.rowText}>${item.Price}</Text>
      <Text style={styles.rowText}>{item.QTY}</Text>
      <Text style={styles.rowText}>${item.TotalPrice}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader
        title="Inventory & Invoice"
        showBell={false}
        onBackPress={() => navigation.goBack()}
      />
      <ScrollView>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for Part Name/Part Types/Description"
          placeholderTextColor="#959595CC"
        />
        <Image source={SearchImage} style={styles.searchIcon} />
      </View>

      <SelectDropdown
        data={DroupDownItem}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
        renderButton={(selectedItem, isOpened) => {
          return (
            <View style={styles.dropdownButtonStyle}>
              <Text style={styles.dropdownButtonTxtStyle}>
                {(selectedItem && selectedItem.title) || 'Please Select'}
              </Text>
            </View>
          );
        }}
        renderItem={(item, index, isSelected) => {
          return (
            <View
              style={{
                ...styles.dropdownItemStyle,
                ...(isSelected && {backgroundColor: '#D9D9D96E'}),
              }}>
              <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
            </View>
          );
        }}
        showsVerticalScrollIndicator={false}
        dropdownStyle={styles.dropdownMenuStyle}
      />

      <View>
        <FlatList
          data={tableData}
          ListHeaderComponent={renderTableHeader}
          renderItem={renderTableRow}
          keyExtractor={item => item.No.toString()}
          contentContainerStyle={styles.tableContainer}
        />
        {/* Divider and Total Amount */}
        <View style={styles.divider} />
        <View style={styles.totalAmountContainer}>
          <Text style={styles.totalAmountText}>Total Amount: $58</Text>
        </View>
        <View style={styles.CouponContainer}>
          <Text style={styles.CouponHeader}>Promo Code/Coupon</Text>
          <View style={styles.promoCodeRow}>
            <View style={styles.promoInputContainer}>
              <TextInput
                style={styles.promoTextInput}
                placeholderTextColor={'#000000'}
                placeholder="4ii04902ede"
              />
              <TouchableOpacity style={styles.removeButton}>
                <Text style={styles.removeButtonText}>Remove</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.applyButton}>
              <Text style={styles.applyButtonText}>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
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

export default InventoryInvoice;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  searchBar: {
    marginHorizontal: 15,
    backgroundColor: '#D9D9D96E',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 15,
  },
  searchInput: {
    flex: 1,
    fontSize: 9,
    fontFamily: 'Poppins-Regular',
    color: '#000000',
    height: 40,
  },
  searchIcon: {
    height: 20,
    width: 20,
  },
  dropdownButtonStyle: {
    marginTop: 5,
    marginBottom:15,
    marginHorizontal: 15,
    backgroundColor: '#FFF6F0',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  dropdownButtonTxtStyle: {
    fontSize: 9,
    color: '#0F0F0F',
  },
  dropdownMenuStyle: {borderRadius: 5},
  dropdownItemStyle: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 5,
  },
  dropdownItemTxtStyle: {
    fontSize: 10,
    fontFamily: 'Poppins-Medium',
    color: '#0F0F0F',
  },
  tableContainer: {marginHorizontal: 15},
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#FFE3D1',
    paddingVertical: 10,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
  },
  tableRow: {
    flexDirection: 'row',
    backgroundColor: '#FFF6F0',
    paddingVertical: 8,
    // paddingHorizontal: 10,
  },
  divider: {
    height: 1,
    backgroundColor: '#FC6828',
    marginHorizontal: 15,
    // marginVertical: 10,
  },
  totalAmountContainer: {
    marginHorizontal: 15,
    paddingVertical: 7,
    backgroundColor:"#FFF6F0"
  },
  totalAmountText: {
    fontSize: 9,
    fontFamily: 'Poppins-Bold',
    color: '#000',
    textAlign: 'right',
    marginRight:25
  },
  headerText: {
    flex: 1,
    fontSize: 12,
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
    color: '#000',
  },
  rowText: {
    flex: 1,
    fontSize: 9,
    textAlign: 'center',
    color: '#000',
  },
  CouponContainer: {
    marginHorizontal: 15,
    // marginTop: 5,
    paddingVertical: 15,
    borderRadius: 5,
  },
  CouponHeader: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: '#0F0F0F',
    marginBottom: 2,
  },
  promoCodeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  promoInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#E5E5E5',
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  promoTextInput: {
    flex: 1,
    fontSize: 10,
    color: '#000000',
    paddingVertical: 0,
    fontFamily: 'Poppins-Medium',
  },
  removeButton: {marginLeft: 10},
  removeButtonText: {
    color: '#FF5C00',
    fontSize: 10,
    fontFamily: 'Poppins-Medium',
  },
  applyButton: {
    backgroundColor: '#FF5C00',
    padding: 9,
    borderRadius: 8,
    marginLeft: 10,
    paddingHorizontal: 30,
  },
  applyButtonText: {
    fontSize: 14,
    color: '#ffffff',
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
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
