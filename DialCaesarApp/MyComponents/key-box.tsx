import React, { useState } from 'react';
import { SearchBar } from '@rneui/themed';
import { View, StyleSheet } from 'react-native';

type KeyBoxProps = {}; // 必要に応じてプロパティを追加できます

const KeyBoxComponent: React.FunctionComponent<KeyBoxProps> = () => {
  const [keyBoxQuery, setKeyBoxQuery] = useState<string>(""); // useStateの型を明示的に指定

  const updateKeyBoxQuery = (query: string) => { // 引数の型を指定
    setKeyBoxQuery(query);
  };

  return (
    <View style={styles.keyBoxView}>
      <SearchBar
        placeholder="Key-box search..."
        onChangeText={updateKeyBoxQuery}
        value={keyBoxQuery}
        containerStyle={styles.keyBoxSearchBarContainer} // スタイルを追加
      />
    </View>
  );
};

const styles = StyleSheet.create({
  keyBoxView: {
    flex: 1, // 親ビューをフレックスコンテナにする
    justifyContent: 'flex-start', // 縦方向に上部に配置
    alignItems: 'flex-start', // 横方向に左寄せ
    marginTop: 30, // 上部にスペースを追加（必要に応じて調整）
    marginLeft: 20,
  },
  keyBoxSearchBarContainer: {
    width: 100, // 幅を50%に設定（必要に応じて調整）
    maxWidth: 600, // 最大幅を指定
  },
  keyBoxInputContainer: {
    height: 50, // 高さを調整
    paddingHorizontal: 10, // 内部の左右のパディング
  },
});

export default KeyBoxComponent;
