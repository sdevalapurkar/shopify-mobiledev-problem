import { Actions } from 'react-native-router-flux';

export const setFirstName = (firstName) => {
    return {
        type: 'set_first_name',
        payload: firstName
    };
};

export const setLastName = (lastName) => {
    return {
        type: 'set_last_name',
        payload: lastName
    };
};

export const setEmail = (email) => {
    return {
        type: 'set_email',
        payload: email
    };
};

export const searchForCustomer = (custOrders) => {
    return (dispatch) => {
        dispatch({
            type: 'search_for_customer',
            payload: custOrders
        });

        Actions.custorderdetails();
    }
};

export const clearNames = () => {
    return {
        type: 'clear_names'
    };
};
