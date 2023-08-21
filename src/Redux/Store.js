import {combineReducers, configureStore,getDefaultMiddleware} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TaskSlice from './TaskSlice';
import ArchiveSlice from './ArchiveSlice';
import CompletedSlice from './CompletedSlice';

const rootReducer = combineReducers({
  tasks: TaskSlice ,
  archives: ArchiveSlice,
  completed: CompletedSlice,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);