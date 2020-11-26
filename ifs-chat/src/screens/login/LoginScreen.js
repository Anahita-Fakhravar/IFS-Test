//Design login screen.

import React, { useState } from 'react';
import {
    SafeAreaView,
    Button,
    View,
    Image,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    ShadowPropTypesIOS,
    Alert
} from 'react-native';
import { chatLogo } from '../../assets/Constance';
import { Strings } from '../../assets/Strings';
import { LoginStyles } from './LoginStyles';
import { useDispatch } from 'react-redux';
import { saveLoginInfo } from './../../redux/reducers/LoginReducer';
import { pushToScreen } from './../../functions/MyNavigation';
import { ScreensName } from '../../ScreensName';

const LoginScreen = (Props) => {

    const dispatch = useDispatch();
    const [username, setUsername] = useState('');

    //Save user name in redux store and then navigate to next page
    function _JoinChat() {
        Promise.all([dispatch(saveLoginInfo({ username: username })),
        pushToScreen(Props.componentId, ScreensName.HomeScreen, null, null)
        ]).then(function () {}).catch(error => error);
    }

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
                <Button title={Strings.joinChat} onPress={() => username !== '' ? _JoinChat() : Alert.alert(Strings.enterNameAlert)} />
            </View>
            {Platform.OS === "ios" && <KeyboardAvoidingView behavior="padding" />}
        </SafeAreaView>
    )
}

export default LoginScreen;