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
      className="w-20 text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm p-2.5 text-center inline-flex justify-center items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
    >
      {playing ? <Pause className="w-5" /> : <Play className="w-6" />}
    </button>
  );
}