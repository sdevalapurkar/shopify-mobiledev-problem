import React, { Component } from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import CustomerSales from './CustomerSales.js';
import ItemSales from './ItemSales.js';

class AndroidTabView extends Component {
    render() {
        return (
            <ScrollableTabView 
                tabBarPosition="overlayTop"
                tabBarActiveTextColor="#003300"
                tabBarUnderlineStyle={{backgroundColor: '#003300'}}
            >
                <CustomerSales tabLabel="Customer Sales" />
                <ItemSales tabLabel="Item Sales" />
            </ScrollableTabView>
        );
    }
}

export default AndroidTabView;
