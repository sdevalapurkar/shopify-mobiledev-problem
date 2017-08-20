import React, { Component } from 'react';
import {
    View,
    Text,
    ImageBackground,
    StyleSheet
} from 'react-native';
import { connect } from 'react-redux';

class CustomerOrderDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            totalSpent: 0,
            itemsPurchased: 0
        }
    }
    
    componentWillMount() {
        var totalOrderCost = 0;
        var numItems = 0;

        for(var x = 0; x < this.props.custOrders.length; x++) {
            totalOrderCost = (1 * totalOrderCost) + (1 * this.props.custOrders[x].total_price);

            numItems = (1 * numItems) + (1 * this.props.custOrders[x].line_items.length);
        }

        this.setState({ itemsPurchased: numItems });
        this.setState({ totalSpent: totalOrderCost });
    }

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

                <View style={styles.cardStyle}>
                    <Text style={styles.firstNameStyle}>
                        {`${this.props.custOrders[0].customer.first_name} ${this.props.custOrders[0].customer.last_name}`}
                    </Text>

                    <Text style={styles.emailStyle}>
                        {this.props.custOrders[0].email}
                    </Text>
                </View>

                <Text style={styles.spentTextStyle}>
                    Total Items Purchased:
                </Text>

                <Text style={styles.spentStyle}>
                    {this.state.itemsPurchased}
                </Text>

                <Text style={styles.spentTextStyle}>
                    Total Amount Spent:
                </Text>

                <Text style={styles.spentStyle}>
                    {'$ ' + this.state.totalSpent}
                </Text>
                
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
    firstNameStyle: {
        fontSize: 22,
        fontWeight: 'bold',
        paddingTop: 15,
        paddingLeft: 10,
        color: '#003311'
    },
    emailStyle: {
        fontSize: 16,
        paddingLeft: 10,
        color: '#003311'
    },
    titleStyle: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingTop: 30,
        paddingBottom: 20,
        textAlign: 'center',
        color: '#003311'
    },
    spentTextStyle: {
        fontSize: 18,
        paddingTop: 25,
        paddingLeft: 10,
        fontWeight: 'bold',
        color: '#003311'
    },
    spentStyle: {
        fontSize: 40,
        fontWeight: 'bold',
        paddingLeft: 10,
        color: '#003311'
    },
    cardStyle: {
        borderWidth: 3,
        borderRadius: 2,
        borderColor: '#003311',
        borderBottomWidth: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        height: 85
    }
});

const mapStateToProps = state => {
    return {
        custOrders: state.customersales.custOrders
    };
};

export default connect(mapStateToProps, {  })(CustomerOrderDetails);
