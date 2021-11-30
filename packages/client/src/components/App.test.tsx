/* eslint-disable @typescript-eslint/no-explicit-any */
import { _, GameStatus, Marker } from '@mapistry/take-home-challenge-shared';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { App } from './App';

const globalRef: any = global;
let mockData: GameStatus;

globalRef.fetch = jest.fn(() =>
  Promise.resolve({
    json: jest.fn(() => Promise.resolve(mockData)),
  }),
);

describe('App', () => {
  beforeEach(() => {
    mockData = {
      board: [_, _, _, _, _, _, _, _, _],
      winner: null,
    };
  });

  it('displays the initial board', async () => {
    render(<App />);
    await waitFor(() => {
      const difficulty = screen.getByText('How hard should the next game be?');
      expect(difficulty).toBeInTheDocument();
      const startButton = screen.getByText('Start New Game');
      expect(startButton).toBeInTheDocument();
      const status = screen.getByText("You're playing as: x");
      expect(status).toBeInTheDocument();
      const title = screen.getByText('Tic Tac Toe');
      expect(title).toBeInTheDocument();
      const whoPlaysFirst = screen.getByText('Who starts new games?');
      expect(whoPlaysFirst).toBeInTheDocument();
    });
  });

  it('should mark the board', async () => {
    render(<App />);
    const field3 = await waitFor<HTMLElement>(() =>
      screen.getByRole('button', { name: 'Field 3' }),
    );
    mockData = {
      board: [_, _, Marker.x, _, _, Marker.o, _, _, _],
      winner: null,
    };
    fireEvent.click(field3);

    await waitFor(() => {
      // player's mark
      expect(screen.getByText('x')).toBeVisible();
      // computer's mark
      expect(screen.getByText('o')).toBeVisible();
    });
  });

  it('should reset the game', async () => {
    mockData = {
      board: [_, _, Marker.x, _, _, Marker.o, _, _, _],
      winner: null,
    };
    render(<App />);
    await waitFor(() =>
      expect(screen.getByRole('button', { name: 'Field 3' })).toBeVisible(),
    );

    mockData = {
      board: [_, _, _, _, _, _, _, _, _],
      winner: null,
    };

    fireEvent.click(screen.getByText('Start New Game'));
    await waitFor(() => {
      expect(screen.queryByText('o')).toBeNull();
      expect(screen.queryByText('x')).toBeNull();
    });
  });
});
