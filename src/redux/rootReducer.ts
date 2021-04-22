import { combineReducers } from '@reduxjs/toolkit';

// Reducers
import shopifySlice from './features/shopifySlice/shopifySlice';

const rootReducer = combineReducers({
  shopifyStore: shopifySlice.reducer,
});

export default rootReducer;
