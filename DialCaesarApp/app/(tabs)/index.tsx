import { ImageBackground, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import KeyBoxComponent from '../../MyComponents/key-box';
import SwitchComponent from '../../MyComponents/Searchbar';
import Buttons from '../../MyComponents/Convert-button';
import RestoreButtonComponent from '../../MyComponents/Convert-button';
import PSBoxComponent from '../../MyComponents/PS-box';
import PlusButtonComponent from '../../MyComponents/Plus-button';
import LargeTextInput from '../../MyComponents/Searchbar';
import { Input, Icon } from '@rneui/themed';
import Key from '../../MyComponents/Key';
import Password from '../../MyComponents/Password';
import Title from '../../MyComponents/Title';
//import { BlurView } from '@react-native-community/blur';

export default function HomeScreen() {
  return (
    <ImageBackground
      source={require('../../MyComponents/img/名称未設定のデザイン.png')} // 画像のパス
      style={styles.background}
    >

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title"></ThemedText>
        {/* <KeyBoxComponent/>
        <SwitchComponent /> 
        <Buttons />
        <PSBoxComponent/>
        <PlusButtonComponent/> */}
        {/* <BlurView
        blurType="light"
        blurAmount={10}
        > */}

        <ThemedView style={styles.inputKey}>
          <Key placeholder="Key Vector" secureTextEntry={true} />
        </ThemedView>
        <ThemedView style={styles.inputPassword}>
          <Title placeholder="Title" secureTextEntry={true} />
          <Password placeholder="Password" secureTextEntry={true} />
        </ThemedView>
        {/* </BlurView> */}
        <Buttons />
      </ThemedView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    flexWrap: 'wrap',
    backgroundColor: 'transparent',
    flexDirection: 'row',
    //alignItems: 'center',
    gap: 8,
    height: '100%',
    justifyContent: 'center',
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  password: {
    backgroundColor: '#FFF',
    width: 100,
  },
  inputKey: {
    //backgroundColor: '#00FF00',
    backgroundColor: 'transparent',
    width: '100%',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    padding: 5,
  },
  inputPassword: {
    //backgroundColor: '#00FF00',
    backgroundColor: 'transparent',
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 5,
  }
});
