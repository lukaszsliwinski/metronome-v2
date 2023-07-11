// imports
import { useSelector, useDispatch } from 'react-redux';

// components
import MeasureBtn from '../components/MeasureBtn';
import StartBtn from '../components/StartBtn';

// icons
import { ReactComponent as Up } from '../assets/svg/up.svg';
import { ReactComponent as Down } from '../assets/svg/down.svg';

// redux
import { IRootState } from '../store';
import { measureActions } from '../store/measureSlice';

export default function Controls() {
  // global state
  const beats = useSelector((state: IRootState) => state.measure.beats);
  const notes = useSelector((state: IRootState) => state.measure.notes);

  // dispatch functions from slices
  const dispatch = useDispatch();
  const setBeats = (value: number) => dispatch(measureActions.setBeats(value));
  const setNotes = (value: number) => dispatch(measureActions.setNotes(value));

  // change measure - beats
  const changeBeats = (action: 'add' | 'sub') => {
    if (action === 'add' && beats < 12) {
      setBeats(beats + 1);
    } else if (action === 'sub' && beats > 1) {
      setBeats(beats - 1);
    }
  };

  // change measure - notes
  const changeNotes = (action: 'add' | 'sub') => {
    if (action === 'add' && notes < 8) {
      setNotes(notes * 2);
    } else if (action === 'sub' && notes > 1) {
      setNotes(notes / 2);
    }
  };

  return (
    <div className="mt-16">
      <div className="grid grid-cols-4">
        <div className="flex flex-col items-end">
          <MeasureBtn name="add-beat" onClick={() => changeBeats('add')} icon={<Up className="w-3" />} />
          <MeasureBtn name="sub-beat" onClick={() => changeBeats('sub')} icon={<Down className="w-3" />} />
        </div>

        <div className="col-span-2 flex items-center justify-center">
          <div className="mb-2 text-4xl font-light">
            {beats} / {notes}
          </div>
        </div>

        <div className="flex flex-col">
          <MeasureBtn name="add-note" onClick={() => changeNotes('add')} icon={<Up className="w-3" />} />
          <MeasureBtn name="sub-note" onClick={() => changeNotes('sub')} icon={<Down className="w-3" />} />
        </div>

        <div className="col-span-4 mt-16 flex justify-center">
          <StartBtn />
        </div>
      </div>
    </div>
  );
}
