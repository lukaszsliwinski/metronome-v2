import React from 'react';
import ReactDOM from 'react-dom/client';
import Metronome from './Metronome';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Metronome />
  </React.StrictMode>
);

