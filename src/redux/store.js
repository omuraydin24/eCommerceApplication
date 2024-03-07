import {combineReducers, configureStore} from '@reduxjs/toolkit';

import common from './features/common';

import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['common'],
};

const nestedConfig = {
  key: 'auth',
  storage: AsyncStorage,
  whitelist: ['favoriteProducts', 'cartItems', 'cartItemCount'],
};

const rootReducer = combineReducers({
  common: persistReducer(nestedConfig, common),
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);

export default store;
