import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IInitialState, IProduct } from './types';

const initialState: IInitialState = {} as IInitialState;

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<IProduct[]>) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const { actions } = productSlice;

export default productSlice.reducer;
