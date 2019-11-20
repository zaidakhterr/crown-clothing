import { combineReducers } from 'redux';
import user from './userReducers';
import cart from './cartReducers';

export default combineReducers({ user, cart });
