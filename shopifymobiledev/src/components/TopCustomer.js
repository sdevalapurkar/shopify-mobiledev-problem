import React, { Component } from 'react';
import {
    ImageBackground,
    StyleSheet,
    View,
    Text
} from 'react-native';

class TopCustomer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            orders: []
        }
    }

    componentWillMount() {
        fetch('https://shopicruit.myshopify.com/admin/orders.json?page=1&access_token=c32313df0d0ef512ca64d5b336a0d7c6')
        .then((response) => {
            return response;
        })
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            this.setState({ orders: result });
        })
    }

    render() {
        console.log(this.state.orders);

        return (
            <ImageBackground
                style={styles.backgroundStyle}
                source={require('../../img/greenbackground.jpg')}
            >

            <View>
                <Text style={styles.titleStyle}>
                    TOP CUSTOMER
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

export default TopCustomer;
