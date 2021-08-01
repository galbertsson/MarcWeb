import React, { useState, useMemo, useCallback, FC } from 'react';
import { Card, createStyles, withStyles, WithStyles } from '@material-ui/core';
import { generateCards } from '../../../util/Notes/CardGenerator';
import GameProgress, { StepStatus } from '../GameProgress';
import { GameComponentProps, GameResult } from '../gameTypes';
import shuffle from '../../../util/shuffle';

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
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 20,
  },
  answerAlternatives: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    cursor: 'pointer'
  },
  answerAlternative: {
    margin: 5,
    padding: 10,
  },
  questionCard: {
    flex: 1,
    margin: 5,
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

    const cards = deck.notes.flatMap((note) => generateCards(note));

    const cardsWithAnswers = cards.map((card, cardIndex) => {
      const alternatives: string[] = [];
      if (cards.length < 4) {
        alternatives.push(...cards.map((card) => card.back));
      } else {
        const indexes = Array.from(Array(cards.length).keys());
        indexes.splice(cardIndex, 1); // Remove the current card so it cannot be randomly picked twice
        alternatives.push(card.back);

        // Pick 3 unique random cards
        for (let i = 0; i < 3; i++) {
          const randomIndex = indexes[Math.floor(Math.random() * indexes.length)];
          alternatives.push(cards[randomIndex].back);
          indexes.splice(randomIndex, 1);
        }
      }

      // Shuffel answer alternatives
      const answerAlternatives = shuffle(alternatives);

      return {
        ...card,
        answerAlternatives,
      };
    });

    return cardsWithAnswers;
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

  const onCardSelected = useCallback((index: number) => {
    setCurrentCardIndex(index);
  }, []);

  const onAnswerSelected = useCallback(
    (answer: string) => {
      if (answer === cards[currentCardIndex].back) {
        updateCards(true);
      } else {
        updateCards(false);
      }
    },
    [cards, currentCardIndex, updateCards]
  );

  return (
    <div className={classes.container}>
      <div className={classes.cardContainer}>
        <Card className={classes.questionCard}>{cards[currentCardIndex].front}</Card>
        <div className={classes.answerAlternatives}>
          {cards[currentCardIndex].answerAlternatives?.map((alternative, index) => (
            <Card className={classes.answerAlternative} onClick={() => onAnswerSelected(alternative)} key={index}>
              {alternative}
            </Card>
          ))}
        </div>
      </div>
      <div className={classes.bottom}>
        <div className={classes.buttons}></div>
        <GameProgress currentStepIndex={currentCardIndex} steps={steps} onCardSelected={onCardSelected} />
      </div>
    </div>
  );
};

export default withStyles(styles)(QuizGame);
