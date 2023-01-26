import { combineReducers } from '@reduxjs/toolkit';

import productReducer from './product';

const rootReducer = combineReducers({
  product: productReducer,
});

export default rootReducer;
