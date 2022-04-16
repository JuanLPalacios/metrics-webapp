import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import countries from './countries/countries';
import details from './details/details';
import filter from './filter/filter';

export const VALUE_LIST = [
  'today_confirmed',
  'today_deaths',
  'today_new_confirmed',
  'today_new_deaths',
  'today_new_open_cases',
  'today_new_recovered',
  'today_open_cases',
  'today_recovered',
  'today_vs_yesterday_confirmed',
  'today_vs_yesterday_deaths',
  'today_vs_yesterday_open_cases',
  'today_vs_yesterday_recovered',
  'yesterday_confirmed',
  'yesterday_deaths',
  'yesterday_open_cases',
  'yesterday_recovered',
];

export default createStore(combineReducers({ countries, details, filter }), applyMiddleware(thunk));
