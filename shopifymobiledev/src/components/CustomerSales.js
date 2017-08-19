import React, { Component } from 'react';
import {
    ImageBackground,
    StyleSheet,
    View,
    Text
} from 'react-native'
import { Actions } from 'react-native-router-flux';

class CustomerSales extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedTab: 'customersales'
        }
    }

    render() {
        return (
            <ImageBackground
                style={styles.backgroundStyle}
                source={require('../../img/greenbackground.jpg')}
            >

            <View>
                <Text style={styles.titleStyle}>
                    CUSTOMER SALES
                </Text>
            </View>

            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    backgroundStyle: {
        flex: 1,
        width: null,
        height: null,
        backgroundColor: 'rgba(0,0,0,0)'
    },
    titleStyle: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingTop: 30,
        textAlign: 'center',
        color: '#003311'
    }
});

export default CustomerSales;
