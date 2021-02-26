import { createStyles, withStyles, WithStyles } from '@material-ui/core';
import React from 'react';

const styles = createStyles({
  top: {
    height: 55,
    backgroundColor: 'white',
    zIndex: 2,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    display: 'flex',
    alignItems: 'center',
    padding: '0 20px',
    justifyContent: 'space-between',
  },
});

interface SubHeaderProps {
  leftData?: JSX.Element | JSX.Element[] | string;
  rightData?: JSX.Element | JSX.Element[] | string;
}

const SubHeader = (props: SubHeaderProps & WithStyles<typeof styles>) => {
  const { leftData, rightData, classes } = props;

  return (
    <div className={classes.top}>
      {leftData && <div>{leftData}</div>}
      {rightData && <div>{rightData}</div>}
    </div>
  );
};

export default withStyles(styles)(SubHeader);
