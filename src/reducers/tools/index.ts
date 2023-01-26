import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IInitialState } from './types';

const initialState: IInitialState = {} as IInitialState;

const toolSlice = createSlice({
  name: 'tools',
  initialState,
  reducers: {
    setSideBarStatus: (state, action: PayloadAction<boolean>) => ({
      ...state,
      isSideBarOpen: action.payload,
    }),
  },
});

export const { actions } = toolSlice;

export default toolSlice.reducer;
