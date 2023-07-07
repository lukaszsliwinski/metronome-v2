// imports
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

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
      setColor('bg-red-500');
    } else if (mode === 'green') {
      setColor('bg-green-500');
    } else {
      setColor('bg-slate-700');
    }

    if (mode !== 'off') setTimeout(() => setMode('off'), 100);
  }, [mode]);

  return (
    <div className="flex w-full justify-center">
      <div className="mx-1 inline-flex h-16 w-16 items-center justify-center rounded-full border-2 border-slate-700">
        <div className={`${color} h-14 w-14 rounded-full`}></div>
      </div>
    </div>
  );
}
