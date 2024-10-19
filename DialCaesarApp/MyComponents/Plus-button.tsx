import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Button, withTheme, Text } from '@rneui/themed';

type PlusButtonComponentProps = {};

const PlusButtonComponent: React.FunctionComponent<PlusButtonComponentProps> = () => {
  const [selectedPlusIndex, setSelectedPlusIndex] = useState(0);
  const [selectedPlusIndexes, setSelectedPlusIndexes] = useState([0, 2, 3]);

  return (
    <ScrollView>
      <View style={styles.plusContentView}>
        <Text style={styles.plusSubHeader}></Text>
        <View style={styles.plusButtonsContainer}>
          <Button
            title={'変換'}
            containerStyle={styles.roundButtonContainer} // 丸いボタンのスタイルを適用
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  plusContentView: {
    height: 100,// flex を使わずに余白を設定
    marginTop: 0, // 上部に余白を設定（必要に応じて調整）
    marginBottom: 0, // 下部に余白を設定（必要に応じて調整）
    padding: 0, // パディングを追加
    alignItems: 'center', // 中央寄せ
  },
  plusButtonsContainer: {
    flexDirection: 'row', // 横並びにするためのプロパティ
    justifyContent: 'flex-start', // 左寄せ
    alignItems: 'center',
    height: '100%', // 幅を100%に設定
  },
  roundButtonContainer: {
    width: 100,
    height:100, // ボタンを正方形にする
    borderRadius: 50,
    marginVertical: 0, // 上下のマージンを設定
    textAlignVertical: 'center'
  },
  plusSubHeader: {
    backgroundColor: "#2089dc",
    color: "white",
    textAlign: "center",
    paddingVertical: 0,
    marginBottom: 0,
  },
});

export default withTheme(PlusButtonComponent, '');
