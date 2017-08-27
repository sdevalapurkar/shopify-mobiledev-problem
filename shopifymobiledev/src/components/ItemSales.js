import React, { Component } from 'react';
import {
    ImageBackground,
    StyleSheet,
    View,
    Text,
    Platform
} from 'react-native';
import { searchForItem, clearItem } from '../actions';
import { connect } from 'react-redux';
import ItemNameForm from '../common/ItemNameForm.js';
import SubmitButton from '../common/SubmitButton.js';
import RenderIf from '../common/RenderIf.js';

class ItemSales extends Component {
    constructor(props) {
        super(props);

        this.state = {
            orders: [],
            itemName: 'Awesome Bronze Bag',
            itemExists: true
        }
    }

    componentWillMount() {
        fetch('https://shopicruit.myshopify.com/admin/orders.json?page=1&access_token=c32313df0d0ef512ca64d5b336a0d7c6')
        .then((response) => {
            return response;
        })
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            this.setState({ orders: result.orders });
        })
    }

    render() {
        return (
            <ImageBackground
                style={styles.backgroundStyle}
                source={require('../../img/greenbackground.jpg')}
            >

            <View>
                <Text style={styles.titleStyle}>
                    Find an Item
                </Text>

                <Text style={styles.instructions}>
                    Search for an item and figure out how many of that item have been sold! :)
                </Text>

                <ItemNameForm 
                    onChangeText={(itemName) => {
                        this.setState({ itemName })
                    }}
                    value={this.state.itemName}
                />

                <View style={styles.buttonViewStyle}>
                    <SubmitButton 
                        onPress={() => {
                            var res = this.state.orders;
                            var correctItems = [];

                            for(var x = 0; x < res.length; x++) {
                                for(var y = 0; y < res[x].line_items.length; y++) {
                                    if(res[x].line_items[y].title === this.state.itemName) {
                                        correctItems.push(res[x].line_items[y]);
                                    }
                                }
                            }

                            if(correctItems.length !== 0) {
                                this.setState({ itemExists: true });
                                this.props.searchForItem(correctItems);
                            }
                            else {
                                this.setState({ itemExists: false });
                            }
                        }}
                    />
                </View>

                {RenderIf(!this.state.itemExists, 
                    <Text style={styles.error}>
                        Sorry that item does not exist :(
                    </Text>
                )}
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
    titleStyle: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#003311',
        ...Platform.select({
            android: {
                paddingTop: 60
            }
        }),
        ...Platform.select({
            ios: {
                paddingTop: 30
            }
        })
    },
    instructions: {
        fontSize: 14,
        paddingTop: 10,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#003311'
    },
    buttonViewStyle: {
        paddingTop: 40
    },
    error: {
        paddingTop: 20,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#e60000'
    }
});

export default connect(null, { searchForItem, clearItem })(ItemSales);
