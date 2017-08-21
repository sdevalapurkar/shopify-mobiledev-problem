import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet
} from 'react-native';

class FirstNameForm extends Component {
    render() {
        return (
            <View>
                <Text style={styles.nameStyle}>
                    First Name 
                </Text>
                
                <View style={styles.cardStyle}>
                    <TextInput
                        style={{marginLeft: 5, marginRight: 5, color: '#f2f2f2'}}
                        placeholder="John"
                        placeholderTextColor="#f2f2f2"
                        underlineColorAndroid='rgba(0,0,0,0)'
                        onChangeText={this.props.onChangeText}
                        value={this.props.value}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    nameStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 15,
        paddingLeft: 10,
        color: '#003300'
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
        height: 50
    }
});

export default FirstNameForm;
