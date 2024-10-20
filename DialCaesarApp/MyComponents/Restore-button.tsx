import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ButtonsComponentProps{
  onPress:() => void;
}
const ButtonComponent: React.FC<ButtonsComponentProps> = ({onPress}) => {
  return (
    
    <View style={styles.buttons}>
      <TouchableOpacity
        style={styles.btnHover}
        activeOpacity={0.7} // タップ時の透明度を設定
        onPress = {onPress}
      >
        <Text style={styles.btnText}>Restore Button</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    margin: 0,
    textAlign: 'center', // これはRNでは無効。親Viewで調整する必要あり
  },
  btnHover: {
    width: 200,
    height: 40,
    //backgroundColor: '#39FEEA', // 緑色
    backgroundColor: '#FBDD9D', // 橙色
    margin: 0,
    borderRadius: 15,
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
