
import { thunk } from 'redux-thunk';
// import storage from 'redux-persist/lib/storage';
// import { persistReducer,persistStore } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
// import favReducer from '@/redux/favoriteSlice';
// import scheduleReducer from '@/redux/scheduleSlice';
// import collectReducer from '@/redux/collectionSlice'

import { combineReducers } from 'redux';
import favoritesReducer from './favoriteSlice';
import scheduleReducer from './scheduleSlice';

// Data Persist Config
// const persistConfig = {
//    key: 'root',
//    storage: storage,
//  };



// const persistedFavReducer = persistReducer(persistConfig, favReducer);
// const persistedScheduleReducer = persistReducer(persistConfig, scheduleReducer);
// const persistedCollectReducer = persistReducer(persistConfig, collectReducer);

// const rootReducer = {
//   favorite: persistedFavReducer,
//   schedule: persistedScheduleReducer,
//   collection: persistedCollectReducer,
// };

const rootReducer = combineReducers({
    favorites: favoritesReducer,
    schedule: scheduleReducer,
    // 其他 reducers
  });

  export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(thunk),
  });

// export const persistor = persistStore(store);
export default store;



