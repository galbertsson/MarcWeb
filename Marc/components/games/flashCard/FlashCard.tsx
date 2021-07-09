import { Card, createStyles, withStyles, WithStyles } from '@material-ui/core';
import React, { useState } from 'react';

const TRANSITION_TIME = 0.3;

const styles = createStyles({
  card: {
    width: '100%',
    maxWidth: '800px',
    flex: 1,
    transition: `${TRANSITION_TIME}s ease-in-out`,
    justifySelf: 'center',
  },
  rotated: {
    transform: 'rotateX(180deg)',
  },
});

interface FlashCardProps extends WithStyles<typeof styles> {
  front: string;
  back: string;
}

const FlashCard = (props: FlashCardProps) => {
  const { front, back, classes } = props;
  const [isFlipped, setIsFlipped] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);

  const onFlipped = () => {
    setIsFlipping(true);
    setTimeout(() => {
      setIsFlipped(!isFlipped);
      setIsFlipping(false);
    }, (TRANSITION_TIME * 1000) / 2);
  };

  return (
    <Card className={`${classes.card} ${isFlipping ? classes.rotated : ''}`} onClick={onFlipped}>
      {isFlipped ? back : front}
    </Card>
  );
};

export default withStyles(styles)(FlashCard);
