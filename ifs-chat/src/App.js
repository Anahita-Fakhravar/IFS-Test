
import { ScreensName } from './ScreensName';
import React from 'react';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import HomeScreen from './screens/home/HomeScreen';
import LoginScreen from './screens/login/LoginScreen';

const ScreenR = {};

ScreenR[ScreensName.LoginScreen] = LoginScreen;
ScreenR[ScreensName.HomeScreen] = HomeScreen;


function App() {

    const wrapWithProviders = Comp => props => (
        <Comp {...props} />
    );

    Object.keys(ScreenR).forEach(function (key) {
        Navigation.registerComponent(key, () => wrapWithProviders(ScreenR[key]),
            Provider, store);
    });
}
module.exports = {
    App,
};
