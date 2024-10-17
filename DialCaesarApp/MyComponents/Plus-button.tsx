import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Button, withTheme, Text } from '@rneui/themed';

type PlusButtonComponentProps = {};

const PlusButtonComponent: React.FunctionComponent<PlusButtonComponentProps> = () => {
  const [selectedPlusIndex, setSelectedPlusIndex] = useState(0);
  const [selectedPlusIndexes, setSelectedPlusIndexes] = useState([0, 2, 3]);

  return (
    <>
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
    </>
  );
};

const styles = StyleSheet.create({
  plusContentView: {
    flex: 1,
    justifyContent: 'center', // 中央に配置
    alignItems: 'flex-start', // 左寄せ
    padding: 20, // パディングを追加
  },
  plusButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start', // 左寄せ
    alignItems: 'center',
    width: '100%',
  },
  roundButtonContainer: {
    width: 100,
    height: 100, // ボタンを正方形にする
    borderRadius: 50, // ボタンの形を丸くする
    marginVertical: 10,
  },
  plusSubHeader: {
    backgroundColor: "#2089dc",
    color: "white",
    textAlign: "center",
    paddingVertical: 5,
    marginBottom: 10,
  },
});

export default withTheme(PlusButtonComponent, '');
