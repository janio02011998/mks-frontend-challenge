import { combineReducers } from '@reduxjs/toolkit';

import productReducer from './product';
import toolsReducer from './tools';

const rootReducer = combineReducers({
  product: productReducer,
  tools: toolsReducer,
});

export default rootReducer;
