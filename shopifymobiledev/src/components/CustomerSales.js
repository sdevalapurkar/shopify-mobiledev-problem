import React, { Component } from 'react';
import {
    ImageBackground,
    StyleSheet,
    View,
    Text,
    TextInput
} from 'react-native';
import { 
    setFirstName,
    setLastName,
    setEmail,
    searchForCustomer 
} from '../actions';
import { connect } from 'react-redux';
import SubmitButton from '../common/SubmitButton.js';
import FirstNameForm from '../common/FirstNameForm.js';
import LastNameForm from '../common/LastNameForm.js';
import EmailForm from '../common/EmailForm.js';
import RenderIf from '../common/RenderIf.js';

class CustomerSales extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedTab: 'customersales',
            userExists: true,
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
            this.setState({ orders: result.orders });
        })
    }

    render() {
        return (
            <ImageBackground
                style={styles.backgroundStyle}
                source={require('../../img/greenbackground.jpg')}
            >

            <View>
                <Text style={styles.titleStyle}>
                    Find a Customer
                </Text>

                <Text style={styles.instructions}>
                    Search for a customer and figure out how much they are spending on your store! :)
                </Text>

                <FirstNameForm 
                    onChangeText={(firstName) => {
                        this.props.setFirstName(firstName);
                    }}
                    value={this.props.firstName}
                />

                <LastNameForm
                    onChangeText={(lastName) => {
                        this.props.setLastName(lastName);
                    }}
                    value={this.props.lastName}
                />

                <EmailForm
                    onChangeText={(email) => {
                        this.props.setEmail(email);
                    }}
                    value={this.props.email}
                />

                <View style={styles.buttonViewStyle}>
                    <SubmitButton 
                        onPress={() => {
                            var res = this.state.orders;
                            var custOrders = [];
                           
                            for(var x = 0; x < res.length; x++) {
                                if(res[x].customer !== undefined) {
                                    if(res[x].customer.first_name === this.props.firstName && res[x].customer.last_name === this.props.lastName) {
                                        custOrders.push(res[x]);
                                    }
                                    else if(res[x].customer.email === this.props.email) {
                                        custOrders.push(res[x]);
                                    }
                                }
                            }

                            if(custOrders.length !== 0) {
                                this.props.searchForCustomer(custOrders);
                            }
                            else {
                                this.setState({ userExists: false });
                            }
                        }}
                    />
                </View>

                {RenderIf(!this.state.userExists, 
                    <Text style={styles.error}>
                        Sorry that customer does not exist :(
                    </Text>
                )}
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
    },
    instructions: {
        fontSize: 14,
        paddingTop: 30,
        paddingBottom: 15,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonViewStyle: {
        paddingTop: 60
    },
    error: {
        paddingTop: 20,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#e60000'
    }
});

const mapStateToProps = state => {
    return {
        firstName: state.customersales.firstName,
        lastName: state.customersales.lastName,
        email: state.customersales.email
    }
};

export default connect(mapStateToProps, { setFirstName, setLastName, setEmail, searchForCustomer })(CustomerSales);
