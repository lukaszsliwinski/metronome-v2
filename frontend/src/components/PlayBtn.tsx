// imports
import { useSelector, useDispatch } from 'react-redux';

// icons
import { ReactComponent as Play } from '../assets/svg/play.svg';
import { ReactComponent as Pause } from '../assets/svg/pause.svg';

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
      className="inline-flex h-16 w-16 items-center justify-center rounded-full border border-lime-500 p-2.5 text-center text-sm font-medium text-lime-500 hover:bg-lime-600 hover:text-white"
    >
      {playing ? <Pause className="w-5" /> : <Play className="ml-1 w-6" />}
    </button>
  );
}
