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
    margin: 20,
  },
});

const FlashCardGame: FC<GameComponentProps & WithStyles<typeof styles>> = ({
  deck,
  onAbort,
  onDone,
  startData,
  classes,
}) => {
  const getStartCards = () => {
    if (startData) {
      return startData.cards;
    }

    return deck.notes.flatMap((note) => generateCards(note));
  };

  const [cards, setCards] = useState<GameResult['cards']>(getStartCards());

  const getStartIndex = () => {
    let index = 0;
    if (startData) {
      index = startData.cards.findIndex((card) => card.correctlyAnswered === undefined); // Find first un-answered card
    }

    return index < 0 ? 0 : index;
  };

  const [currentCardIndex, setCurrentCardIndex] = useState(getStartIndex());

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

  const onCardSelected = useCallback((index: number) => {
    setCurrentCardIndex(index);
  }, []);

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
        <GameProgress currentStepIndex={currentCardIndex} steps={steps} onCardSelected={onCardSelected} />
      </div>
    </div>
  );
};

export default withStyles(styles)(FlashCardGame);
