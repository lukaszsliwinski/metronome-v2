import { createSlice } from '@reduxjs/toolkit';

const measureSlice = createSlice({
  name: 'measure',
  initialState: {
    beats: 4,
    notes: 4
  },
  reducers: {
    setBeats(state, action) {
      const value = action.payload;
      state.beats = value;
    },
    setNotes(state, action) {
      const value = action.payload;
      state.notes = value;
    }
  }
});

export const measureActions = measureSlice.actions;

export default measureSlice;
