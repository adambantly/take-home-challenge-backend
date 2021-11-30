import {
  Board,
  Difficulty,
  GameStatus,
  Player,
} from '@mapistry/take-home-challenge-shared';
import { useEffect, useRef, useState } from 'react';
import { begin, move } from '../api';

export const useGameStatus = () => {
  const [shouldBeginNewGame, setShouldBeginNewGame] = useState(true);
  const [difficulty, setDifficulty] = useState<Difficulty>(Difficulty.easy);
  const [gameStatus, setGameStatus] = useState<GameStatus | undefined>(
    undefined,
  );
  const [updatedBoard, setUpdatedBoard] = useState<Board | undefined>(
    undefined,
  );
  const [whoIsFirst, setWhoIsFirst] = useState<Player>(Player.human);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    if (shouldBeginNewGame) {
      const getNewGameStatus = async () => {
        const updatedStatus = await begin(difficulty, whoIsFirst);
        if (mounted.current) {
          setShouldBeginNewGame(false);
          setGameStatus(updatedStatus);
        }
      };
      getNewGameStatus();
    }
    return () => {
      mounted.current = false;
    };
  }, [difficulty, shouldBeginNewGame, whoIsFirst]);

  useEffect(() => {
    if (updatedBoard) {
      const getNewGameStatus = async () => {
        const updatedStatus = await move(updatedBoard, difficulty);
        if (mounted) {
          setUpdatedBoard(undefined);
          setGameStatus(updatedStatus);
        }
      };
      getNewGameStatus();
    }
  }, [difficulty, shouldBeginNewGame, updatedBoard, whoIsFirst]);

  return {
    beginNewGame: () => setShouldBeginNewGame(true),
    difficulty,
    gameStatus,
    setDifficulty,
    setWhoIsFirst,
    setUpdatedBoard,
    whoIsFirst,
  };
};
