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
        placeholder="Type Here..."
        onChangeText={updateSearch}
        value={search}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    margin: 10,
  },
});

export default SwitchComponent;
