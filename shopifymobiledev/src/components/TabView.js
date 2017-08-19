import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    TabBarIOS
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomerSales from './CustomerSales.js';
import TopCustomer from './TopCustomer.js';

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
                    title="Top Customer"
                    iconName="ios-heart"
                    tintColor="#cc0000"
                    selected={this.state.selectedTab == 'favoritecustomer'}
                    onPress={() => {
                        this.setState({ selectedTab: 'favoritecustomer' });
                    }}
                >
                    <TopCustomer />
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
