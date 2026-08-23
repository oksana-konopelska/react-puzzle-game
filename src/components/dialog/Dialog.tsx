
import Button from "../button/Button";
import { DialogContainer } from "./Dialog.styled";

interface DialogProps {
  handleShuffleClick: () => void;
}

export default function Dialog({ handleShuffleClick }: DialogProps) {
  return (
    <DialogContainer>
      <h2>Congratulations!</h2>
      <p>You win!</p>
      <Button title="Start New Game" handleShuffleClick={handleShuffleClick} />
    </DialogContainer>
  );
}
