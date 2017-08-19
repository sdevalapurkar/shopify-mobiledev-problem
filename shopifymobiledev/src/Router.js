import React from 'react';
import { 
    Scene, 
    Router, 
    Actions 
} from 'react-native-router-flux';
import WelcomeScreen from './components/WelcomeScreen.js';
import TabView from './components/TabView.js';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="main">
                <Scene
                    key="welcome"
                    component={WelcomeScreen}
                    hideNavBar={true}
                />
                <Scene
                    key="tabview"
                    component={TabView}
                    navTransparent={1}
                />
            </Scene>
        </Router>
    );
};

export default RouterComponent;
