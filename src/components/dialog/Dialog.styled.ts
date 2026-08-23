import styled from "styled-components";

export const DialogContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--background-color);
  color: black;
  text-align: center;
  padding: 20px;

  h2 {
    margin: 0 0 20px;
    font-size: 2em;
    font-weight: 600;
  }

  p {
    margin: 0 0 20px;
    font-size: 1.5em;
    font-weight: 400;
    margin-bottom: 60px;
  }
`;
