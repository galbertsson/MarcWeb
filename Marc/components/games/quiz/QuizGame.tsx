import React, { useState, useMemo, useCallback, FC } from 'react';
import { Button, Card, createStyles, withStyles, WithStyles } from '@material-ui/core';
import { generateCards } from '../../../util/Notes/CardGenerator';
import GameProgress, { StepStatus } from '../GameProgress';
import { GameComponentProps, GameResult } from '../gameTypes';

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

const QuizGame: FC<GameComponentProps & WithStyles<typeof styles>> = ({
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

    return deck.notes.flatMap((note) => generateCards(note)); // TODO: Remove the cloze notes?
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

  const onAnswerSelected = useCallback((answer: string) => {
    if (answer === cards[currentCardIndex].back) {
      // TODO: Correct
    } else {
      // Incorrect
    }
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.cardContainer}>
        <Card>
          Card front
        </Card>
      </div>
      <div className={classes.bottom}>
        <div className={classes.buttons}>
          
        </div>
        <GameProgress currentStepIndex={currentCardIndex} steps={steps} onCardSelected={onCardSelected} />
      </div>
    </div>
  );
};

export default withStyles(styles)(QuizGame);
