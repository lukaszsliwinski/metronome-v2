// imports
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './assets/css/global.css';

// components4
import Card from './components/Card';
import Header from './layouts/Header';
import Diode from './layouts/Diode';
import Tempo from './layouts/Tempo';
import Controls from './layouts/Controls';
import About from './layouts/About';

// redux
import { IRootState } from './store';
import { modeActions } from './store/modeSlice';

export default function Metronome() {
  // local state
  const [counter, setCounter] = useState(1);

  // global state
  const tempo = useSelector((state: IRootState) => state.tempo.tempo);
  const beats = useSelector((state: IRootState) => state.measure.beats);
  const notes = useSelector((state: IRootState) => state.measure.notes);
  const playing = useSelector((state: IRootState) => state.playing.playing);

  // dispatch functions from slices
  const dispatch = useDispatch();
  const setMode = (value: 'off' | 'red' | 'green') => dispatch(modeActions.setMode(value));

  // run metronome function
  const runMetronome = () => {
    counter === 1 ? setMode('red') : setMode('green');
    counter === beats ? setCounter(1) : setCounter(counter + 1);
  };

  // Metronome timer based on https://www.youtube.com/watch?v=x8PBWobv6NY
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout> | undefined;
    let interval = 240000 / tempo / notes;
    let expected = Date.now() + interval;

    // run metronome function in loop and adjust the time
    const round = () => {
      let drift = Date.now() - expected;
      if (drift > interval) {
        console.log('drift error');
      }
      runMetronome();
      expected += interval;
      timeout = setTimeout(round, interval - drift);
    };

    // run round function and handle interval change while playing state is true
    if (playing) {
      expected = Date.now() + interval;
      timeout = setTimeout(round, interval);
    }

    // stop playing
    if (timeout !== undefined) {
      return () => clearTimeout(timeout);
    }
  }, [playing, tempo, beats, notes, counter]);

  // reset counter on every play/pause click and measure change
  useEffect(() => {
    setCounter(1);
  }, [playing, beats, notes]);

  return (
    <div className="min-h-screen-mobile p-2">
      <div className="min-h-screen-mobile xs:min-h-fit xs:m-auto xs:max-w-sm w-full">
        <Card position="top">
          <Header />
        </Card>

        <Card>
          <Diode />
        </Card>

        <Card>
          <Tempo />
        </Card>

        <Card>
          <Controls />
        </Card>

        <Card position="bottom">
          <About />
        </Card>
      </div>
    </div>
  );
}
