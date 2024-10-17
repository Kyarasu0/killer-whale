// import React, { useState } from 'react';
// import { View, ScrollView, StyleSheet } from 'react-native';
// import { Button, withTheme, Text } from '@rneui/themed';

// type ButtonsComponentProps = {};

// const Buttons: React.FunctionComponent<ButtonsComponentProps> = () => {
//   const [selectedIndex, setSelectedIndex] = useState(0);
//   const [selectedIndexes, setSelectedIndexes] = useState([0, 2, 3]);

//   return (
//     <>
//       <ScrollView>
//         <View style={styles.contentView}>
//           <Text style={styles.subHeader}></Text>
//           <View style={styles.buttonsContainer}>
//             <Button
//               title={'変換'}
//               containerStyle={{
//                 width: 100,
//                 marginVertical: 10,
//               }}
//             />
//           </View>
//         </View>
//       </ScrollView>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   contentView: {
//     flex: 1,
//     justifyContent: 'center', // 中央に配置
//     alignItems: 'flex-start', // 左寄せ
//     padding: 20, // パディングを追加
//   },
//   buttonsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'flex-start', // 左寄せ
//     alignItems: 'center',
//     width: '100%',
//   },
//   subHeader: {
//     backgroundColor: "#2089dc",
//     color: "white",
//     textAlign: "center",
//     paddingVertical: 5,
//     marginBottom: 10,
//   },
// });

// export default withTheme(Buttons, '');

import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const ButtonComponent = () => {
  return (
    
    <View style={styles.buttons}>
      <TouchableOpacity
        style={styles.btnHover}
        activeOpacity={0.7} // タップ時の透明度を設定
      >
        <Text style={styles.btnText}>Hover Button</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    margin: '10%',
    textAlign: 'center', // これはRNでは無効。親Viewで調整する必要あり
  },
  btnHover: {
    width: 200,
    height: 55,
    backgroundColor: '#39FEEA', // 緑色
    margin: 20,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
    textAlign: 'center',
  },
});

export default ButtonComponent;
