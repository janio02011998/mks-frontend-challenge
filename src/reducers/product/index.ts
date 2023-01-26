import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IInitialState, IShoppingCart } from './types';

const initialState: IInitialState = {
  shoppingCart: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setShoppingCart: (state, action: PayloadAction<IShoppingCart[]>) => ({
      ...state,
      shoppingCart: action.payload,
    }),
  },
});

export const { actions } = productSlice;

export default productSlice.reducer;
