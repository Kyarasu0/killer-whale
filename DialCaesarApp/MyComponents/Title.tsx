import React from 'react';
import { Input } from '@rneui/themed';
import { View, StyleSheet } from 'react-native';

interface TitleProps {
    placeholder: string; // 必要に応じてプロパティを追加
    secureTextEntry: boolean;
}

const Title: React.FC<TitleProps> = ({ placeholder = "Title", secureTextEntry = true }) => {
    return (
        <View>
            <Input placeholder={placeholder} containerStyle={styles.pass}/>
        </View>
    );
}

const styles = StyleSheet.create({
    pass: {
        width:130,
        marginTop:60,
        backgroundColor: '#39FEEA',
        paddingTop: 10,
        borderRadius:30,
    },
  });

export default Title;
