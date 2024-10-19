import React from 'react';
import { Input } from '@rneui/themed';
import { View, StyleSheet } from 'react-native';

interface KeyProps {
    placeholder: string; // 必要に応じてプロパティを追加
    secureTextEntry: boolean;
    value: string;
    onChangeText:(key: string) => void;
}

const Key: React.FC<KeyProps> = ({ placeholder = "key", secureTextEntry = true, value, onChangeText }) => {
    return (
        <View>
            <Input placeholder={placeholder} secureTextEntry={secureTextEntry} containerStyle={styles.key} onChangeText={onChangeText} value={value}/>
        </View>
    );
}

const styles = StyleSheet.create({
    key: {
        width:130,
        marginTop:60,
        backgroundColor: '#39FEEA',
        paddingTop: 10,
        borderRadius:5,
    },
  });

export default Key;
