import { ButtonContainer } from "./Button.styled";

interface ButtonProps {
  title: string;
  handleShuffleClick: () => void;
}

export default function Button({ title, handleShuffleClick }: ButtonProps) {
  return (
    <ButtonContainer onClick={handleShuffleClick}>{title}</ButtonContainer>
  );
}
