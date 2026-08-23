import styled from "styled-components";
import { motion } from "framer-motion";

interface TileStyledProps {
  isCorrect: boolean;
}

export const TileStyled = styled(motion.button)<TileStyledProps>`
  position: absolute;
  width: var(--tile-size);
  height: var(--tile-size);
  background-color: ${({ isCorrect }) =>
    isCorrect ? "var(--tile-correct-color)" : "var(--tile-color)"};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8em;
  font-weight: 400;
  border: 2px solid var(--background-color);
  border-radius: 5px;
  box-sizing: border-box;
  cursor: pointer;
  transition: background-color 0.3s;
`;
