import React, { useState, useEffect } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { ThemedText } from '../../components/ThemedText'
import { ThemedView } from '../../components/ThemedView'
import Buttons from '../../MyComponents/Convert-button';
import Key from '../../MyComponents/Key';
import Password from '../../MyComponents/Password';
import Title from '../../MyComponents/Title';
import { BlurView } from 'expo-blur';
import RestoreButtonComponent from '../../MyComponents/Restore-button'
import LargeTextInput from '../../MyComponents/whole-PS'
//import PlusButtonComponent from '../../MyComponents/Plus-button' 
import { EncodeInserter } from '../../DialCaesarManager/MyFunctions/EncodeInserter'
import { GetDecoder } from '../../DialCaesarManager/MyFunctions/GetDecoder'
import DisplayDataBase from '../../DialCaesarManager/DataBase';
import { CreateDataBase } from '../../DialCaesarManager/DataBase';

const HomeScreen: React.FC = () => {
  const [pass, setPass] = useState<string>(''); // useStateに型を指定
  const [title, setTitle] = useState<string>('');
  const [key, setKey] = useState<string>('');
  useEffect(() => {
    CreateDataBase(); // データベースを作成
  }, []);

  return (
    <ImageBackground
      // source={require('../../MyComponents/img/名称未設定のデザイン.png')} // 画像のパス
      source={require('../../MyComponents/img/CyanLock.png')} // 画像のパス
      style={styles.background}
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedView style={styles.title}>
          <ThemedText style={styles.customFont}>VCESS</ThemedText>
        </ThemedView>
        {/* ThemedTextの代わりにreact-native-elementsのTextを使用 */}
        {/*      <BlurView intensity={50} tint="light" style={styles.blur}>*/}
        <ThemedView style={styles.inputKey}>
          <Key placeholder="Key Vector" secureTextEntry={true} onChangeText={setKey} value={key} />
        </ThemedView>
        <ThemedView style={styles.inputPassword}>
          <Title placeholder="Title" secureTextEntry={true} onChangeText={setTitle} value={title} />
          <Password
            placeholder="Password"
            value={pass}
            secureTextEntry={true}
            onChangeText={setPass}
          />
        </ThemedView>
        <ThemedView style={styles.inputPassword}>
          <Buttons onPress={() => EncodeInserter(title, pass, key)} />
          <RestoreButtonComponent onPress={() => GetDecoder(title, key)} />
        </ThemedView>
        <DisplayDataBase />
        {/* <LargeTextInput /> */}
        {/*<DisplayDataBase /> */}
        {/*<PlusButtonComponent/> */}
        {/*        </BlurView>*/}

      </ThemedView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  customFont:{
    fontFamily: 'YourCustomFontName', // フォント名に置き換えてください
    fontWeight: 'bold', // 太字
    fontSize: 90, // サイズ調整
    color:'white',
    padding:55,
  },
  title: {
    backgroundColor: 'transparent',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems:'center',
    height: '10%',
    width:'100%',
    marginTop:90,
  },
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
    padding: 10,
  },


});

export default HomeScreen;
