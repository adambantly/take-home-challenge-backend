import { GameStatus, Player } from '@mapistry/take-home-challenge-shared';
import classNames from 'classnames';
import { Field } from './Field';
import '../styles/Board.css';

interface BoardProps {
  gameStatus: GameStatus;
  pickField: (boardIndex: number) => void;
  whoIsFirst: Player;
}

export const Board = ({ gameStatus, pickField, whoIsFirst }: BoardProps) => {
  const { board, winner, winningLine } = gameStatus;
  let winningLineString: string | undefined;
  if (winningLine?.column != null) {
    winningLineString = `c${winningLine.column}`;
  }
  if (winningLine?.diagonal != null) {
    winningLineString = `d${winningLine.diagonal}`;
  }
  if (winningLine?.row != null) {
    winningLineString = `r${winningLine.row}`;
  }
  // disabling all buttons when game is over to prevent further moves
  return (
    <fieldset className="Board" disabled={!!winner}>
      {/* giving context to button group to screen reader users */}
      <legend className="visually-hidden">
        TicTacToe fields, numbered 1 to 9 from left to right, top to bottom
      </legend>
      <div className="Board-grid-wrapper">
        <div className="Board-grid">
          {board.map((token, i) => (
            <Field
              // eslint-disable-next-line react/no-array-index-key
              key={`${token}${i}`}
              position={i + 1}
              token={token}
              onClick={() => pickField(i)}
              whoIsFirst={whoIsFirst}
            />
          ))}
        </div>
        {/* line that crosses through winning fields */}
        <div
          className={classNames('Board-line', {
            [`Board-line--${winningLineString}`]: !!winningLineString,
          })}
        />
      </div>
    </fieldset>
  );
};
