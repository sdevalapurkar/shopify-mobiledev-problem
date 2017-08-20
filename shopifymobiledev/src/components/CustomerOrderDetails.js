import React, { Component } from 'react';
import {
    View,
    Text,
    ImageBackground,
    StyleSheet
} from 'react-native';
import { connect } from 'react-redux';

class CustomerOrderDetails extends Component {
    render() {
        console.log(this.props.custOrders);

        return (
            <ImageBackground
                style={styles.backgroundStyle}
                source={require('../../img/greenbackground.jpg')}
            >

                <Text style={styles.titleStyle}>
                    Customer Sales
                </Text>

                <View style={styles.nameViewStyle}>
                    <Text style={styles.firstNameStyle}>
                        {this.props.firstName }
                    </Text>

                    <Text style={styles.lastNameStyle}>
                        {this.props.lastName}
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
    nameViewStyle: {
        paddingTop: 15,
        flexDirection: 'row'
    },
    firstNameStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingTop: 15,
        paddingLeft: 10
    },
    lastNameStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingTop: 15,
        paddingLeft: 5
    },
    titleStyle: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingTop: 30,
        textAlign: 'center',
        color: '#003311'
    }
});

const mapStateToProps = state => {
    return {
        firstName: state.customersales.firstName,
        lastName: state.customersales.lastName,
        custOrders: state.customersales.custOrders
    };
};

export default connect(mapStateToProps, {  })(CustomerOrderDetails);
