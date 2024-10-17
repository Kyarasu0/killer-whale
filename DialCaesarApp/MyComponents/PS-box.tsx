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
    flex: 1, // 親ビューをフレックスコンテナにする
    justifyContent: 'flex-start', // 縦方向に上部に配置
    alignItems: 'flex-start', // 横方向に左寄せ
    marginTop: 300, // 上部にスペースを追加（必要に応じて調整）
    marginLeft: 20,
  },
  psBoxSearchBarContainer: {
    width: 800, // 幅を50%に設定（必要に応じて調整）
    maxWidth: 600, // 最大幅を指定
  },
  psBoxInputContainer: {
    height: 50, // 高さを調整
    paddingHorizontal: 10, // 内部の左右のパディング
  },
});

export default PSBoxComponent;
