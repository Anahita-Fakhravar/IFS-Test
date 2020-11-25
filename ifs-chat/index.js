/**
 * @format
 */

import { Navigation } from "react-native-navigation";
import { App } from './src/App';
import { ScreensName } from "./src/ScreensName";

App();

Navigation.events().registerAppLaunchedListener(() => {
   Navigation.setRoot({
     root: {
       stack: {
         children: [
           {
             component: {
               name: ScreensName.LoginScreen,
               options: {
                topBar: {
                    visible: false,
                    height: 0,
                },
                layout: {
                    orientation: ['portrait'],
                },
            },
             }
           }
         ]
       }
     }
  });
});