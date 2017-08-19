import React, { Component } from 'react';
import {
    ImageBackground,
    StyleSheet,
    View,
    Text
} from 'react-native'
import { Container, Navbar } from 'navbar-native';
import { Actions } from 'react-native-router-flux';

class CustomerSales extends Component {
    constructor(props) {
        super(props);

        this.state = {
            orders: [],
            selectedTab: 'customersales'
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
            <Container>
                <Navbar
                    title={"CUSTOMER SALES"}
                    titleColor={"#003311"}
                    bgColor={"transparent"}
                    theme="dark"
                    right={{
                        icon: "ios-exit",
                        iconColor: "#003311",
                        onPress: () => {
                            Actions.welcome();
                        }
                    }}
                />

                <ImageBackground
                    style={styles.backgroundStyle}
                    source={require('../../img/greenbackground.jpg')}
                >

                    <View>
                        <Text>Hello</Text>
                    </View>

                </ImageBackground>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    titleStyle: {
        paddingTop: 15,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    backgroundStyle: {
        flex: 1,
        width: null,
        height: null,
        backgroundColor: 'rgba(0,0,0,0)'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});

export default CustomerSales;
