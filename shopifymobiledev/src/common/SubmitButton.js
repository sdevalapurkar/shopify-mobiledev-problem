import React, { Component } from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';

class SubmitButton extends Component {
    render() {
        return (
            <TouchableOpacity
                onPress={this.props.onPress}
                style={styles.button}
            >
                <Text style={styles.text}>
                    SUBMIT
                </Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        paddingBottom: 5,
        paddingTop: 5, 
        alignSelf: 'stretch',
        backgroundColor: '#006622',
        borderRadius: 5,
        marginLeft: 35,
        marginRight: 35,
        borderWidth: 3,
        borderColor: '#003311',
        borderBottomWidth: 3,
    },
    text: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 16,
        paddingTop: 10,
        paddingBottom: 10,
        fontWeight: 'bold'
    }
});

export default SubmitButton;