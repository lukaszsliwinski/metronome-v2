// imports
import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import './assets/global.css';

// components
import Tempo from './layouts/Tempo';
import Controls from './layouts/Controls';
import PlayBtn from './components/PlayBtn';

// import audio files
import click1 from './assets/audio/click1.mp3';
import click2 from './assets/audio/click2.mp3';

// redux
import { IRootState } from './store';

export default function Metronome() {
  // local state
  const [counter, setCounter] = useState(1);

  // global state
  const tempo = useSelector((state: IRootState) => state.tempo.tempo);
  const beats = useSelector((state: IRootState) => state.measure.beats);
  const notes = useSelector((state: IRootState) => state.measure.notes);
  const playing = useSelector((state: IRootState) => state.playing.playing);

  // ref to audio element
  let click = useRef<HTMLAudioElement>(null);

  // play click function
  const playClick = () => {
    if (click.current) {
      click.current.src = (counter === 1) ? click1 : click2;
      click.current.play();
    };
    (counter === beats) ? setCounter(1) : setCounter(counter + 1);
  };

  // Metronome timer based on https://www.youtube.com/watch?v=x8PBWobv6NY
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout> | undefined;
    let interval = 240000 / tempo / notes;
    let expected = Date.now() + interval;

    // run click function in loop and adjust the time
    const round = () => {
      let drift = Date.now() - expected;
      if (drift > interval) {
        console.log('drift error');
      };
      playClick();
      expected += interval;
      timeout = setTimeout(round, interval - drift);
    };

    // run round function and handle interval change while playing state is true
    if (playing) {
      expected = Date.now() + interval;
      timeout = setTimeout(round, interval)
    };

    // stop playing
    if (timeout !== undefined) {
      return () => clearTimeout(timeout);
    }
  }, [playing, tempo, beats, notes, counter]);

  // reset counter on every play/apuse click
  useEffect(() => {
    setCounter(1);
  }, [playing]);

  return (
    <div className="min-h-screen-mobile text-sm font-medium dark:bg-gray-800 dark:text-gray-200">
                    {/* h-fit w-full */}
      <div className="backdrop-blur-md sm:m-auto sm:max-w-[30rem] sm:rounded-2xl sm:px-6 sm:py-16">
        <Tempo />
        <Controls />
        <PlayBtn />
        <audio ref={click}></audio>
      </div>
    </div>
  );
}
