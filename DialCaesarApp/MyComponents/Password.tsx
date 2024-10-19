import React from 'react';
import { Input } from '@rneui/themed';
import { View, StyleSheet } from 'react-native';

interface PasswordProps {
    placeholder: string; // 必要に応じてプロパティを追加
    secureTextEntry: boolean;
    value: string; // 追加
    onChangeText: (pass: string) => void; // 追加
}

const Password: React.FC<PasswordProps> = ({ placeholder = "Password", secureTextEntry = true }) => {
    return (
        <View>
            <Input placeholder={placeholder} secureTextEntry={secureTextEntry} containerStyle={styles.pass}/>
        </View>
    );
}

const styles = StyleSheet.create({
    pass: {
        width:210,
        marginTop:0,
        backgroundColor: '#39FEEA',
        paddingTop: 10,
        borderRadius:30,
    },
  });

export default Password;
