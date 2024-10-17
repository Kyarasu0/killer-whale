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


export default function HomeScreen() {
  return (
    <ImageBackground
      source={require('../../MyComponents/img/名称未設定のデザイン.png')} // 画像のパス
      style={styles.background}
    >

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title"></ThemedText>
        <KeyBoxComponent/>
        <SwitchComponent /> 
        <Buttons />
        <PSBoxComponent/>
        <PlusButtonComponent/>
      </ThemedView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
