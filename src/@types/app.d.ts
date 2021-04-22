import { Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';

import store from '@/redux/store';
import rootReducer from '@/redux/rootReducer';

declare global {
  type AppDispatch = typeof store.dispatch;
  type AppState = ReturnType<typeof rootReducer>;
  type AppThunk = ThunkAction<void, AppState, null, Action<string>>;
}
