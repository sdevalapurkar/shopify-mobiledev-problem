import React, { Component } from 'react';
import {
    View,
    ImageBackground,
    Image,
    Text,
    StyleSheet,
    Platform
} from 'react-native';
import GetStartedButton from '../common/GetStartedButton.js';
import { Actions } from 'react-native-router-flux';

class WelcomeScreen extends Component {
    render() {
        return (
            <ImageBackground
                style={styles.backgroundStyle}
                source={require('../../img/greenbackground.jpg')}
            >

                <Text style={styles.welcomeTextStyle}>
                    STORE MAGNIFICO
                </Text>

                <View style={styles.titleStyle}>
                    <Image
                        style={styles.cartStyle}
                        source={require('../../img/cart.png')}
                    />
                </View>

                <Text style={styles.welcome2TextStyle}>
                    Sales Manager
                </Text>

                <GetStartedButton
                    onPress={() => {
                        if(Platform.OS === 'ios') {
                            Actions.tabview();
                        }
                        else if(Platform.OS === 'android') {
                            Actions.scrollabletabview();
                        }
                        
                    }}
                />

                <View style={styles.poweredViewStyle}>
                    <Text style={styles.poweredStyle}>
                        Powered By
                    </Text>
                </View>

                <View style={styles.logoViewStyle}>
                    <Image 
                        style={styles.shopifyLogoStyle}
                        source={require('../../img/shopifylogo.png')} 
                    />
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    backgroundStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: null,
        height: null,
        backgroundColor: 'rgba(0,0,0,0)'
    },
    welcomeTextStyle: {
        paddingTop: 60,
        paddingBottom: 6,
        fontSize: 30,
        fontWeight: 'bold',
        color: '#003311'
    },
    titleStyle: {
        paddingBottom: 10
    },
    cartStyle: {
        height: 80,
        width: 90
    },
    welcome2TextStyle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#003311',
        paddingBottom: 60
    },
    poweredViewStyle: {
        paddingTop: 60
    },
    poweredStyle: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold',
        color: 'black'
    },
    logoViewStyle: {
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 100
    },
    shopifyLogoStyle: {
        width: 100,
        height: 60
    }
});

export default WelcomeScreen;
