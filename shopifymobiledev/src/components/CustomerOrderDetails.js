import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import { connect } from 'react-redux';

class CustomerOrderDetails extends Component {
    render() {
        console.log(this.props.firstName);

        return (
            <View>
                <Text>{this.props.firstName}</Text>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        firstName: state.customersales.firstName,
        lastName: state.customersales.lastName,
        custOrders: state.customersales.custOrders
    };
};

export default connect(mapStateToProps, {  })(CustomerOrderDetails);
