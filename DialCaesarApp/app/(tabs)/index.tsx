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
import { Calculator } from '../../DialCaesarManager/Calculator'
import DisplayDataBase from '../../DialCaesarManager/DataBase';
import { GetData } from '../../DialCaesarManager/Storage';
import { RemoveData } from '../../DialCaesarManager/Storage';
import {
  View,
  TextInput,
  Button,
  Text,
  FlatList,
  Alert,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface DataItem {
  title: string;
  chiper: string;
}

const HomeScreen: React.FC = () => {
  const [pass, setPass] = useState<string>(''); // useStateに型を指定
  const [title, setTitle] = useState<string>('');
  const [key, setKey] = useState<string>('');
  const [dataList, setDataList] = useState<DataItem[]>([]);
  // useEffect(() => {
  //   CreateDataBase(); // データベースを作成
  // }, []);
  useEffect(() => {
    const loadStoredData = async () => {
      try {
        const storedData = await AsyncStorage.getItem('dataList');
        if (storedData) {
          setDataList(JSON.parse(storedData));  // データを配列に変換して反映
        }
      } catch (e) {
        console.error('データの取得に失敗しました', e);
      }
    };
    loadStoredData();
  }, []);

  const handleSave = async (title: string, plaintext: string, key: string) => {
    if (!title.trim() || !plaintext.trim()) return; // 空の入力は無視
    const chiper: string = Calculator(plaintext, key)
    const pair = {title, chiper}
    const newDataList = [...dataList, pair]; // 新しいデータをリストに追加
    try {
      await AsyncStorage.setItem('dataList', JSON.stringify(newDataList));
      setDataList(newDataList);  // リストを更新してUIに反映
      setPass('');  // 入力をクリア
      setTitle('');  // 入力をクリア
      setKey('');  // 入力をクリア
      Alert.alert('保存成功', 'データが保存されました');
    } catch (e) {
      console.error('保存に失敗しました', e);
    }
  };

  const renderItem = ({ item }: { item: DataItem }) => (
    <View>
      <Text>{item.title} : {item.chiper}</Text>
    </View>
  );

  const handleRestore = async () => {
    const data = await GetData(title, key); // awaitを使って結果を取得
    if (data) {
      setPass(data.chiper); // chiperを設定
    } else {
      console.log('データが見つかりませんでした'); // データが見つからなかった場合の処理
    }
  }

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
          <Buttons onPress={() => handleSave(title, pass, key)} />
          <RestoreButtonComponent onPress={() => {handleRestore}} />
        </ThemedView>
        <FlatList
        data={dataList}
        renderItem={renderItem}
        keyExtractor={(item) => item.title} // ユニークなキーとしてtitleを使用
      />
        {/* <DisplayDataBase /> */}
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
    padding:65,
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
