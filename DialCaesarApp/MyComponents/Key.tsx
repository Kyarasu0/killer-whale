import React from 'react';
import { Input } from '@rneui/themed';
import { View, StyleSheet } from 'react-native';

interface KeyProps {
    placeholder: string; // 必要に応じてプロパティを追加
    secureTextEntry: boolean;
}

const Key: React.FC<KeyProps> = ({ placeholder = "key", secureTextEntry = true }) => {
    return (
        <View>
            <Input placeholder={placeholder} secureTextEntry={secureTextEntry} containerStyle={styles.key}/>
        </View>
    );
}

const styles = StyleSheet.create({
    key: {
        width:130,
        marginTop:60,
        backgroundColor: '#39FEEA',
        paddingTop: 10,
        borderRadius:30,
    },
  });

export default Key;
