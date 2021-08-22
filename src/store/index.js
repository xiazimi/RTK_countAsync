import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../pages/Counter/counterSlice';
import repoSlice from '../pages/Repo/repoSlice';
import logger from 'redux-logger';


const store = configureStore({
  reducer: {
    counter: counterReducer,
    repo: repoSlice,
  }, 
  middleware: (getDefaultMiddleware) => {
    console.log('getDefaultMiddleware()', getDefaultMiddleware().prepend('头部添加'));
    console.log('getDefaultMiddleware()', getDefaultMiddleware().concat('尾部添加'));

    return getDefaultMiddleware().concat(logger);
  },
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState: {
    counter: {
      count: 0, 
    }, 
    repo: {
      mostStarRepo: {}
    }
  }
});

export default store;