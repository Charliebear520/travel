
import { thunk } from 'redux-thunk';

import { configureStore } from '@reduxjs/toolkit';

import { combineReducers } from 'redux';
import favoritesReducer from './favoriteSlice';
import scheduleReducer from './scheduleSlice';
import addToScheduleReducer from './addToSchedule';

import storage from 'redux-persist/lib/storage'; // 使用 localStorage
import { persistReducer, persistStore } from 'redux-persist';

// 定義 persist 配置
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['favorites', 'schedule', 'addToSchedules'], // 需要持久化的 reducer
};

const rootReducer = combineReducers({
    favorites: favoritesReducer,
    schedule: scheduleReducer,
    addToSchedules: addToScheduleReducer,
    // 其他 reducers
  });
// 包裝 rootReducer 為 persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

  export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
            // 忽略 redux-persist 的動作
            ignoredActions: ['persist/PERSIST'],
        },
    }).concat(thunk),
  });

// 創建 persistor
export const persistor = persistStore(store);

// export const persistor = persistStore(store);
export default store;



