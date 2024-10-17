import React, { useState } from 'react';
import { SearchBar } from '@rneui/themed';
import { View, StyleSheet } from 'react-native';

type PSBoxProps = {}; // 必要に応じてプロパティを追加できます

const PSBoxComponent: React.FunctionComponent<PSBoxProps> = () => {
  const [psBoxQuery, setPSBoxQuery] = useState<string>(""); // useStateの型を明示的に指定

  const updatePSBoxQuery = (query: string) => { // 引数の型を指定
    setPSBoxQuery(query);
  };

  return (
    <View style={styles.psBoxView}>
      <SearchBar
        placeholder="PS-box search..."
        onChangeText={updatePSBoxQuery}
        value={psBoxQuery}
        containerStyle={styles.psBoxSearchBarContainer} // スタイルを追加
      />
    </View>
  );
};

const styles = StyleSheet.create({
  psBoxView: {
    position: 'absolute', // 絶対位置を設定
    top: 300, // 上からの位置
    left: 20, // 左からの位置
    // 幅や高さを指定してレイアウトを調整できます
    // width: '100%', // 必要に応じて幅を指定
    // height: '100%', // 必要に応じて高さを指定
  },
  psBoxSearchBarContainer: {
    width: 80, // 幅を指定（必要に応じて調整）
    maxWidth: 600, // 最大幅を指定
  },
  psBoxInputContainer: {
    height: 50, // 高さを調整
    paddingHorizontal: 10, // 内部の左右のパディング
  },
});

export default PSBoxComponent;
