import React, { Component } from 'react';
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    Platform
} from 'react-native';
import { connect } from 'react-redux';

class ItemDetails extends Component {
    render() {
        let quantity = 0;
        for(var x = 0; x < this.props.correctItems.length; x++) {
            quantity += this.props.correctItems[x].quantity;
        }

        return (
            <ImageBackground
                style={styles.backgroundStyle}
                source={require('../../img/greenbackground.jpg')}
            >

            <Text style={styles.titleStyle}>
                Item Sales
            </Text>

            <View style={styles.cardStyle}>
                <Text style={styles.firstNameStyle}>
                    {this.props.correctItems[0].title}
                </Text>
            </View>

            <Text style={styles.spentTextStyle}>
                Total Items Sold:
            </Text>

            <Text style={styles.spentStyle}>
                {quantity}
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
    titleStyle: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingBottom: 20,
        textAlign: 'center',
        color: '#003311',
        ...Platform.select({
            ios: {
                paddingTop: 30
            },
            android: {
                paddingTop: 10
            }
        })
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
        height: 65
    },
    firstNameStyle: {
        fontSize: 22,
        fontWeight: 'bold',
        paddingTop: 15,
        paddingLeft: 10,
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
    }
});

const mapStateToProps = state => {
    return {
        correctItems: state.itemsales.correctItems
    };
};

export default connect(mapStateToProps, {  })(ItemDetails);
