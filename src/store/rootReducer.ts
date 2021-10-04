import {combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';
import countReducer from './count/countReducer';
import quoteReducer from './quote/quoteReducer';
import todoReducer from './todo/todoReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['all', 'active', 'complete'],
};

const rootReducer = combineReducers({
  countReducer,
  quoteReducer,
  todoReducer: persistReducer(persistConfig, todoReducer),
});
export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
