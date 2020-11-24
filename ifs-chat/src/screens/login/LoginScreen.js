//Design join screen

import React, { useState } from 'react';
import { SafeAreaView, Button, View, Image, TextInput, KeyboardAvoidingView, Platform, ShadowPropTypesIOS } from 'react-native';
import { chatLogo } from '../../assets/Constance';
import { Strings } from '../../assets/Strings';
import { LoginStyles } from './LoginStyles';

const LoginScreen = ({ joinChat }) => {

    const [username, setUsername] = useState('')

    return (
        <SafeAreaView style={LoginStyles.mainContainer}>
            <Image style={LoginStyles.img} source={chatLogo} />
            <View style={LoginStyles.inputView}>
                <TextInput
                    value={username}
                    style={LoginStyles.txtInput}
                    placeholder={Strings.enterUsername}
                    onChangeText={(name) => setUsername(name)}
                />
                <Button title={Strings.joinChat} onPress={() => joinChat(username)} />
            </View>
            {Platform.OS === "ios" && <KeyboardAvoidingView behavior="padding" />}
        </SafeAreaView>
    )
}

export default LoginScreen;