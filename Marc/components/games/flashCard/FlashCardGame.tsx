import React, { useState, useMemo, useCallback, FC } from 'react';
import { Button, Card, createStyles, withStyles, WithStyles } from '@material-ui/core';
import { generateCards } from '../../../util/Notes/CardGenerator';
import GameProgress, { StepStatus } from '../GameProgress';
import { GameComponentProps, GameResult } from '../gameTypes';
import FlashCard from './FlashCard';

const styles = createStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  bottom: {
    marginBottom: 20,
  },
  cardContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    margin: 20
  }
});

const FlashCardGame: FC<GameComponentProps & WithStyles<typeof styles>> = ({ deck, onAbort, onDone, classes }) => {
  const [cards, setCards] = useState<GameResult['cards']>(deck.notes.flatMap((note) => generateCards(note)));
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const steps = useMemo(() => {
    return cards.map((card) => {
      let status = StepStatus.Pristine;

      if (card.correctlyAnswered) {
        status = StepStatus.Positive;
      } else if (card.correctlyAnswered === false) {
        status = StepStatus.Negative;
      }

      return { status };
    });
  }, [cards]);

  const updateCards = useCallback(
    (correctlyAnswered: boolean) => {
      const newCards = [...cards];
      newCards[currentCardIndex] = { ...newCards[currentCardIndex], correctlyAnswered };

      setCards(newCards);

      if (currentCardIndex !== cards.length - 1) {
        setCurrentCardIndex(currentCardIndex + 1);
      } else {
        onDone({ cards: newCards });
      }
    },
    [cards, currentCardIndex, onDone]
  );

  const onCardCorrect = useCallback(() => {
    updateCards(true);
  }, [updateCards]);

  const onCardIncorrect = useCallback(() => {
    updateCards(false);
  }, [updateCards]);

  return (
    <div className={classes.container}>
      <div className={classes.cardContainer}>
        <FlashCard front={cards[currentCardIndex].front} back={cards[currentCardIndex].back} />
      </div>
      <div className={classes.bottom}>
        <div className={classes.buttons}>
          <Button variant="contained" color="primary" onClick={onCardCorrect}>
            Correct
          </Button>
          <Button variant="contained" color="secondary" onClick={onCardIncorrect}>
            Incorrect
          </Button>
        </div>
        <GameProgress steps={steps} />
      </div>
    </div>
  );
};

export default withStyles(styles)(FlashCardGame);
