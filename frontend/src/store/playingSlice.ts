import { createSlice } from '@reduxjs/toolkit';

const playingSlice = createSlice({
  name: 'playing',
  initialState: {
    playing: false
  },
  reducers: {
    setPlaying(state, action) {
      const value = action.payload;
      state.playing = value;
    }
  }
});

export const playingActions = playingSlice.actions;

export default playingSlice;
