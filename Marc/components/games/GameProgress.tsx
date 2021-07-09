import { createStyles, WithStyles, withStyles } from '@material-ui/core';
import { green, grey, red } from '@material-ui/core/colors';
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
}

const styles = createStyles({
  container: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-around',
  },
  step: {
    width: 20,
    height: 20,
    backgroundColor: grey[400],
    borderRadius: '50%',
  },
  positiveStep: {
    backgroundColor: green[500],
  },
  negativeStep: {
    backgroundColor: red[500],
  },
});

const GameProgress = (props: GameProgressProps) => {
  const { steps, classes } = props;

  return (
    <div className={classes.container}>
      {steps.map((step) => (
        <div
          className={classnames(classes.step, {
            [classes.positiveStep]: step.status === 'positive',
            [classes.negativeStep]: step.status === 'negative',
          })}
        />
      ))}
    </div>
  );
};

export default withStyles(styles)(GameProgress);
