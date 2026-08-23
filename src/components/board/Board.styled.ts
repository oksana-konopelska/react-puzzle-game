import styled from "styled-components";
import { NUMBER_OF_COLUMNS, NUMBER_OF_ROWS } from "../../config/config";

export const BoardContainer = styled.div`
  position: relative;
  margin: auto;
  background-color: var(--background-color);
  width: calc(${NUMBER_OF_COLUMNS} * var(--tile-size));
  height: calc(${NUMBER_OF_ROWS} * var(--tile-size));
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: 5px solid var(--background-color);
  border-radius: 5px;
  box-sizing: content-box;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`;
