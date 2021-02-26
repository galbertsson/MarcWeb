import { createStyles, Fab, Paper, WithStyles, withStyles } from '@material-ui/core';
import React, { useState } from 'react';

const styles = createStyles({
    container: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'row-reverse',
        bottom: 5,
        right: 5,
        alignItems: 'flex-end'
    },
    optionsContainer: {
        marginRight: 10
    },
    option: {
        padding: 10,
        margin: 5
    }
});

export interface SpeedDialOption {
    text: string;
    icon: JSX.Element;
    onClick: () => void;
}

interface SpeedDialProps {
    options: SpeedDialOption[];
}

const SpeedDial = (props: SpeedDialProps & WithStyles<typeof styles>) => {
    const { options, classes } = props;
    const [dialOpen, setDialOpen] = useState(false);

    return (
        <div className={classes.container}>
            <Fab onClick={() => setDialOpen(!dialOpen)}>+</Fab>
            {
                dialOpen && <div className={classes.optionsContainer}>
                    {options.map(option => <Paper key={option.text} className={classes.option} onClick={option.onClick}>{option.text}</Paper>)}
                </div>
            }
        </div>
    )
}

export default withStyles(styles)(SpeedDial);
