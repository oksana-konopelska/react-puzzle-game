import {
  NUMBER_OF_COLUMNS,
  NUMBER_OF_ROWS,
  SHUFFLE_MULTIPLIER,
} from "../config/config";
import { BoardType, PositionType } from "../shared/types";

export const initiateBoard = (): BoardType => {
  const board: BoardType = Array.from({ length: NUMBER_OF_ROWS }, (_, i) =>
    Array.from(
      { length: NUMBER_OF_COLUMNS },
      (_, j) => i * NUMBER_OF_COLUMNS + j + 1
    )
  );

  board[NUMBER_OF_ROWS - 1][NUMBER_OF_COLUMNS - 1] = null;
  return shuffleBoard(board);
};

//Shuffles the board by making a series of random valid moves
export const shuffleBoard = (board: BoardType): BoardType => {
  let newBoard = board;
  let previousBoard: BoardType;
  const randomMovesCount =
    SHUFFLE_MULTIPLIER * NUMBER_OF_COLUMNS * NUMBER_OF_ROWS;

  do {
    previousBoard = newBoard.map((row) => row.slice());

    for (let i = 0; i < randomMovesCount; i++) {
      const validMoves = getValidMoves(newBoard);

      const move = validMoves[Math.floor(Math.random() * validMoves.length)];
      newBoard = moveTiles(newBoard, move);
    }
    // Checks if the board has changed and is not solved
  } while (areBoardsEqual(newBoard, previousBoard) || isSolved(newBoard));

  return newBoard;
};

const getValidMoves = (board: BoardType): PositionType[] => {
  const nullPosition = findNullPosition(board);
  if (!nullPosition) return [];

  const { row, col } = nullPosition;
  const moves: PositionType[] = [];

  // All valid horizontal moves
  for (let c = 0; c < board[0].length; c++) {
    if (c !== col) moves.push({ row, col: c });
  }
  // All valid vertical moves
  for (let r = 0; r < board.length; r++) {
    if (r !== row) moves.push({ row: r, col });
  }

  return moves;
};

export const findNullPosition = (board: BoardType): PositionType | null => {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      if (board[row][col] === null) {
        return { row, col };
      }
    }
  }
  return null;
};

export const isSolved = (board: BoardType): boolean => {
  return board.every((row, rowIndex) =>
    row.every((value, colIndex) => {
      const { row: targetRow, col: targetCol } = getCorrectPosition(value);
      return rowIndex === targetRow && colIndex === targetCol;
    })
  );
};

export const getCorrectPosition = (value: number | null): PositionType => {
  if (value === null)
    return { row: NUMBER_OF_ROWS - 1, col: NUMBER_OF_COLUMNS - 1 };
  const row = Math.floor((value - 1) / NUMBER_OF_COLUMNS);
  const col = (value - 1) % NUMBER_OF_COLUMNS;
  return { row, col };
};

const areBoardsEqual = (board1: BoardType, board2: BoardType): boolean => {
  return board1.every((row, rowIndex) =>
    row.every((value, colIndex) => value === board2[rowIndex][colIndex])
  );
};

export const moveTiles = (board: BoardType, position: PositionType) => {
  const { row, col } = position;
  const nullPosition = findNullPosition(board);
  const newBoard = board.map((row) => row.slice());

  // Move tiles vertically if in the same column
  if (col === nullPosition?.col) {
    if (row < nullPosition.row) {
      for (let i = nullPosition.row; i > row; i--) {
        newBoard[i][col] = newBoard[i - 1][col];
      }
    } else if (row > nullPosition.row) {
      for (let i = nullPosition.row; i < row; i++) {
        newBoard[i][col] = newBoard[i + 1][col];
      }
    }
    newBoard[row][col] = null;
  }

  // Move tiles horizontally if in the same row
  if (row === nullPosition?.row) {
    if (col < nullPosition.col) {
      for (let i = nullPosition.col; i > col; i--) {
        newBoard[row][i] = newBoard[row][i - 1];
      }
    } else if (col > nullPosition.col) {
      for (let i = nullPosition.col; i < col; i++) {
        newBoard[row][i] = newBoard[row][i + 1];
      }
    }
    newBoard[row][col] = null;
  }
  return newBoard;
};
