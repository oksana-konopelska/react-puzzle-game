import Tile from "../tile/Tile";
import { getCorrectPosition } from "../../util/gameUtils";
import { PositionType } from "../../shared/types";
import { BoardContainer } from "./Board.styled";

interface BoardProps {
  board: (number | null)[][];
  handleTileClick: (position: PositionType) => void;
}

export default function Board({ board, handleTileClick }: BoardProps) {
  let tiles = [];
  for (let i = 0; i < board.length; i++) {
    const row = board[i];
    for (let j = 0; j < row.length; j++) {
      const value = row[j];
      const { row: correctRow, col: correctCol } = getCorrectPosition(value);

      value !== null &&
        tiles.push(
          <Tile
            key={value}
            position={{ row: i, col: j }}
            value={value}
            handleTileClick={handleTileClick}
            isCorrect={i === correctRow && j === correctCol}
          />
        );
    }
  }
  return <BoardContainer>{tiles}</BoardContainer>;
}
