const INITIAL_STATE = {
    correctItems: []
};

export default (state = INITIAL_STATE, action) => {
    if(action.type === 'search_for_item') {
        return { ...state, correctItems: action.payload };
    }
    else {
        return state;
    }
};
