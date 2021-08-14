import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
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
      <DialogTitle>Game done!</DialogTitle>
      <DialogContent>
        <div>
          {correctlyAnswered} / {gameResult.cards.length} card correct!
        </div>
      </DialogContent>
      <DialogActions>
        <Button color="primary" variant="contained" onClick={onRestart}>
          Play Again
        </Button>
        <Button color="primary" variant="contained" onClick={onReplay}>
          Replay incorrect cards
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default GameResultModal;
