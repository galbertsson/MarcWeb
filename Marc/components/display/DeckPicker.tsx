import React from 'react'
import BasicDeck from "./BasicDeck";
import Deck from '../../util/Deck';
import { createStyles, WithStyles, withStyles } from '@material-ui/core';

const styles = createStyles({
    top: {
        height: 55,
        backgroundColor: 'white',
        zIndex: 2,
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        margin: 0
    },
    picker: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly'
    }
});

interface DeckPickerProps extends WithStyles<typeof styles> {
    decks: Deck[]
}

const DeckPicker = ({ decks, classes }: DeckPickerProps) => {
    return (
        <div>
            <div className={classes.top}>
                Deck Overview
            </div>
            <div className={classes.picker}>
                {decks.map(deck => <BasicDeck key={deck._id} deck={deck} />)}
            </div>
        </div>
    )
}

export default withStyles(styles)(DeckPicker);