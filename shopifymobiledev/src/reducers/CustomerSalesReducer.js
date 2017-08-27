const INITIAL_STATE = {
    firstName: 'Napoleon',
    lastName: 'Batz',
    custOrders: []
};

export default (state = INITIAL_STATE, action) => {
    if(action.type === 'search_for_customer') {
        return { ...state, custOrders: action.payload };
    }
    else if(action.type === 'set_first_name') {
        return { ...state, firstName: action.payload };
    }
    else if(action.type === 'set_last_name') {
        return { ...state, lastName: action.payload };
    }
    else if(action.type === 'clear_names') {
        return { ...state };
    }
    else {
        return state;
    }
};
