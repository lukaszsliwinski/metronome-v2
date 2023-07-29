import { createSlice } from '@reduxjs/toolkit';

const modeSlice = createSlice({
  name: 'mode',
  initialState: {
    mode: 'green'
  },
  reducers: {
    setMode(state, action) {
      const value = action.payload;
      state.mode = value;
    }
  }
});

export const modeActions = modeSlice.actions;

export default modeSlice;
