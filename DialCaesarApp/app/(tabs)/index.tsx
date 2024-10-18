import React, { useState } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { Text, View } from 'react-native-elements'; // react-native-elementsからTextとViewをインポート
import Buttons from '../../MyComponents/Convert-button';
import Key from '../../MyComponents/Key';
import Password from '../../MyComponents/Password';
import Title from '../../MyComponents/Title';
import { BlurView } from 'expo-blur';

const HomeScreen: React.FC = () => {
  const [pass, setPass] = useState<string>(''); // useStateに型を指定

  return (
    <ImageBackground
      source={require('../../MyComponents/img/名称未設定のデザイン.png')} // 画像のパス
      style={styles.background}
    >
      <View style={styles.titleContainer}>
        <Text h1>Title</Text> {/* ThemedTextの代わりにreact-native-elementsのTextを使用 */}
        <BlurView intensity={50} tint="light" style={styles.blur}>
          <View style={styles.inputKey}>
            <Key placeholder="Key Vector" secureTextEntry={true} />
          </View>
          <View style={styles.inputPassword}>
            <Title placeholder="Title" secureTextEntry={true} />
            <Password
              placeholder="Password"
              value={pass}
              secureTextEntry={true}
              onChangeText={setPass}
            />
          </View>
        </BlurView>
        <Buttons />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    flexWrap: 'wrap',
    backgroundColor: 'transparent',
    flexDirection: 'row',
    gap: 8,
    height: '100%',
    justifyContent: 'center',
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blur: {
    width: 250,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    overflow: 'hidden',
  },
  inputKey: {
    backgroundColor: 'transparent',
    width: '100%',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    padding: 5,
  },
  inputPassword: {
    backgroundColor: 'transparent',
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 5,
  },
});

export default HomeScreen;
