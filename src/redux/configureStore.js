import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import countries from './countries/countries';
import details from './details/details';
import filter from './filter/filter';

export default createStore(combineReducers({ countries, details, filter }), applyMiddleware(thunk));
