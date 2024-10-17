import React, { useState } from 'react';
import { SearchBar } from '@rneui/themed';
import { View, StyleSheet } from 'react-native';

type SearchProps = {}; // 必要に応じてプロパティを追加できます

const SwitchComponent: React.FunctionComponent<SearchProps> = () => {
  const [search, setSearch] = useState<string>(""); // useStateの型を明示的に指定

  const updateSearch = (search: string) => { // 引数の型を指定
    setSearch(search);
  };

  return (
    <View style={styles.view}>
      <SearchBar
        placeholder="Title here..."
        onChangeText={updateSearch}
        value={search}
        containerStyle={styles.searchBarContainer} // スタイルを追加
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    marginTop: 300, // 上部にスペースを追加（必要に応じて調整）
    marginLeft: 20, // 左にスペースを追加
    marginRight: 20, // 右にスペースを追加（必要に応じて調整）
    paddingBottom: 20, // 下にパディングを追加
    alignItems: 'center', // 中央寄せ
  },
  searchBarContainer: {
    width: 300, // 幅を50%に設定（必要に応じて調整）
    maxWidth: 600, // 最大幅を指定
  },
  inputContainer: {
    height: 50, // 高さを調整
    paddingHorizontal: 10, // 内部の左右のパディング
  },
});

export default SwitchComponent;
