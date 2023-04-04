import { createSlice } from '@reduxjs/toolkit';

const tempoSlice = createSlice({
  name: 'tempo',
  initialState: {
    tempo: 135
  },
  reducers: {
    setTempo(state, action) {
      const value = action.payload;
      state.tempo = value;
    }
  }
});

export const tempoActions = tempoSlice.actions;

export default tempoSlice;