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
      className="w-16 h-16 text-lime-700 hover:text-white border border-lime-700 hover:bg-lime-800 font-medium rounded-full text-sm p-2.5 text-center inline-flex justify-center items-center dark:border-lime-500 dark:text-lime-500 dark:hover:text-white dark:hover:bg-lime-600"
    >
      {playing ? <Pause className="w-5" /> : <Play className="ml-1 w-6" />}
    </button>
  );
}