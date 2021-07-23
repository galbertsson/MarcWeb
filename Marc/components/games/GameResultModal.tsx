import { Button, Dialog, DialogActions } from '@material-ui/core';
import React from 'react';
import { GameResult } from './gameTypes';

interface GameResultModalProps {
  onReplay: () => void;
  onRestart: () => void;
  gameResult: GameResult;
}

const GameResultModal = (props: GameResultModalProps) => {
  const { gameResult, onReplay, onRestart } = props;
  const correctlyAnswered = gameResult.cards.reduce((prevValue, card) => {
    return prevValue + (card.correctlyAnswered ? 1 : 0);
  }, 0);

  return (
    <Dialog open={true}>
      <div>
        Result
        {correctlyAnswered} / {gameResult.cards.length}
      </div>
      <DialogActions>
        <Button onClick={onRestart}>Play Again</Button>
        <Button onClick={onReplay}>Replay incorrect cards</Button>
      </DialogActions>
    </Dialog>
  );
};

export default GameResultModal;
