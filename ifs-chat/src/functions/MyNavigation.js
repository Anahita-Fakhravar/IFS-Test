//Navigation functions 

import { Navigation } from 'react-native-navigation';

const pushToScreen = (componentId, screenName, id, passedData) => {

    Navigation.push(componentId, {
        component: {
            name: screenName,
            passProps: {
                id: id,
                passedData: passedData,
            },
        },
    });
};

export { pushToScreen }