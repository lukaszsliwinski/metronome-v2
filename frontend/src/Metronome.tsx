import { useState, useEffect, useRef } from 'react';
import './assets/global.css';

// components
import TempoBtn from './components/TempoBtn';
import PlayBtn from './components/PlayBtn';
import MeasureBtn from './components/MeasureBtn';

// icons
import { ReactComponent as Minus } from './assets/svg/minus.svg';
import { ReactComponent as Plus } from './assets/svg/plus.svg';
import { ReactComponent as Up } from './assets/svg/up.svg';
import { ReactComponent as Down } from './assets/svg/down.svg';

// import audio files
import click1 from './assets/audio/click1.mp3';
import click2 from './assets/audio/click2.mp3';

export default function Metronome() {
  // component state
  const [tempo, setTempo] = useState(135);
  const [description, setDescription] = useState('Vivace');
  const [beats, setBeats] = useState(4);
  const [notes, setNotes] = useState(4);
  const [counter, setCounter] = useState(1);
  const [playing, setPlaying] = useState(false);

  // ref to audio element
  let click = useRef<HTMLAudioElement>(null);

  // set description when tempo changes
  useEffect(() => {
    [
      [20, 39, "Grave"],
      [40, 44, "Lento"],
      [45, 54, "Largo"],
      [55, 64, "Adagio"],
      [65, 72, "Adagietto"],
      [73, 85, "Andante"],
      [86, 97, "Moderato"],
      [98, 108, "Allegretto"],
      [109, 131, "Allegro"],
      [132, 167, "Vivace"],
      [168, 177, "Presto"],
      [178, 250, "Prestissimo"]
    ].forEach((item) => {
      if (tempo >= Number(item[0]) && tempo <= Number(item[1])) setDescription(String(item[2]))
    });
  }, [tempo])

  // change tempo
  const changeTempo = (action: 'add' | 'sub') => {
    if (action === 'add' && tempo < 250) {
      setTempo(tempo + 1);
    } else if (action === 'sub' && tempo > 20) {
      setTempo(tempo - 1);
    };
  };

  // change measure - beats
  const changeBeats = (action: 'add' | 'sub') => {
    if (action === 'add' && beats < 12) {
      setBeats(beats + 1);
    } else if (action === 'sub' && beats > 1) {
      setBeats(beats - 1);
    };
  };

  // change measure - notes
  const changeNotes = (action: 'add' | 'sub') => {
    if (action === 'add' && notes < 8) {
      setNotes(notes * 2);
    } else if (action === 'sub' && notes > 1) {
      setNotes(notes / 2);
    };
  };

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
  }, [playing, tempo, notes, counter]);

  // reset counter on every play/apuse click
  useEffect(() => {
    setCounter(1);
  }, [playing]);

  return (
    <div className="min-h-screen-mobile text-sm font-medium dark:bg-gray-800 dark:text-gray-200">
                    {/* h-fit w-full */}
      <div className="backdrop-blur-md sm:m-auto sm:max-w-[30rem] sm:rounded-2xl sm:px-6 sm:py-16">
        <div className="flex">
          <TempoBtn onClick={() => changeTempo('sub')} icon={<Minus className="w-4" />} />
          <div>
            <span>{tempo}</span>
            <span>BMP</span>
          </div>
          <TempoBtn onClick={() => changeTempo('add')} icon={<Plus className="w-4" />} />
        </div>

        <input
          type="range"
          min="20"
          max="250"
          value={tempo}
          step="1"
          onChange={(event) => setTempo(Number(event.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />

        <div>{description}</div>

        <div className="flex justify-around">
          <div className="flex flex-col w-fit">
            <MeasureBtn onClick={() => changeBeats('add')} icon={<Up className="w-2"/>} />
            <MeasureBtn onClick={() => changeBeats('sub')} icon={<Down className="w-2"/>} />
          </div>
          <div>{beats} / {notes}</div>
          <div className="flex flex-col w-fit">
            <MeasureBtn onClick={() => changeNotes('add')} icon={<Up className="w-2"/>} />
            <MeasureBtn onClick={() => changeNotes('sub')} icon={<Down className="w-2"/>} />
          </div>

        </div>

        <PlayBtn playing={playing} setPlaying={setPlaying} />
        <audio ref={click}></audio>
      </div>
    </div>
  );
}
