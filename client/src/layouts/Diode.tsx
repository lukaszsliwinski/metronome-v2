// imports
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../assets/css/diode.css';

// redux
import { IRootState } from '../store';
import { modeActions } from '../store/modeSlice';

export default function Diode() {
  // local state
  const [color, setColor] = useState('bg-slate-700');

  // global state
  const mode = useSelector((state: IRootState) => state.mode.mode);

  // dispatch functions from slices
  const dispatch = useDispatch();
  const setMode = (value: 'off' | 'red' | 'green') => dispatch(modeActions.setMode(value));

  // set light color and turn off after 100ms
  useEffect(() => {
    if (mode === 'red') {
      setColor('bg-red-600 diode-red-shadow');
    } else if (mode === 'green') {
      setColor('bg-lime-400 diode-green-shadow');
    } else {
      setColor('bg-slate-200');
    }

    if (mode !== 'off') setTimeout(() => setMode('off'), 100);
  }, [mode]);

  return (
    <div className="flex h-32 w-full items-center justify-center">
      <div className={`h-20 w-20 rounded-full ${color}`}></div>
    </div>
  );
}
