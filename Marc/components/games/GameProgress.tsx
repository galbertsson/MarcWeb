import { createStyles, WithStyles, withStyles } from '@material-ui/core';
import { blueGrey, green, grey, red } from '@material-ui/core/colors';
import React from 'react';
import classnames from 'classnames';

export enum StepStatus {
  Positive = 'positive',
  Negative = 'negative',
  Pristine = 'pristine',
}

export interface Step {
  status: StepStatus;
}

interface GameProgressProps extends WithStyles<typeof styles> {
  steps: Step[];
  onCardSelected: (cardIndex: number) => void;
  currentStepIndex?: number;
}

const styles = createStyles({
  container: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  step: {
    width: 20,
    height: 20,
    backgroundColor: grey[400],
    borderRadius: '50%',
    cursor: 'pointer'
  },
  positiveStep: {
    backgroundColor: green[500],
  },
  negativeStep: {
    backgroundColor: red[500],
  },
  active: {
    border: `2px solid ${blueGrey[500]}`,
    height: 16,
    width: 16
  }
});

const GameProgress = (props: GameProgressProps) => {
  const { steps, classes, onCardSelected, currentStepIndex } = props;

  return (
    <div className={classes.container}>
      {steps.map((step, index) => (
        <div
          onClick={() => onCardSelected(index)}
          key={index}
          className={classnames(classes.step, {
            [classes.positiveStep]: step.status === 'positive',
            [classes.negativeStep]: step.status === 'negative',
            [classes.active]: index === currentStepIndex
          })}
        />
      ))}
    </div>
  );
};

export default withStyles(styles)(GameProgress);
