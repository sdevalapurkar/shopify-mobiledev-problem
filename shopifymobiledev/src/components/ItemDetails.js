import React, { Component } from 'react';
import {
    View,
    Text,
    ImageBackground,
    StyleSheet
} from 'react-native';
import { connect } from 'react-redux';

class ItemDetails extends Component {
    render() {
        return (
            <ImageBackground
                style={styles.backgroundStyle}
                source={require('../../img/greenbackground.jpg')}
            >

            <Text style={styles.titleStyle}>
                Item Sales
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
        paddingTop: 30,
        paddingBottom: 20,
        textAlign: 'center',
        color: '#003311'
    }
});

export default ItemDetails;
