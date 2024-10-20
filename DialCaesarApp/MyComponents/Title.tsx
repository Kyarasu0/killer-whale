import React from 'react';
import { Input } from '@rneui/themed';
import { View, StyleSheet } from 'react-native';

interface TitleProps {
    placeholder: string; // 必要に応じてプロパティを追加
    secureTextEntry: boolean;
    value: string;
    onChangeText: (title: string) => void;
}

const Title: React.FC<TitleProps> = ({ placeholder = "Title", secureTextEntry = true, onChangeText, value}) => {
    return (
        <View>
            <Input placeholder={placeholder} containerStyle={styles.pass} onChangeText={onChangeText} value={value}/>
        </View>
    );
}

const styles = StyleSheet.create({
    pass: {
        width:150,
        marginTop:0,
        backgroundColor: '#39FEEA',
        paddingTop: 10,
        borderRadius:5,
        opacity: 0.95,
    },
  });

export default Title;
