import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    TabBarIOS
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomerSales from './CustomerSales.js';
import ItemSales from './ItemSales.js';

class TabView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedTab: 'customersales'
        }
    }

    render() {
        return (
            <TabBarIOS style={styles.container}>
                <Icon.TabBarItemIOS
                    title="Customer Sales"
                    iconName="ios-people"
                    tintColor="#cc0000"
                    selected={this.state.selectedTab == 'customersales'}
                    onPress={() => {
                        this.setState({ selectedTab: 'customersales' });
                    }}
                >
                    <CustomerSales />
                </Icon.TabBarItemIOS>

                <Icon.TabBarItemIOS
                    title="Item Sales"
                    iconName="ios-cart"
                    tintColor="#cc0000"
                    selected={this.state.selectedTab == 'itemsales'}
                    onPress={() => {
                        this.setState({ selectedTab: 'itemsales' });
                    }}
                >
                    <ItemSales />
                </Icon.TabBarItemIOS>
            </TabBarIOS>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});

export default TabView;
