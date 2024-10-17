import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Button, withTheme, Text } from '@rneui/themed';

type RestoreButtonComponentProps = {};

const RestoreButtonComponent: React.FunctionComponent<RestoreButtonComponentProps> = () => {
  const [selectedRestoreIndex, setSelectedRestoreIndex] = useState(0);
  const [selectedRestoreIndexes, setSelectedRestoreIndexes] = useState([0, 2, 3]);

  return (
    <>
      <ScrollView>
        <View style={styles.restoreContentView}>
          <Text style={styles.restoreSubHeader}>Basic Restore Button</Text>
          <View style={styles.restoreButtonsContainer}>
            <Button
              title={'React Native Elements'}
              containerStyle={{
                width: 200,
                marginVertical: 10,
              }}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  restoreContentView: {
    flex: 1,
    justifyContent: 'center', // 中央に配置
    alignItems: 'flex-start', // 左寄せ
    padding: 20, // パディングを追加
  },
  restoreButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start', // 左寄せ
    alignItems: 'center',
    width: '100%',
  },
  restoreSubHeader: {
    backgroundColor: "#2089dc",
    color: "white",
    textAlign: "center",
    paddingVertical: 5,
    marginBottom: 10,
  },
});

export default withTheme(RestoreButtonComponent, '');
