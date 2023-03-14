import { useState, useEffect } from 'react';

export default function Metronome() {
  // local state
  const [tempo, setTempo] = useState(135);
  const [description, setDescription] = useState('Vivace');
  const [beats, setBeats] = useState(4);
  const [notes, setNotes] = useState(4);

  // set description when tempo changes
  useEffect(() => {
    [   // potwierdzić wartości
      [19, 39, "Grave"],
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
    if (action === 'add' && notes < 16) {
      setNotes(notes * 2);
    } else if (action === 'sub' && notes > 1) {
      setNotes(notes / 2);
    };
  };

  return (
    <>
      <div className="flex">
        <button onClick={() => changeTempo('sub')}>minus</button>
        <div>
          <span>{tempo}</span>
          <span>BMP</span>
        </div>
        <button onClick={() => changeTempo('add')}>plus</button>
      </div>

      <input type="range" min="20" max="250" value={tempo} step="1" onChange={(event) => setTempo(Number(event.target.value))} />

      <div>{description}</div>

      <div className="flex">
        <button onClick={() => changeBeats('sub')}>minus</button>
        <div>
          <span>{beats}</span>
          <span>b</span>
        </div>
        <button onClick={() => changeBeats('add')}>plus</button>
      </div>

      <div className="flex">
        <button onClick={() => changeNotes('sub')}>minus</button>
        <div>
          <span>{notes}</span>
          <span>n</span>
        </div>
        <button onClick={() => changeNotes('add')}>plus</button>
      </div>

    </>
  );
}
