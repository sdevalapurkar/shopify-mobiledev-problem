import React from 'react';
import { 
    Scene, 
    Router, 
    Actions 
} from 'react-native-router-flux';
import WelcomeScreen from './components/WelcomeScreen.js';
import CustomerSales from './components/CustomerSales.js';

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
                    key="customersales"
                    component={CustomerSales}
                    hideNavBar={true}
                />
            </Scene>
        </Router>
    );
};

export default RouterComponent;
