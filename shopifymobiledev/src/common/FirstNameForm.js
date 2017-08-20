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
                        style={{marginLeft: 5, marginRight: 5}}
                        placeholder="John"
                        placeholderTextColor="#003311"
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
        fontSize: 18,
        fontWeight: 'bold',
        paddingTop: 15,
        paddingLeft: 10
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
        height: 40
    }
});

export default FirstNameForm;
