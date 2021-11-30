import { useCallback } from 'react';
import { useGameStatus } from '../hooks/useGameStatus';
import { Board } from './Board';
import { StatusText } from './StatusText';
import { StartPlayerPicker } from './StartPlayerPicker';
import { DifficultyPicker } from './DifficultyPicker';
import { getHumanMarker } from '../utils/boardUtil';
import '../styles/Game.css';

export const Game = () => {
  const {
    beginNewGame,
    difficulty,
    gameStatus,
    setDifficulty,
    setUpdatedBoard,
    setWhoIsFirst,
    whoIsFirst,
  } = useGameStatus();

  // playing a field is the same as also the computer playing a field
  const pickField = useCallback(
    (index: number) => {
      const humanMarker = getHumanMarker(whoIsFirst);
      if (gameStatus?.board) {
        const updatedBoard = [...gameStatus.board];
        updatedBoard[index] = humanMarker;
        setUpdatedBoard(updatedBoard);
      }
    },
    [gameStatus?.board, setUpdatedBoard, whoIsFirst],
  );

  // TODO: This probably isn't the best experience. Maybe move it to StatusText?
  if (!gameStatus) {
    return (
      <h1>Loading...(are you sure you have the backend sever running?)</h1>
    );
  }

  return (
    <div className="Game">
      <h1 className="Game-title">Tic Tac Toe</h1>
      <div>
        <div className="Game-layout">
          <div className="Game-layout--status">
            <StatusText gameStatus={gameStatus} whoIsFirst={whoIsFirst} />
          </div>
          <div className="Game-layout--board">
            <Board
              gameStatus={gameStatus}
              pickField={pickField}
              whoIsFirst={whoIsFirst}
            />
          </div>
          <div className="Game-layout--button">
            <button
              className="Game-button"
              type="button"
              onClick={beginNewGame}
            >
              Start New Game
            </button>
          </div>
          <div className="Game-layout--options">
            <DifficultyPicker
              difficulty={difficulty}
              setDifficulty={setDifficulty}
            />
            <StartPlayerPicker
              setWhoIsFirst={setWhoIsFirst}
              whoIsFirst={whoIsFirst}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
