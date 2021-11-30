import { Board, Marker, Player } from '@mapistry/take-home-challenge-shared';

// return number of turns played so far
export const numberOfTurnsPlayed = (board: Board) =>
  board.reduce((sum, value) => (value ? sum + 1 : sum), 0);

// get the computer's marker
export const getComputerMarker = (whoIsFirst: Player) =>
  whoIsFirst === Player.computer ? Marker.x : Marker.o;

// get the human's marker
export const getHumanMarker = (whoIsFirst: Player) =>
  whoIsFirst === Player.human ? Marker.x : Marker.o;

// debugging helper method for printing boards to the console
export const printBoard = (board: Board, message: string) => {
  const testBoard = board.map((val) => val || '.');
  // eslint-disable-next-line no-console
  console.log(`
     ${message}
     ${testBoard.slice(0, 3).join('')}
     ${testBoard.slice(3, 6).join('')}
     ${testBoard.slice(6).join('')}`);
};
