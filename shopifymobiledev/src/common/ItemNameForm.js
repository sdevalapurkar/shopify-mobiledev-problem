import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet
} from 'react-native';

class ItemNameForm extends Component {
    render() {
        return (
            <View>
                <Text style={styles.nameStyle}>
                    Item Name 
                </Text>
                
                <View style={styles.cardStyle}>
                    <TextInput
                        style={{marginLeft: 5, marginRight: 5}}
                        placeholder="Aerodynamic Wooden Table"
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
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 15,
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
        height: 40
    }
});

export default ItemNameForm;
