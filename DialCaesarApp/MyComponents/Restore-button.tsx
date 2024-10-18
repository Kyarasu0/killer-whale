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
