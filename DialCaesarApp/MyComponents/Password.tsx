import React from 'react';
import { Input } from '@rneui/themed';
import { View, StyleSheet } from 'react-native';

interface PasswordProps {
    placeholder: string; // 必要に応じてプロパティを追加
    secureTextEntry: boolean;
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
        width:230,
        marginTop:60,
        backgroundColor: '#39FEEA',
        paddingTop: 10,
        borderRadius:30,
    },
  });

export default Password;
