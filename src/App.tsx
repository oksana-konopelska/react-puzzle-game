import { useEffect, useState } from "react";

import {
  initiateBoard,
  shuffleBoard,
  isSolved,
  moveTiles,
} from "./util/gameUtils";
import GlobalStyle from "./Global";
import Board from "./components/board/Board";
import Button from "./components/button/Button";
import Dialog from "./components/dialog/Dialog";
import { PositionType } from "./shared/types";

function App() {
  const [board, setBoard] = useState(initiateBoard());
  const [isVictory, setIsVictory] = useState(false);

  useEffect(() => {
    if (isSolved(board)) {
      setTimeout(() => {
        setIsVictory(true);
      }, 400);
    }
  }, [board]);

  const handleTileClick = (position: PositionType) => {
    const newBoard = moveTiles([...board], position);
    setBoard(newBoard);
  };

  const handleShuffleClick = () => {
    setBoard(shuffleBoard([...board]));
    isVictory && setIsVictory(!isVictory);
  };

  return (
    <div className="app">
      <GlobalStyle />
      <div>
        <h1>N-Puzzle Game</h1>
        <Board board={board} handleTileClick={handleTileClick} />
        {isVictory ? (
          <Dialog handleShuffleClick={handleShuffleClick} />
        ) : (
          <Button title="Shuffle" handleShuffleClick={handleShuffleClick} />
        )}
      </div>
    </div>
  );
}

export default App;
