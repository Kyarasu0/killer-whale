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
import { Keyframe } from 'react-native-reanimated';
interface ButtonsComponentProps{
  onPress: () => void;
}

const ButtonComponent: React.FC<ButtonsComponentProps>  = ({onPress}) => {
  return (
    
    <View style={styles.buttons}>
      <TouchableOpacity
        style={styles.btnHover}
        activeOpacity={0.7} // タップ時の透明度を設定
        onPress={onPress}
      >
        <Text style={styles.btnText}>Convert Button</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    margin: 0,
    textAlign: 'center', // これはRNでは無効。親Viewで調整する必要あり
    borderRightWidth: 5,
  },
  btnHover: {
    width: 150,
    height: 40,
    //backgroundColor: '#39FEEA', // 緑色
    backgroundColor: '#FBDD9D', // 橙色
    margin: 0,
    borderRadius:15,
    shadowOpacity: 0.5,
    shadowColor: '#CA4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 16,
    fontStyle: 'italic',
    fontWeight: '700',
    color: '#A86',
    textAlign: 'center',
  },

});

export default ButtonComponent;
