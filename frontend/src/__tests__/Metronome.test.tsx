import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Metronome from '../Metronome';
import { Provider } from 'react-redux';
import store from '../store';

const user = userEvent.setup();

describe('Metronome', () => {
  test('Render home page', async () => {
    render(
      <Provider store={store}>
        <Metronome />
      </Provider>
    );

    // check if title and tempo are in the document
    expect(await screen.findByText(/metronome app/i)).toBeInTheDocument();
    expect(await screen.findByText(/90/i)).toBeInTheDocument();
    expect(await screen.findByText(/moderato/i)).toBeInTheDocument();
  });

  test('Check state changing', async () => {
    render(
      <Provider store={store}>
        <Metronome />
      </Provider>
    );

    // simulate user changing tempo
    const addTempoBtn = screen.findByRole('button', { name: /add-tempo/i });
    const subTempoBtn = screen.findByRole('button', { name: /sub-tempo/i });


    fireEvent.change(screen.getByRole('slider'), { target: { value: 140 }});
    user.click(await addTempoBtn);
    expect(screen.getByText(/140/i)).toBeInTheDocument();

    fireEvent.change(screen.getByRole('slider'), { target: { value: 40 }});
    user.click(await subTempoBtn);
    expect(screen.getByText(/40/i)).toBeInTheDocument();

    fireEvent.change(screen.getByRole('slider'), { target: { value: 109 }});
    expect(screen.getByText(/allegro/i)).toBeInTheDocument();

    user.click(await addTempoBtn);
    user.click(await subTempoBtn);
    user.click(await subTempoBtn);
    waitFor(() => {
      expect(screen.findByText(/allegretto/i)).toBeInTheDocument();
    });


    // simulate user changing measure
    const addBeatBtn = screen.findByRole('button', { name: /add-beat/i });
    const subBeatBtn = screen.findByRole('button', { name: /sub-beat/i });
    const addNoteBtn = screen.findByRole('button', { name: /add-note/i });
    const subNoteBtn = screen.findByRole('button', { name: /sub-note/i });

    user.click(await subBeatBtn);
    user.click(await subBeatBtn);
    user.click(await subBeatBtn);
    user.click(await subBeatBtn);

    user.click(await addBeatBtn);
    user.click(await addBeatBtn);

    user.click(await addNoteBtn);
    user.click(await addNoteBtn);

    user.click(await subNoteBtn);

    user.click(await addNoteBtn);
    
    waitFor(() => {
      expect(screen.getByText('3 / 8')).toBeInTheDocument();
    });

    // simulate user running metronome
    user.click(await screen.findByRole('button', { name: /start/i }));
    waitFor(() => {
      expect(screen.getByText(/stop/i)).toBeInTheDocument();
    });
  });
});
