// imports
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// components
import TempoBtn from '../components/TempoBtn';

// icons
import { ReactComponent as Minus } from '../assets/svg/minus.svg';
import { ReactComponent as Plus } from '../assets/svg/plus.svg';

// redux
import { IRootState } from '../store';
import { tempoActions } from '../store/tempoSlice';

export default function Tempo() {
  // local state
  const [description, setDescription] = useState('Moderato');

  // global state
  const tempo = useSelector((state: IRootState) => state.tempo.tempo);

  // dispatch functions from slices
  const dispatch = useDispatch();
  const setTempo = (value: number) => dispatch(tempoActions.setTempo(value));

  // set description when tempo changes
  useEffect(() => {
    [
      [40, 44, 'Lento'],
      [45, 54, 'Largo'],
      [55, 64, 'Adagio'],
      [65, 72, 'Adagietto'],
      [73, 85, 'Andante'],
      [86, 97, 'Moderato'],
      [98, 108, 'Allegretto'],
      [109, 131, 'Allegro'],
      [132, 140, 'Vivace']
    ].forEach((item) => {
      if (tempo >= Number(item[0]) && tempo <= Number(item[1])) setDescription(String(item[2]));
    });
  }, [tempo]);

  // change tempo
  const changeTempo = (action: 'add' | 'sub') => {
    if (action === 'add' && tempo < 140) {
      setTempo(tempo + 1);
    } else if (action === 'sub' && tempo > 40) {
      setTempo(tempo - 1);
    }
  };

  return (
    <div className="flex h-48 w-full items-center justify-center">
      <div className="grid w-full grid-cols-4">
        <div className="flex items-center justify-center">
          <TempoBtn
            name="sub-tempo"
            onClick={() => changeTempo('sub')}
            icon={<Minus className="w-6" />}
          />
        </div>

        <div className="col-span-2 flex flex-col items-center justify-center">
          <div className="text-base font-light">
            <span className="text-5xl">{tempo}</span>&ensp;bpm
          </div>
          <div>{description}</div>
        </div>

        <div className="flex items-center justify-center">
          <TempoBtn
            name="add-tempo"
            onClick={() => changeTempo('add')}
            icon={<Plus className="w-6" />}
          />
        </div>

        <div className="col-span-4 mt-6 flex justify-center">
          <input
            type="range"
            min="40"
            max="140"
            value={tempo}
            step="1"
            onChange={(event) => setTempo(Number(event.target.value))}
            className="h-2 w-11/12 cursor-pointer accent-lime-800"
          />
        </div>
      </div>
    </div>
  );
}
