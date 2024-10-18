import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const LargeTextInput: React.FunctionComponent = () => {
  const [text, setText] = useState<string>("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.largeInput}
        placeholder="ここに大きなテキストを入力..."
        multiline={true} // 複数行の入力を可能にする
        numberOfLines={4} // デフォルトで表示される行数
        value={text}
        onChangeText={setText} // テキスト変更時に状態を更新
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    justifyContent: 'center', // 垂直方向の中央配置
    alignItems: 'center', // 水平方向の中央配置
    padding: 0, // パディングを追加
  },
  largeInput: {
    width: '100%', // 幅を100%に設定
    height: 200, // 高さを200に設定
    backgroundColor:  '#ccc',
    borderColor: '#ff0', // 枠線の色
    borderWidth: 2, // 枠線の幅
    borderRadius: 10, // 角を丸くする
    padding: 10, // 内部のパディング
    fontSize: 18, // フォントサイズを大きくする
  },
});

export default LargeTextInput;
