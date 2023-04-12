import { configureStore } from '@reduxjs/toolkit';
import tempoSlice from './tempoSlice';
import playingSlice from './playingSlice';
import measureSlice from './measureSlice';

const store = configureStore({
  reducer: {
    tempo: tempoSlice.reducer,
    measure: measureSlice.reducer,
    playing: playingSlice.reducer
  }
});

export type IRootState = ReturnType<typeof store.getState>;

export default store;
