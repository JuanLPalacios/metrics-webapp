import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import countries from './countries/countries';
import details from './details/details';

export default createStore(combineReducers({ countries, details }), applyMiddleware(thunk));
