import React, { Component } from 'react';
import { 
    Scene, 
    Router, 
    Actions 
} from 'react-native-router-flux';
import { 
    clearNames
} from './actions';
import { connect } from 'react-redux';
import WelcomeScreen from './components/WelcomeScreen.js';
import TabView from './components/TabView.js';
import CustomerOrderDetails from './components/CustomerOrderDetails.js';
import ItemDetails from './components/ItemDetails.js';
import ItemSales from './components/ItemSales.js';
import AndroidTabView from './components/AndroidTabView.js';

class RouterComponent extends Component {
    render() {
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
                        onExit={() => {
                            this.props.clearNames();
                        }}
                    />
                    <Scene
                        key="custorderdetails"
                        component={CustomerOrderDetails}
                        navTransparent={1}
                    />
                    <Scene
                        key="correctitemdetails"
                        component={ItemDetails}
                        navTransparent={1}
                    />
                    <Scene
                        key="scrollabletabview"
                        component={AndroidTabView}
                        navTransparent={1}
                        onExit={() => {
                            this.props.clearNames();
                        }}
                    />
                </Scene>
            </Router>
        );
    }
};

export default connect(null, { clearNames })(RouterComponent);
