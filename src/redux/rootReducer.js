import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import user from './user/userReducer';
import cart from './cart/cartReducer';
import directory from './directory/directoryReducer';
import shop from './shop/shopReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const rootReducer = combineReducers({ user, cart, directory, shop });

export default persistReducer(persistConfig, rootReducer);
