import { combineReducers } from 'redux';
import customersales from './CustomerSalesReducer.js';
import itemsales from './ItemSalesReducer.js';

export default combineReducers({
    customersales,
    itemsales
});
