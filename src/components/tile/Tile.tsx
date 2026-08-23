import { PositionType } from "../../shared/types";
import { TileStyled } from "./Tile.styled";

interface TileProps {
  value: number | null;
  position: PositionType;
  isCorrect: boolean;
  handleTileClick: (position: PositionType) => void;
}

export default function Tile({
  value,
  position,
  isCorrect,
  handleTileClick,
}: TileProps) {
  const { row, col } = position;
  const top = `calc(var(--tile-size) * ${row})`;
  const left = `calc(var(--tile-size) * ${col})`;

  return (
    <TileStyled
      initial={{ top, left }}
      animate={{ top, left }}
      transition={{ top: { duration: 0.2 }, left: { duration: 0.2 } }}
      onClick={() => handleTileClick(position)}
      isCorrect={isCorrect}
    >
      {value}
    </TileStyled>
  );
}
