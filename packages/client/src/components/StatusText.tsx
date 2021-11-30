import {
  GameStatus,
  Player,
  Winner,
} from '@mapistry/take-home-challenge-shared';
import {
  getComputerMarker,
  getHumanMarker,
  numberOfTurnsPlayed,
} from '../utils/boardUtil';

interface StatusTextProps {
  gameStatus: GameStatus;
  whoIsFirst: Player;
}

// aria-live region to read changes to the screen reader to inform about computer moves.
// Each move is announced by player move, then computer move, eg: "X 5, O 9"
export const StatusText = ({ gameStatus, whoIsFirst }: StatusTextProps) => {
  const { board, winner } = gameStatus;
  const computerMarker = getComputerMarker(whoIsFirst);
  const humanMarker = getHumanMarker(whoIsFirst);

  let statusText = `You're playing as: ${humanMarker}`;

  if (winner) {
    if (winner === Winner.tie) {
      statusText = 'We have a tie!';
    } else {
      statusText = `${winner === computerMarker ? 'The computer' : 'You'} won!`;
    }
  }

  const moveList = board
    .map((field, i) => [field, i])
    // sorting to always announce the player's move first
    .sort((a) => (a[0] === computerMarker ? 1 : -1));

  return (
    <div aria-live="polite">
      {numberOfTurnsPlayed(board) === 0 && (
        <span className="visually-hidden">A new game started</span>
      )}
      {moveList
        // for some reason the sort method creates a union type instead of
        // keeping the tuple type so we need an extra type narrowing step
        .map(([field, i]) => (
          <span className="visually-hidden" key={`${field}${i}`}>
            {field && typeof i === 'number' ? `${field} ${i + 1}` : ''}
          </span>
        ))}
      <span>{statusText}</span>
    </div>
  );
};
