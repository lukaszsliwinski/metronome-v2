// icons
import { ReactComponent as Play } from '../assets/svg/play.svg';
import { ReactComponent as Pause } from '../assets/svg/pause.svg';


// tymczasowo - dodać redux
import { Dispatch, SetStateAction } from "react";

export default function PlayBtn({ playing, setPlaying }: {playing: boolean, setPlaying: Dispatch<SetStateAction<boolean>>}) {
  return (
    <button
      type="button"
      onClick={() => setPlaying(!playing)}
      className="w-10 text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex justify-center items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
    >
      {playing ? <Pause className="w-2.5 mx-px" /> : <Play className="w-3" />}
    </button>
  );
}