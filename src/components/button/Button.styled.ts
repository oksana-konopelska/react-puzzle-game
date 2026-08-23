import styled from "styled-components";

export const ButtonContainer = styled.button`
  background-color: var(--button-color);
  border: none;
  border-radius: 5px;
  padding: 10px 30px;
  font-size: 1.4rem;
  font-weight: 400;
  letter-spacing: 0.1rem;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
  margin: 0 auto;
  display: block;

  &:hover {
    background-color: var(--button-hover-color);
  }
`;
