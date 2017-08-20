const INITIAL_STATE = {
    firstName: '',
    lastName: '',
    email: '',
    custOrders: []
};

export default (state = INITIAL_STATE, action) => {
    if(action.type === 'search_for_customer') {
        console.log(action.payload);
        return { ...state, custOrders: action.payload };
    }
    else if(action.type === 'set_first_name') {
        return { ...state, firstName: action.payload };
    }
    else if(action.type === 'set_last_name') {
        return { ...state, lastName: action.payload };
    }
    else if(action.type === 'set_email') {
        return { ...state, email: action.payload };
    }
    else {
        return state;
    }
};
