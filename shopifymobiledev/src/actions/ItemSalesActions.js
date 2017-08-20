import { Actions } from 'react-native-router-flux';

export const searchForItem = (correctItems) => {
    return (dispatch) => {
        dispatch({
            type: 'search_for_item',
            payload: correctItems
        });

        Actions.correctitemdetails();
    }
};
