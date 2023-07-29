// imports
import { useSelector, useDispatch } from 'react-redux';

// redux
import { IRootState } from '../store';
import { playingActions } from '../store/playingSlice';

export default function PlayBtn() {
  // global state
  const playing = useSelector((state: IRootState) => state.playing.playing);

  // dispatch functions from slices
  const dispatch = useDispatch();
  const setPlaying = (value: boolean) => dispatch(playingActions.setPlaying(value));

  return (
    <button
      type="button"
      onClick={() => setPlaying(!playing)}
      className="inline-flex h-10 w-24 items-center justify-center rounded-lg border border-lime-500 p-2.5 text-center text-lg font-medium text-lime-500 hover:bg-lime-600 hover:text-white"
    >
      {playing ? 'STOP' : 'START'}
    </button>
  );
}
